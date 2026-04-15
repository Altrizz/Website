import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import Portfolio from "@/src/components/Portfolio";
import AIConsultant from "@/src/components/AIConsultant";
import { Logo } from "@/src/components/Logo";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        
        {/* About / CTA Section */}
        <section id="about" className="py-32 bg-bg border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-white">
                  READY TO <br />
                  <span className="text-pink">ACCELERATE</span>?
                </h2>
                <p className="text-xl text-muted mb-12 leading-relaxed max-w-lg">
                  We don't just follow trends; we create them. Join the ranks of forward-thinking 
                  brands that are leveraging AI and modern marketing to redefine their industries.
                </p>
                <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md">1</div>
                    <div>
                      <p className="font-bold text-lg text-white">Strategic Consultation</p>
                      <p className="text-sm text-muted">Deep dive into your business goals.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md">2</div>
                    <div>
                      <p className="font-bold text-lg text-white">Creative Execution</p>
                      <p className="text-sm text-muted">Bringing vision to life with precision.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-bold shadow-md">3</div>
                    <div>
                      <p className="font-bold text-lg text-white">Continuous Optimization</p>
                      <p className="text-sm text-muted">Data-driven growth and refinement.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-surface rounded-[32px] overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://picsum.photos/seed/agency/1000/1000" 
                    alt="Agency Life" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60 hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-10 -left-10 p-8 bg-surface rounded-2xl max-w-xs shadow-2xl border border-white/10"
                >
                  <p className="text-3xl font-extrabold tracking-tighter mb-2 text-pink">150%</p>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest">Avg Annual Growth</p>
                </motion.div>
              </div>
            </div>
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
  );
}
