import { motion } from "motion/react";
import Hero from "@/src/components/Hero";
import { Link } from "react-router-dom";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import Marquee from "@/src/components/Marquee";
import Process from "@/src/components/Process";
import { VelocityText, PerspectiveText } from "@/src/components/TextAnimations";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <div ref={containerRef}>
      <Hero />
      
      <Marquee text={["Estrategia", "Diseño", "IA", "Escala", "Precisión", "Crecimiento"]} />

      <motion.div 
        initial={{ opacity: 0, y: 150, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20"
      >
        <Services />
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 200, skewX: -10 }}
        whileInView={{ opacity: 1, x: 0, skewX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20"
      >
        <Process />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -200, y: 100 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20"
      >
        <Portfolio />
      </motion.div>
      
      {/* About / CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: -150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        id="about" 
        className="py-16 md:py-24 relative overflow-hidden z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative z-20"
            >
              <span className="section-label">Nuestra Filosofía</span>
              <h2 className="text-massive mb-8 max-w-2xl lg:max-w-none uppercase font-black tracking-tighter">
                <VelocityText text="NO SOLO CONSTRUIMOS." /> <br /> <span className="text-pink"><VelocityText text="ACELERAMOS." /></span>
              </h2>
              <p className="text-xl text-muted mb-12 leading-relaxed max-w-lg">
                Aura Digital se fundó sobre una premisa simple: el futuro pertenece a quienes pueden aprovechar el poder de la IA y el diseño con precisión quirúrgica.
              </p>
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">1</div>
                  <div>
                    <p className="font-bold text-lg text-white">Consulta Estratégica</p>
                    <p className="text-sm text-muted">Inmersión profunda en tus objetivos comerciales.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-pink group-hover:text-white transition-colors">2</div>
                  <div>
                    <p className="font-bold text-lg text-white">Ejecución Creativa</p>
                    <p className="text-sm text-muted">Dando vida a tu visión con precisión extrema.</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">3</div>
                  <div>
                    <p className="font-bold text-lg text-white">Optimización Continua</p>
                    <p className="text-sm text-muted">Crecimiento y refinamiento basados en datos.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="relative z-10">
              <div className="aspect-square bg-surface rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img 
                  src="https://picsum.photos/seed/agency/1000/1000" 
                  alt="Agency Life" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 p-8 bg-surface rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
              >
                <p className="text-4xl font-extrabold tracking-tighter mb-2 text-pink">150%</p>
                <p className="text-[10px] text-muted font-black uppercase tracking-widest">Crecimiento Anual Prom.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9, y: 150 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: "backOut" }}
        className="py-12 md:py-24 text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-massive text-white mb-12 uppercase font-black tracking-tighter drop-shadow-2xl">
              <PerspectiveText text="¿LISTO PARA DEFINIR EL FUTURO?" />
            </h2>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/store" className="cta-button inline-flex">
                Ver Catálogo de Servicios
              </Link>
              <Link to="/#work" className="cta-button-outline inline-flex">
                Ver Nuestro Trabajo
              </Link>
            </div>
          </div>
        </div>
        {/* Background Text Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none">
          AURA DIGITAL
        </div>
      </motion.section>
    </div>
  );
}
