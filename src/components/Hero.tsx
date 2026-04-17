import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 350]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
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
              
              <h1 className="text-massive mb-8 overflow-hidden">
                <motion.div 
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  style={{ y: y1 }}
                  className="block"
                >
                  DEFINIENDO LA
                </motion.div>
                <div className="flex flex-wrap gap-x-4">
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
                    className="text-pink block"
                  >
                    DIGITAL.
                  </motion.span>
                </div>
              </h1>

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
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-pink/20 blur-3xl rounded-full" />
              <div className="relative h-full w-full bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
                  alt="Digital Art" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              </div>

              {/* Floating Artifacts */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 md:-top-8 md:-right-8 w-20 h-20 md:w-28 md:h-28 bg-accent/20 backdrop-blur-xl border border-white/20 flex items-center justify-center rounded-2xl shadow-2xl"
              >
                <Zap className="text-accent w-8 h-8 md:w-10 md:h-10" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-28 h-28 md:w-36 md:h-36 bg-pink/20 backdrop-blur-xl border border-white/20 flex items-center justify-center rounded-2xl shadow-2xl"
              >
                <div className="text-center flex flex-col gap-0.5">
                  <p className="text-2xl md:text-3xl font-black text-pink leading-none">IA</p>
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted">Desplazar</span>
        <div className="w-px h-16 bg-white/10 relative overflow-hidden">
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
