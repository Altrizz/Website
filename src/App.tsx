import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import AIConsultant from "@/src/components/AIConsultant";
import { Logo } from "@/src/components/Logo";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-bg relative selection:bg-pink selection:text-white">
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
          
          <Services />
          
          {/* Transition Accent */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="accent-line" />
          </div>

          <Portfolio />
          
          {/* About / CTA Section */}
          <section id="about" className="py-32 bg-bg relative overflow-hidden">
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
                      <div className="w-12 h-12 rounded-none bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">1</div>
                      <div>
                        <p className="font-bold text-lg text-white">Strategic Consultation</p>
                        <p className="text-sm text-muted">Deep dive into your business goals.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-none bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-pink group-hover:text-white transition-colors">2</div>
                      <div>
                        <p className="font-bold text-lg text-white">Creative Execution</p>
                        <p className="text-sm text-muted">Bringing vision to life with precision.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 group">
                      <div className="w-12 h-12 rounded-none bg-white text-black flex items-center justify-center font-bold shadow-md group-hover:bg-accent group-hover:text-white transition-colors">3</div>
                      <div>
                        <p className="font-bold text-lg text-white">Continuous Optimization</p>
                        <p className="text-sm text-muted">Data-driven growth and refinement.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                <div className="relative z-10">
                  <div className="aspect-square bg-surface rounded-none overflow-hidden shadow-2xl border border-white/10 group">
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
                    className="absolute -bottom-10 -left-10 p-8 bg-surface rounded-none shadow-2xl border border-white/10 backdrop-blur-xl"
                  >
                    <p className="text-4xl font-extrabold tracking-tighter mb-2 text-pink">150%</p>
                    <p className="text-[10px] text-muted font-black uppercase tracking-widest">Avg Annual Growth</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-32 bg-white text-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-massive text-black mb-12">READY TO DEFINE THE FUTURE?</h2>
                <div className="flex flex-wrap justify-center gap-8">
                  <button className="cta-button">
                    Start Your Project
                  </button>
                  <button className="cta-button-outline !border-black !text-black hover:!bg-black hover:!text-white">
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
            {/* Background Text Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/[0.03] whitespace-nowrap pointer-events-none">
              AURA DIGITAL
            </div>
          </section>

          {/* Footer */}
          <footer className="py-24 bg-bg border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
              <div className="flex flex-col md:flex-row justify-between items-start gap-16">
                <div className="max-w-xs">
                  <div className="flex items-center gap-2 mb-6">
                    <Logo />
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    The future of marketing is digital. We are the architects of digital excellence.
                  </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
                  <div>
                    <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-white">Social</h4>
                    <ul className="space-y-3 text-sm text-muted">
                      <li><a href="#" className="hover:text-accent transition-colors">Twitter</a></li>
                      <li><a href="#" className="hover:text-accent transition-colors">LinkedIn</a></li>
                      <li><a href="#" className="hover:text-accent transition-colors">Instagram</a></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-white">Legal</h4>
                    <ul className="space-y-3 text-sm text-muted">
                      <li><a href="#" className="hover:text-accent transition-colors">Privacy</a></li>
                      <li><a href="#" className="hover:text-accent transition-colors">Terms</a></li>
                    </ul>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.2em] text-white">Contact</h4>
                    <p className="text-sm text-muted">hello@auradigital.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-muted font-bold">
                <p>© 2024 Aura Digital Agency. All rights reserved.</p>
                <p className="flex items-center gap-2">
                  Built with <span className="text-pink">Aura AI</span>
                </p>
              </div>
            </div>
          </footer>
        </main>

        <AIConsultant />
      </div>
    </div>
  );
}
