import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import AIConsultant from "@/src/components/AIConsultant";
import Cursor from "@/src/components/Cursor";
import Marquee from "@/src/components/Marquee";
import Process from "@/src/components/Process";
import InteractiveBackground from "@/src/components/InteractiveBackground";
import Loader from "@/src/components/Loader";
import { Logo } from "@/src/components/Logo";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (loading) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [loading]);

  return (
    <div className={`min-h-screen bg-bg relative selection:bg-pink selection:text-white ${loading ? "h-screen overflow-hidden" : "overflow-x-hidden"}`}>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Cursor />
      <InteractiveBackground />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-pink z-[100] origin-left"
        style={{ scaleX }}
      />

      <div className={`relative z-10 transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main>
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
                  <h2 className="text-massive mb-8 max-w-2xl lg:max-w-none uppercase">
                    NO SOLO CONSTRUIMOS. <br /> <span className="text-pink">ACELERAMOS</span>.
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
                <h2 className="text-massive text-white mb-12 uppercase">¿LISTO PARA DEFINIR EL FUTURO?</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  <button className="cta-button">
                    Inicia tu Proyecto
                  </button>
                  <button className="cta-button-outline">
                    Ver Nuestro Trabajo
                  </button>
                </div>
              </div>
            </div>
            {/* Background Text Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none">
              AURA DIGITAL
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            initial={{ opacity: 0, y: 100, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 pt-20 pb-12 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
                <div className="lg:col-span-5">
                  <Logo />
                  <p className="text-2xl font-bold text-white mt-12 mb-12 leading-tight tracking-tighter">
                    SOMOS LOS ARQUITECTOS DE LA <br />
                    <span className="text-accent">EXCELENCIA DIGITAL</span>.
                  </p>
                  <div className="flex gap-6">
                    {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                      <motion.a 
                        key={i}
                        href="#" 
                        whileHover={{ y: -5, color: "var(--color-accent)" }}
                        className="w-12 h-12 border border-white/10 rounded-xl flex items-center justify-center text-muted transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8">Navegación</h4>
                    <ul className="space-y-4">
                      {[
                        { name: 'Proyectos', id: 'work' },
                        { name: 'Servicios', id: 'services' },
                        { name: 'Proceso', id: 'process' },
                        { name: 'Agencia', id: 'about' },
                        { name: 'Contacto', id: 'contact' }
                      ].map((item) => (
                        <li key={item.id}>
                          <a href={`#${item.id}`} className="text-muted hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-pink mb-8">Contacto</h4>
                    <ul className="space-y-6">
                      <li className="flex gap-4">
                        <Mail className="w-5 h-5 text-pink shrink-0" />
                        <span className="text-muted text-sm">hello@auradigital.com</span>
                      </li>
                      <li className="flex gap-4">
                        <Phone className="w-5 h-5 text-pink shrink-0" />
                        <span className="text-muted text-sm">+1 (555) 000-1234</span>
                      </li>
                      <li className="flex gap-4">
                        <MapPin className="w-5 h-5 text-pink shrink-0" />
                        <span className="text-muted text-sm">123 Digital Way,<br />San Francisco, CA</span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8">Boletín</h4>
                    <p className="text-muted text-xs mb-6 leading-relaxed">Recibe las últimas novedades sobre IA y diseño.</p>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Correo Electrónico" 
                        className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                      />
                      <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-black hover:scale-110 transition-transform">
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-muted">
                  <a href="#" className="hover:text-white transition-colors">Privacidad</a>
                  <a href="#" className="hover:text-white transition-colors">Términos</a>
                  <a href="#" className="hover:text-white transition-colors">Cookies</a>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted">
                  © 2024 AURA DIGITAL. TODOS LOS DERECHOS RESERVADOS.
                </p>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 text-[30vw] font-black text-white/[0.01] leading-none pointer-events-none translate-y-1/4">
              AURA
            </div>
          </motion.footer>
        </main>

        <AIConsultant />
      </div>
    </div>
  );
}

