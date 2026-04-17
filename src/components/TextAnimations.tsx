import { motion, useInView } from "motion/react";
import { useRef } from "react";

// 1. Letters flying in from random extreme coordinates across the whole screen
export function AssembleText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  let charIndex = 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => {
        const wordContent = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const gIdx = charIndex++;
              // Deterministic pseudo-random based on index to scatter letters across the entire screen
              const rx = (Math.sin(gIdx * 12.9898) - 0.5) * 1500;
              const ry = (Math.cos(gIdx * 78.233) - 0.5) * 1500;
              const rRot = (Math.sin(gIdx * 33.33) - 0.5) * 360;

              return (
                <motion.span
                  key={gIdx}
                  initial={{ opacity: 0, x: rx, y: ry, rotate: rRot, scale: 0.5, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1, filter: "blur(0px)" } : {}}
                  transition={{ type: "spring", damping: 15, stiffness: 60, delay: 0.1 + (gIdx * 0.02) }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charIndex++; // space
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

// 2. Letters glitching intensely with multi-colored RGB split flashes
export function GlitchText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  let charIndex = 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => {
        const wordContent = (
          <span key={wordIdx} className="inline-block whitespace-nowrap relative">
            {word.split("").map((char) => {
              const gIdx = charIndex++;
              return (
                <motion.span
                  key={gIdx}
                  initial={{ opacity: 0, x: -30, skewX: 50, filter: "brightness(2)" }}
                  animate={isInView ? { 
                    opacity: [0, 1, 0.2, 1, 0.5, 1],
                    x: [-30, 20, -10, 5, -2, 0],
                    skewX: [50, -30, 20, -10, 5, 0],
                    color: ["#ff007f", "#3b82f6", "#ffffff", "#ff007f", "#ffffff"],
                    filter: ["brightness(2) blur(4px)", "brightness(1) blur(0px)"]
                  } : {}}
                  transition={{ duration: 0.7, delay: gIdx * 0.04, ease: "easeOut" }}
                  className="inline-block relative"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charIndex++;
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

// 3. Heavy blocks dropping vertically from the previous section
export function VelocityText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  let charIndex = 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {words.map((word, wordIdx) => {
        const wordContent = (
          <span key={wordIdx} className="inline-block whitespace-nowrap overflow-y-visible">
            {word.split("").map((char) => {
              const gIdx = charIndex++;
              return (
                <motion.span
                  key={gIdx}
                  initial={{ opacity: 0, y: -400, scaleY: 3, filter: "blur(5px)" }}
                  animate={isInView ? { opacity: 1, y: 0, scaleY: 1, filter: "blur(0px)" } : {}}
                  transition={{ type: "spring", damping: 10, stiffness: 120, delay: gIdx * 0.03 }}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charIndex++;
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

// 4. 3D Folding/Flipping perspective text
export function PerspectiveText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  let charIndex = 0;
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <span ref={ref} className={`inline-block perspective-[1000px] ${className}`}>
      {words.map((word, wordIdx) => {
        const wordContent = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {word.split("").map((char) => {
              const gIdx = charIndex++;
              return (
                <motion.span
                  key={gIdx}
                  initial={{ opacity: 0, rotateX: -90, y: 40, z: -100 }}
                  animate={isInView ? { opacity: 1, rotateX: 0, y: 0, z: 0 } : {}}
                  transition={{ duration: 0.6, delay: gIdx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block origin-bottom"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
        charIndex++;
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
