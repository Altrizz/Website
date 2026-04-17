import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Home from "@/src/pages/Home";
import Store from "@/src/pages/Store";
import AIConsultant from "@/src/components/AIConsultant";
import Cursor from "@/src/components/Cursor";
import InteractiveBackground from "@/src/components/InteractiveBackground";
import Loader from "@/src/components/Loader";
import { Logo } from "@/src/components/Logo";
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

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
    <Router>
      <ScrollToTop />
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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/store" element={<Store />} />
            </Routes>

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
                    <p className="text-2xl font-bold text-white mt-12 mb-12 leading-tight tracking-tighter uppercase">
                      SOMOS LOS ARQUITECTOS DE LA <br />
                      <span className="text-accent">EXCELENCIA DIGITAL.</span>
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
                          { name: 'Proyectos', href: '/#work' },
                          { name: 'Servicios', href: '/#services' },
                          { name: 'Proceso', href: '/#process' },
                          { name: 'Catálogo', href: '/store' },
                          { name: 'Contacto', href: '/#contact' }
                        ].map((item) => (
                          <li key={item.name}>
                            <Link 
                              to={item.href} 
                              className="text-muted hover:text-white transition-colors flex items-center gap-2 group"
                            >
                              <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                              {item.name}
                            </Link>
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
    </Router>
  );
}

