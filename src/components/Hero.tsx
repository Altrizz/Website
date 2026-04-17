import { motion, useScroll, useTransform, AnimatePresence, useAnimation } from "motion/react";
import { ArrowRight, Zap, Rocket } from "lucide-react";
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
  { initial: { opacity: 0, scale: 0.5, filter: "blur(20px)" }, animate: { opacity: 1, scale: 1, filter: "blur(0px)" }, exit: { opacity: 0, scale: 1.5, filter: "blur(10px)" }, transition: { duration: 0.8, ease: "backOut" } },
  { initial: { opacity: 0, x: 50, skewX: -20, filter: "blur(5px)" }, animate: { opacity: 1, x: 0, skewX: 0, filter: "blur(0px)" }, exit: { opacity: 0, x: -50, skewX: 20, filter: "blur(5px)" }, transition: { duration: 0.6, ease: "easeOut" } },
  { initial: { opacity: 0, y: -40, filter: "brightness(2) blur(10px)" }, animate: { opacity: 1, y: 0, filter: "brightness(1) blur(0px)" }, exit: { opacity: 0, y: 40, filter: "brightness(0) blur(10px)" }, transition: { duration: 0.7, ease: "circOut" } },
  { initial: { opacity: 0, rotate: -15, scale: 1.2 }, animate: { opacity: 1, rotate: 0, scale: 1 }, exit: { opacity: 0, rotate: 15, scale: 0.8 }, transition: { type: "spring", stiffness: 200, damping: 12 } },
  { initial: { opacity: 0, letterSpacing: "0.5em", filter: "blur(10px)" }, animate: { opacity: 1, letterSpacing: "0em", filter: "blur(0px)" }, exit: { opacity: 0, letterSpacing: "-0.1em", filter: "blur(5px)" }, transition: { duration: 0.9, ease: "anticipate" } },
  { initial: { opacity: 0, skewY: 10, y: 30 }, animate: { opacity: 1, skewY: 0, y: 0 }, exit: { opacity: 0, skewY: -10, y: -30 }, transition: { duration: 0.7, ease: "backOut" } }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [wordIdx, setWordIdx] = useState(0);
  const shakeControls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % AGENCY_WORDS.length);
      
      // Shake the lava lamp container
      shakeControls.start({
        scale: [1, 0.95, 1.03, 1],
        rotate: [0, -1.5, 1.5, 0],
        transition: { duration: 0.5, ease: "easeInOut" }
      });

    }, 3000);
    return () => clearInterval(interval);
  }, [shakeControls]);

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
      {/* Background Text Accent */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 right-0 -translate-y-1/2 text-[25vw] font-black text-white/[0.02] leading-none pointer-events-none select-none whitespace-nowrap"
      >
        AURA DIGITAL
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

                <h1 className="text-massive mb-8 relative z-10 overflow-hidden">
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
                      className="text-accent block"
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
                    Nuestro Proceso <Zap className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
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
              {/* Floating Letters Erupting from the Square into the Background */}
              <div className="absolute inset-0 z-[-1] pointer-events-none flex items-center justify-center">
                <AnimatePresence>
                  {AGENCY_WORDS[wordIdx].split('').map((char, i) => {
                    const totalChars = AGENCY_WORDS[wordIdx].length;
                    // Spread in a full circle around the center
                    const angle = (i / totalChars) * Math.PI * 2 + (Math.random() * 0.5);
                    const distanceParams = [100, 250 + Math.random() * 150]; // Outward trajectory
                    // Map distances to relative offsets
                    const startX = Math.cos(angle) * 120;
                    const startY = Math.sin(angle) * 120;
                    const endX = Math.cos(angle) * distanceParams[1];
                    const endY = Math.sin(angle) * distanceParams[1];

                    return (
                      <motion.span
                        key={`erupt-${wordIdx}-${i}-${char}`}
                        initial={{ opacity: 0, x: startX, y: startY, scale: 0.5, filter: "blur(0px)", z: 0 }}
                        animate={{
                          opacity: [0, 0.8, 0],
                          x: endX,
                          y: endY,
                          scale: [0.5, 1.2, 0.2], // Grow out, then shrink back into deep space
                          rotate: Math.random() * 360,
                          filter: ["blur(0px)", "blur(2px)", "blur(15px)"], // Fade into background blur
                        }}
                        transition={{
                          duration: 3 + Math.random(),
                          ease: "easeOut",
                          delay: Math.random() * 0.5 // Non-linear eruption
                        }}
                        className="absolute font-black text-2xl md:text-5xl mix-blend-screen drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                        style={{ color: i % 2 === 0 ? "#3b82f6" : "#ff007f" }}
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* Spinning background ambient glow */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
                className="absolute inset-0 bg-gradient-to-tr from-accent/30 to-pink/30 blur-3xl rounded-full opacity-60" 
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
                    className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-accent/50 to-pink/50 blur-xl z-0 pointer-events-none mix-blend-screen"
                  />
                  <motion.div
                    key={`pulse-ring-${wordIdx}`}
                    initial={{ scale: 0.9, opacity: 1, borderWidth: '4px', borderColor: 'rgba(59,130,246,1)' }}
                    animate={{ scale: 1.3, opacity: 0, borderWidth: '0px', borderColor: 'rgba(255,0,127,0)' }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_80px_rgba(59,130,246,0.8)] z-0 pointer-events-none"
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
                    className="absolute top-0 left-0 w-[120%] h-[120%] bg-accent/60 blur-[60px] rounded-full mix-blend-screen z-0"
                  />
                  <motion.div
                    animate={{
                      y: ["60%", "-20%", "60%"],
                      x: ["40%", "-10%", "40%"],
                      scale: [1.2, 1, 1.2],
                      rotate: [0, -90, 0],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 right-0 w-[120%] h-[120%] bg-pink/60 blur-[60px] rounded-[40%] mix-blend-screen z-0"
                  />
                  <motion.div
                    animate={{
                      y: ["20%", "50%", "20%"],
                      x: ["20%", "50%", "20%"],
                      scale: [0.8, 1.4, 0.8],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[100%] h-[100%] bg-violet-600/50 blur-[50px] rounded-full mix-blend-screen z-0 group-hover:bg-white/20 transition-colors duration-1000"
                  />

                  {/* GLASS REFRACTION OVERLAY */}
                  <div className="absolute inset-0 backdrop-blur-[4px] bg-white/5 z-10" />

                  {/* RANDOM EFFECT WORDS WITH BLOCKY Inner Wave */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden overflow-clip">
                    <AnimatePresence mode="popLayout">
                      <motion.div
                        key={wordIdx}
                        initial={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].initial}
                        animate={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].animate}
                        exit={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].exit}
                        transition={WORD_EFFECTS[wordIdx % WORD_EFFECTS.length].transition as any}
                        className="absolute text-5xl md:text-6xl font-black whitespace-nowrap"
                      >
                        <div className="relative group">
                          {/* Blocky Chromatic Drop Shadow layers mapped behind text */}
                          <span className="absolute inset-0 text-pink translate-x-[4px] translate-y-[4px] opacity-80 z-0 select-none mix-blend-screen">
                            {AGENCY_WORDS[wordIdx]}
                          </span>
                          <span className="absolute inset-0 text-accent -translate-x-[4px] -translate-y-[4px] opacity-80 z-0 select-none mix-blend-screen">
                            {AGENCY_WORDS[wordIdx]}
                          </span>
                          
                          {/* Inner Animated Wave Text layer */}
                          <motion.span
                            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                            className="relative z-10 bg-gradient-to-r from-white via-pink to-white bg-[length:300%_auto] text-transparent bg-clip-text select-none block"
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
