import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function DecipherText({ text, className = "" }: { text: string; className?: string }) {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*+/\\=";
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayChars, setDisplayChars] = useState<string[]>(Array(text.length).fill(""));
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const DURATION = 2000; // 2 seconds total for decipher
    const UPDATE_INTERVAL = 40;
    const TOTAL_STEPS = DURATION / UPDATE_INTERVAL;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const calcProgress = Math.min((currentStep / TOTAL_STEPS) * 100, 100);
      setProgress(calcProgress);

      const lettersToResolve = Math.floor((calcProgress / 100) * text.length);

      setDisplayChars((prev) =>
        text.split("").map((tChar, i) => {
          if (tChar === " ") return " ";
          if (i < lettersToResolve) return tChar;
          return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        })
      );

      if (calcProgress >= 100) {
        clearInterval(interval);
      }
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, [isInView, text]);

  // Split into words to preserve word wrapping behaviors on smaller screens
  const words = text.split(" ");
  let absoluteCharIndex = 0;

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => {
        const wordContent = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIdx) => {
              const globalIdx = absoluteCharIndex++;
              const lettersToResolve = Math.floor((progress / 100) * text.length);
              const isResolved = globalIdx < lettersToResolve || progress === 100;
              const displayChar = isResolved ? char : displayChars[globalIdx] || CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];

              return (
                <motion.span
                  key={globalIdx}
                  animate={{
                    filter: isResolved ? "blur(0px) contrast(100%)" : "blur(6px) contrast(150%)",
                    opacity: isResolved ? 1 : 0.4,
                    scale: isResolved ? 1 : 1.05,
                  }}
                  transition={{
                    filter: { duration: 0.8 },
                    opacity: { duration: 0.8 },
                    scale: { duration: 0.6, ease: "easeOut" },
                  }}
                  className={`inline-block ${!isResolved ? "text-accent/50 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]" : "drop-shadow-none"} transition-colors duration-500`}
                >
                  {displayChar}
                </motion.span>
              );
            })}
          </span>
        );
        absoluteCharIndex++; // Increment for the space
        return (
          <span key={`w-${wordIdx}`}>
            {wordContent}
            {wordIdx < words.length - 1 && <span className="inline-block w-[0.3em]">&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
}
