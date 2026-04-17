import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";

const AGENCY_WORDS = [
  "STRATEGY",
  "DESIGN",
  "CODE",
  "LAUNCH",
  "INNOVATE",
  "AURA"
];

const WORD_EFFECTS = [
  { 
    initial: { opacity: 0, scale: 0.8, filter: "blur(12px) brightness(2)" }, 
    animate: { opacity: 1, scale: 1, filter: "blur(0px) brightness(1)" }, 
    exit: { opacity: 0, scale: 1.1, filter: "blur(8px) brightness(0)" }, 
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
  },
  { 
    initial: { opacity: 0, x: 20, y: 10, filter: "blur(10px)", rotate: -2 }, 
    animate: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", rotate: 0 }, 
    exit: { opacity: 0, x: -20, y: -10, filter: "blur(10px)", rotate: 2 }, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  },
  { 
    initial: { opacity: 0, letterSpacing: "0.4em", scale: 0.9 }, 
    animate: { opacity: 1, letterSpacing: "0em", scale: 1 }, 
    exit: { opacity: 0, letterSpacing: "-0.1em", scale: 1.1 }, 
    transition: { duration: 1.2, ease: "anticipate" } 
  },
  { 
    initial: { opacity: 0, rotateX: 90, filter: "blur(4px)" }, 
    animate: { opacity: 1, rotateX: 0, filter: "blur(0px)" }, 
    exit: { opacity: 0, rotateX: -90, filter: "blur(4px)" }, 
    transition: { duration: 0.7, ease: "circOut" } 
  },
  { 
    initial: { opacity: 0, skewX: -20, x: -30 }, 
    animate: { opacity: 1, skewX: 0, x: 0 }, 
    exit: { opacity: 0, skewX: 20, x: 30 }, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const shakeControls = useAnimation();
  const bgControls = useAnimation();
  const globalPulseControls = useAnimation();

  useEffect(() => {
    // Deep global background pulse (Occurs every 8 seconds, independent of character cycle)
    const pulseInterval = setInterval(() => {
      globalPulseControls.start({
        opacity: [0.03, 0.08, 0.03],
        scale: [1, 1.05, 1],
        transition: { duration: 4, ease: "easeInOut" }
      });
    }, 8000);

    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % AGENCY_WORDS.length);
      
      // Shake the lava lamp container
      shakeControls.start({
        scale: [1, 0.95, 1.03, 1],
        rotate: [0, -1.5, 1.5, 0],
        transition: { duration: 0.5, ease: "easeInOut" }
      });

      // Pulse background in sync
      bgControls.start({
        scale: [1, 1.15, 1],
        opacity: [0.6, 0.9, 0.6],
        filter: ["blur(48px)", "blur(32px)", "blur(48px)"],
        transition: { duration: 0.8, ease: "easeOut" }
      });

    }, 3000);
    return () => {
      clearInterval(interval);
      clearInterval(pulseInterval);
    };
  }, [shakeControls, bgControls, globalPulseControls]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-32 overflow-hidden">
      {/* Background Pulse Glow */}
      <motion.div
        animate={globalPulseControls}
        initial={{ opacity: 0.03 }}
        style={{ backgroundImage: "var(--background-radial-pulse)" }}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Background Text Accent */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 0.02,
          transition: { duration: 1.5, ease: "easeOut" }
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[25vw] font-black text-white leading-none pointer-events-none select-none whitespace-nowrap z-0"
      >
        <motion.div animate={globalPulseControls}>
          AURA DIGITAL
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ opacity }}
            >
              <span className="section-label">Agencia de Excelencia Digital</span>
              
              <div className="relative">

                <h1 className="text-massive mb-8 relative z-10 overflow-hidden text-white">
                  <motion.div 
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ y: y1 }}
                    className="block"
                  >
                    DEFINIENDO LA
                  </motion.div>
                  <div className="flex flex-wrap gap-x-4 relative">
                    <motion.span 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                      style={{ y: y2 }}
                      className="text-white border-b-2 border-white/20 block"
                    >
                      FRONTERA
                    </motion.span>
                    <motion.span 
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      style={{ y: y3 }}
                      className="text-pink block relative origin-bottom-left"
                    >
                      DIGITAL.
                    </motion.span>
                  </div>
                </h1>
              </div>

              <p className="text-xl text-muted mb-12 leading-relaxed max-w-xl overflow-hidden">
                <motion.span 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  Combinamos precisión quirúrgica en diseño con estrategia avanzada de IA para acelerar 
                  tu marca hacia el futuro de la economía digital.
                </motion.span>
              </p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-wrap gap-6"
              >
                <motion.div
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="cta-button btn-glitch group">
                    Ver Portafolio <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ x: -2, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="cta-button btn-glitch group gap-2">
                    Nuestro Proceso <Zap className="w-4 h-4 text-pink group-hover:scale-110 transition-transform" />
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-12 md:mt-16 flex flex-wrap gap-8 md:gap-16 items-center"
            >
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter -mb-1">50+</p>
                <p className="text-[10px] text-muted font-black uppercase tracking-widest">Aliados Globales</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <p className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter -mb-1">12</p>
                <p className="text-[10px] text-muted font-black uppercase tracking-widest">Premios de Diseño</p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-[450px] mx-auto lg:ml-auto"
            >
              {/* Floating Background Particles (Dots merging with background) */}
              <div className="absolute inset-0 z-[-1] pointer-events-none flex items-center justify-center">
                <AnimatePresence>
                  {[...Array(12)].map((_, i) => {
                    const angle = (i / 12) * Math.PI * 2 + (Math.random() * 0.5);
                    const distance = 250 + Math.random() * 150;
                    const startX = Math.cos(angle) * 100;
                    const startY = Math.sin(angle) * 100;
                    const endX = Math.cos(angle) * distance;
                    const endY = Math.sin(angle) * distance;

                    return (
                      <motion.div
                        key={`particle-${wordIdx}-${i}`}
                        initial={{ opacity: 0, x: startX, y: startY, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          x: endX,
                          y: endY,
                          scale: [0, 1.5, 0],
                          filter: ["blur(0px)", "blur(4px)", "blur(20px)"],
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          ease: "easeOut",
                          delay: i * 0.05
                        }}
                        className="absolute w-2 h-2 rounded-full bg-white/40 blur-[1px] mix-blend-screen"
                      />
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Pulsing Background Glow */}
              <motion.div 
                animate={bgControls}
                initial={{ opacity: 0.6, scale: 1, filter: "blur(48px)" }}
                className="absolute inset-0 bg-gradient-to-tr from-white/10 to-pink/20 rounded-full z-[-2]" 
              />
              
              {/* Spinning background ambient glow */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-white/5 to-pink/10 blur-3xl rounded-full opacity-40 z-[-3]" 
              />
              
              {/* THE LAVA LAMP DIAL: Abstract Fluid Animation */}
              <motion.div 
                animate={{ y: [-10, 10, -10], x: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full rounded-[2.5rem] shadow-2xl group"
              >
                {/* Noticeable Massive Double Pulse */}
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={`pulse-glow-${wordIdx}`}
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-white/20 to-pink/20 blur-xl z-0 pointer-events-none mix-blend-screen"
                  />
                  <motion.div
                    key={`pulse-ring-${wordIdx}`}
                    initial={{ scale: 0.9, opacity: 1, borderWidth: '4px', borderColor: 'rgba(255,255,255,0.4)' }}
                    animate={{ scale: 1.3, opacity: 0, borderWidth: '0px', borderColor: 'rgba(255,255,255,0)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_80px_rgba(255,255,255,0.2)] z-0 pointer-events-none"
                  />
                </AnimatePresence>

                {/* Inner Jitter Shake (No remounting) */}
                <motion.div
                  animate={shakeControls}
                  className="relative h-full w-full bg-[#05050a] border border-white/10 rounded-[2.5rem] flex items-center justify-center overflow-hidden"
                >
                  {/* LAVA BLOBS (Fluid Gradients) */}
                  <motion.div
                    animate={{
                      y: ["-20%", "60%", "-20%"],
                      x: ["-10%", "40%", "-10%"],
                      scale: [1, 1.5, 1],
                      rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-[120%] h-[120%] bg-white/10 blur-[60px] rounded-full mix-blend-screen z-0"
                  />
                  <motion.div
                    animate={{
                      y: ["60%", "-20%", "60%"],
                      x: ["40%", "-10%", "40%"],
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-[120%] h-[120%] bg-pink/20 blur-[60px] rounded-[40%] mix-blend-screen z-0"
                  />
                  <motion.div
                    animate={{
                      y: ["20%", "50%", "20%"],
                      x: ["20%", "50%", "20%"],
                      scale: [0.8, 1.4, 0.8],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[100%] h-[100%] bg-white/5 blur-[50px] rounded-full mix-blend-screen z-0 group-hover:bg-white/10 transition-colors duration-1000"
                  />

                  {/* GLASS REFRACTION OVERLAY */}
                  <div className="absolute inset-0 backdrop-blur-[4px] bg-white/5 z-10" />

                  {/* RANDOM EFFECT WORDS WITH BLOCKY Inner Wave */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={wordIdx}
                        initial={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].initial}
                        animate={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].animate}
                        exit={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].exit}
                        transition={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].transition}
                        className="text-5xl md:text-6xl font-black whitespace-nowrap"
                      >
                        <div className="relative">
                          {/* Ghost Layer for Soft Glow */}
                          <span className="absolute inset-0 text-white opacity-20 blur-[2px] select-none">
                            {AGENCY_WORDS[wordIdx]}
                          </span>
                          
                          {/* Inner Animated Wave Text layer */}
                          <motion.span
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="relative z-10 bg-gradient-to-r from-white via-white/80 to-white bg-[length:200%_auto] text-transparent bg-clip-text select-none block"
                          >
                            {AGENCY_WORDS[wordIdx]}
                          </motion.span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 pointer-events-none z-30" />
                  <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none group-hover:border-white/20 transition-colors duration-700 z-30" />
                </motion.div>
              </motion.div>

              {/* Floating Artifacts */}
              <motion.div 
                animate={{ y: [-15, 15, -15], x: [-5, 10, -5], rotate: [-5, 15, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-20 h-20 md:w-28 md:h-28 bg-surface/40 backdrop-blur-2xl border border-white/10 flex items-center justify-center rounded-3xl shadow-[0_0_40px_rgba(59,130,246,0.15)] group cursor-pointer hover:border-accent/50 hover:bg-surface/80 transition-all duration-500 z-20"
              >
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
                  <Zap className="text-accent w-8 h-8 md:w-10 md:h-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [15, -15, 15], x: [10, -5, 10], rotate: [5, -10, 5] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-28 h-28 md:w-36 md:h-36 bg-surface/40 backdrop-blur-2xl border border-white/10 flex items-center justify-center rounded-3xl shadow-[0_0_40px_rgba(255,0,127,0.15)] group cursor-pointer hover:border-pink/50 hover:bg-surface/80 transition-all duration-500 z-20"
              >
                <div className="text-center flex flex-col gap-0.5">
                  <motion.p 
                    animate={{ scale: [1, 1.1, 1] }} 
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-pink to-accent leading-none drop-shadow-[0_0_15px_rgba(255,0,127,0.3)] group-hover:scale-110 transition-transform duration-500"
                  >
                    IA
                  </motion.p>
                  <p className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/60">Impulsado</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted">Scroll</span>
        <div className="w-px h-12 md:h-16 bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 w-full h-1/2 bg-gradient-to-b from-transparent via-accent to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
