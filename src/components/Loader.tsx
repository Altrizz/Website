import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

const CursorSVG = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M5.65376 12.3822L2.10329 2.16453C1.84806 1.43003 2.56991 0.708182 3.30441 0.963412L13.5221 4.51388C14.281 4.77771 14.3411 5.8202 13.6231 6.16641L9.63697 8.08726C9.46743 8.16895 9.33105 8.30533 9.24936 8.47487L7.32851 12.461C6.98229 13.179 5.93981 13.1189 5.67598 12.36L5.65376 12.3822Z" 
      fill="white"
      stroke="black"
      strokeWidth="1"
    />
  </svg>
);

export default function Loader({ onComplete }: { onComplete: () => void; key?: string }) {
  const [stage, setStage] = useState<'intro' | 'loading'>('intro');
  const [isClicked, setIsClicked] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  
  const TARGET_WORD = "AURA";
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*+/\\=";
  const [displayChars, setDisplayChars] = useState<string[]>(["", "", "", ""]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (stage === 'loading') {
      const DURATION = 3500;
      const UPDATE_INTERVAL = 60;
      const TOTAL_STEPS = DURATION / UPDATE_INTERVAL;
      let currentStep = 0;

      const interval = setInterval(() => {
        currentStep++;
        const calcProgress = Math.min((currentStep / TOTAL_STEPS) * 100, 100);
        setProgress(calcProgress);

        const lettersToResolve = Math.floor((calcProgress / 100) * TARGET_WORD.length);

        setDisplayChars(
          TARGET_WORD.split("").map((tChar, i) => {
            if (i < lettersToResolve) return tChar;
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
        );

        if (calcProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1200);
        }
      }, UPDATE_INTERVAL);

      return () => clearInterval(interval);
    }
  }, [stage, onComplete]);

  const handleImpact = () => {
    setIsClicked(true);
    setShowFlash(true);
    setTimeout(() => setShowFlash(false), 150);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-bg flex flex-col items-center justify-center overflow-hidden"
      exit={{ scale: 1.05, opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      animate={isClicked ? { 
        x: [0, -10, 10, -5, 5, 0],
        transition: { duration: 0.4 }
      } : {}}
    >
      {/* Impact Flash */}
      <AnimatePresence>
        {showFlash && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {stage === 'intro' ? (
          <motion.div 
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* The Start Button */}
            <motion.div
              animate={{ 
                scale: isClicked ? [1, 0.95, 1.05] : 1,
                borderColor: isClicked ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)",
                backgroundColor: isClicked ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0)",
                boxShadow: isClicked ? "0 0 30px rgba(255,255,255,0.1)" : "0 0 0px rgba(255,255,255,0)"
              }}
              transition={{ duration: 0.4 }}
              className="px-10 py-4 border rounded-xl font-medium text-[10px] uppercase tracking-[0.4em] text-white flex items-center justify-center pointer-events-none relative overflow-hidden"
            >
              <span className="relative z-10">INICIAR</span>
              {isClicked && (
                <motion.div 
                  initial={{ scale: 0, opacity: 0.5 }}
                  animate={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-white rounded-full"
                />
              )}
            </motion.div>

            {/* The Animated Cursor */}
            <motion.div
              initial={{ x: 200, y: 300, opacity: 0 }}
              animate={{ 
                x: [200, 0, 0], 
                y: [300, 0, 0], 
                opacity: [0, 1, 1],
                scale: [1, 1, 0.8, 1]
              }}
              transition={{ 
                duration: 2.2, 
                times: [0, 0.6, 0.8, 1],
                ease: "easeInOut"
              }}
              onUpdate={(latest) => {
                if (latest.scale && (latest.scale as number) < 0.9 && !isClicked) {
                  handleImpact();
                }
              }}
              onAnimationComplete={() => {
                setTimeout(() => setStage('loading'), 600);
              }}
              className="absolute pointer-events-none z-20"
              style={{ top: "100%" }}
            >
              <CursorSVG />
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={isClicked ? { opacity: 0 } : { opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -bottom-16 text-[9px] uppercase tracking-[0.3em] text-muted font-bold whitespace-nowrap"
            >
              PREPARANDO ENTORNO
            </motion.p>
          </motion.div>
        ) : (
          <motion.div 
            key="loading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center"
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
        )}
      </AnimatePresence>
    </motion.div>
  );
}
