import { motion } from "motion/react";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-massive font-extrabold tracking-tighter mb-6 text-white">
                Building <span className="text-accent">digital</span> first brands.
              </h1>
              <p className="text-lg text-muted leading-relaxed max-w-[480px] mb-10">
                We partner with forward-thinking companies to design and build websites that define industries. Modern design for a complex world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="cta-button flex items-center gap-2">
                  View Showcase <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" className="cta-button-outline flex items-center gap-2">
                  Our Process <Zap className="w-4 h-4 text-pink" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="hero-visual relative h-[520px] bg-bg rounded-[32px] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital Abstract" 
              className="w-full h-full object-cover opacity-40 transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-pink/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-[60px] -left-[20px] bg-surface/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 z-10"
            >
              <span className="block text-3xl font-black text-accent mb-1">142%</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-black">Growth Metric</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-[80px] -right-[20px] bg-surface/80 backdrop-blur-xl p-6 rounded-2xl shadow-2xl border border-white/10 z-10"
            >
              <span className="block text-3xl font-black text-pink mb-1">25+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted font-black">Global Awards</span>
            </motion.div>

            {/* Floating elements for "interest" */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-12 h-12 bg-accent/20 rounded-full blur-xl"
            />
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-pink/20 rounded-full blur-xl"
            />
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
