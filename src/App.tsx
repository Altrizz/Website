import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import AIConsultant from "@/src/components/AIConsultant";
import Cursor from "@/src/components/Cursor";
import Marquee from "@/src/components/Marquee";
import Process from "@/src/components/Process";
import { Logo } from "@/src/components/Logo";
import { ArrowUpRight, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-bg relative selection:bg-pink selection:text-white">
      <Cursor />
      
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-pink z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink/5 rounded-full blur-[150px]" 
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          
          <Marquee text={["Strategy", "Design", "AI", "Scale", "Precision", "Growth"]} />

          <Services />
          
          <Process />

          <Portfolio />
          
          {/* About / CTA Section */}
          <section id="about" className="py-16 md:py-32 bg-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative z-20"
                >
                  <span className="section-label">Our Philosophy</span>
                  <h2 className="text-massive mb-8 max-w-2xl lg:max-w-none">
                    WE DON'T JUST BUILD. WE <span className="text-pink">ACCELERATE</span>.
                  </h2>
                  <p className="text-xl text-muted mb-12 leading-relaxed max-w-lg">
                    Aura Digital was founded on a simple premise: the future belongs to those who can harness the power of AI and design with surgical precision.
                  </p>
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">1</div>
                      <div>
                        <p className="font-bold text-lg text-white">Strategic Consultation</p>
                        <p className="text-sm text-muted">Deep dive into your business goals.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-pink group-hover:text-white transition-colors">2</div>
                      <div>
                        <p className="font-bold text-lg text-white">Creative Execution</p>
                        <p className="text-sm text-muted">Bringing vision to life with precision.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">3</div>
                      <div>
                        <p className="font-bold text-lg text-white">Continuous Optimization</p>
                        <p className="text-sm text-muted">Data-driven growth and refinement.</p>
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
                    <p className="text-[10px] text-muted font-black uppercase tracking-widest">Avg Annual Growth</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-16 md:py-32 bg-bg text-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-massive text-white mb-12 uppercase">READY TO DEFINE THE FUTURE?</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  <button className="cta-button">
                    Start Your Project
                  </button>
                  <button className="cta-button-outline">
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
            {/* Background Text Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none">
              AURA DIGITAL
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-bg border-t border-white/10 pt-32 pb-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32">
                <div className="lg:col-span-5">
                  <Logo />
                  <p className="text-2xl font-bold text-white mt-12 mb-12 leading-tight tracking-tighter">
                    WE ARE THE ARCHITECTS OF <br />
                    <span className="text-accent">DIGITAL EXCELLENCE</span>.
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
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8">Navigation</h4>
                    <ul className="space-y-4">
                      {['Work', 'Services', 'Process', 'Agency', 'Contact'].map((item) => (
                        <li key={item}>
                          <a href={`#${item.toLowerCase()}`} className="text-muted hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-0 h-px bg-accent group-hover:w-4 transition-all" />
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-pink mb-8">Contact</h4>
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
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-8">Newsletter</h4>
                    <p className="text-muted text-xs mb-6 leading-relaxed">Get the latest insights on AI and design.</p>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Email Address" 
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
                  <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted">
                  © 2024 AURA DIGITAL. ALL RIGHTS RESERVED.
                </p>
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 text-[30vw] font-black text-white/[0.01] leading-none pointer-events-none translate-y-1/4">
              AURA
            </div>
          </footer>
        </main>

        <AIConsultant />
      </div>
    </div>
  );
}

