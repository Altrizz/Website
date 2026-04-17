import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void; key?: string }) {
  const TARGET_WORD = "AURA";
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*+/\\=";
  const [displayChars, setDisplayChars] = useState<string[]>(["", "", "", ""]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const DURATION = 3500; // Takes 3.5 seconds to decipher fully
    const UPDATE_INTERVAL = 60; // Slightly slower letter change for a smoother feel
    const TOTAL_STEPS = DURATION / UPDATE_INTERVAL;
    let currentStep = 0;

    // A small delay before beginning to allow everything to render nicely
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        const calcProgress = Math.min((currentStep / TOTAL_STEPS) * 100, 100);
        setProgress(calcProgress);

        // Calculate how many letters should be "locked in" based on the progress naturally
        const lettersToResolve = Math.floor((calcProgress / 100) * TARGET_WORD.length);

        setDisplayChars(
          TARGET_WORD.split("").map((tChar, i) => {
            if (i < lettersToResolve) return tChar;
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
        );

        if (calcProgress >= 100) {
          clearInterval(interval);
          // Wait gracefully before completing the transition into the website
          setTimeout(onComplete, 1200);
        }
      }, UPDATE_INTERVAL);

      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
      // Much softer, sweeping exit animation instead of explosive fast scale
      exit={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
    >
      <div className="flex text-[25vw] md:text-[20vw] font-black text-white leading-none tracking-tighter mix-blend-difference selection:bg-transparent mb-16 md:mb-20">
        {TARGET_WORD.split("").map((tChar, i) => {
          const lettersToResolve = Math.floor((progress / 100) * TARGET_WORD.length);
          const isResolved = i < lettersToResolve;
          const char = isResolved ? tChar : displayChars[i] || CHARACTERS[0];
          
          return (
            <motion.span
              key={i}
              animate={{ 
                filter: isResolved ? "blur(0px) contrast(100%)" : "blur(8px) contrast(150%)",
                opacity: isResolved ? 1 : 0.4,
                scale: isResolved ? 1 : 1.05
              }}
              transition={{ 
                filter: { duration: 0.8 },
                opacity: { duration: 0.8 },
                scale: { duration: 0.8, ease: "easeOut" }
              }}
              className={`inline-block ${!isResolved ? "text-pink/60 drop-shadow-[0_0_15px_rgba(255,0,127,0.8)]" : "drop-shadow-none"} transition-colors duration-700`}
            >
              {char}
            </motion.span>
          );
        })}
      </div>

      {/* Elegant, minimalist Loading Bar */}
      <div className="flex flex-col items-center w-64 md:w-80">
        <div className="w-full h-px bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 bottom-0 bg-white"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <div className="mt-4 text-[10px] uppercase tracking-[0.3em] text-muted font-black flex justify-between w-full">
          <span>Iniciando</span>
          <span className="tabular-nums">{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
}
