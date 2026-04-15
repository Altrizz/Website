import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Search, Lightbulb, Code, Rocket, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    subtitle: "Phase 01",
    desc: "We dive deep into your brand's DNA, market position, and AI potential. This isn't just research; it's digital archaeology.",
    icon: <Search className="w-7 h-7" />,
    color: "from-accent/30 to-accent/5",
    accent: "bg-accent",
    details: ["Market Analysis", "Brand Audit", "AI Opportunity Mapping"],
    stat: "100%",
    statLabel: "Transparency",
    duration: "1-2 Weeks"
  },
  {
    title: "Strategy",
    subtitle: "Phase 02",
    desc: "Architecting a surgical roadmap for design and technical implementation. We define the blueprint for your digital dominance.",
    icon: <Lightbulb className="w-7 h-7" />,
    color: "from-pink/30 to-pink/5",
    accent: "bg-pink",
    details: ["UX Architecture", "Tech Stack Selection", "Growth Strategy"],
    stat: "2.5x",
    statLabel: "Efficiency Boost",
    duration: "2 Weeks"
  },
  {
    title: "Execution",
    subtitle: "Phase 03",
    desc: "Building high-performance digital assets with precision and speed. Our developers and designers work in a tight feedback loop.",
    icon: <Code className="w-7 h-7" />,
    color: "from-accent/30 to-accent/5",
    accent: "bg-accent",
    details: ["Surgical Design", "Rapid Prototyping", "AI Integration"],
    stat: "60fps",
    statLabel: "Performance",
    duration: "4-8 Weeks"
  },
  {
    title: "Acceleration",
    subtitle: "Phase 04",
    desc: "Launching and scaling your brand into the digital frontier. We don't just launch; we ignite your growth engine.",
    icon: <Rocket className="w-7 h-7" />,
    color: "from-pink/30 to-pink/5",
    accent: "bg-pink",
    details: ["Market Entry", "Performance Monitoring", "Continuous Scale"],
    stat: "150%",
    statLabel: "Avg Growth",
    duration: "Ongoing"
  }
];

export default function Process() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Adjusted transform to ensure all 5 cards (4 steps + 1 CTA) are visible
  // -78% is tighter for 5 items to reduce end-of-scroll space
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-78%"]);

  return (
    <section id="process" ref={targetRef} className="relative h-[250vh] bg-bg">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Background Text Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] leading-none pointer-events-none select-none whitespace-nowrap italic">
          AURA
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-3xl">
              <span className="section-label">Our Methodology</span>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                THE <span className="text-accent">ACCELERATE</span> <br />
                <span className="text-pink italic">WORKFLOW</span>.
              </h2>
            </div>
            <div className="flex items-center gap-6 text-muted group cursor-default mb-2">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">Explore</span>
                <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ scaleX: scrollYProgress }}
                    className="h-full bg-accent origin-left"
                  />
                </div>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-all duration-500 relative overflow-hidden bg-surface/50 backdrop-blur-sm">
                <motion.div 
                  animate={{ x: [-40, 40] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent"
                />
                <ArrowRight className="w-5 h-5 group-hover:text-accent transition-colors relative z-10 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-6 md:gap-8 px-4 sm:px-6 lg:px-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative shrink-0 w-[85vw] md:w-[420px] group"
            >
              <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
              
              <div className="relative h-full bg-surface/30 backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-[2.5rem] hover:border-white/20 transition-all duration-700 flex flex-col group/card">
                <div className="flex items-start justify-between mb-10">
                  <div className="relative">
                    {/* Advanced Icon Flare */}
                    <motion.div 
                      animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                      transition={{ rotate: { duration: 10, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                      className={`absolute -inset-3 border border-dashed ${step.accent.replace('bg-', 'border-')}/40 rounded-full`}
                    />
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${step.accent} rounded-[1.25rem] flex items-center justify-center text-black shadow-2xl relative z-10 group-hover/card:scale-110 transition-all duration-500`}>
                      {step.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-6xl font-black text-white/[0.03] leading-none tracking-tighter group-hover/card:text-white/10 transition-colors duration-500">0{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter leading-none">{step.title}</h3>
                <p className="text-muted/80 mb-8 leading-relaxed text-sm md:text-base font-medium">
                  {step.desc}
                </p>

                <div className="grid grid-cols-1 gap-3 mb-10 flex-grow">
                  {step.details.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 text-[10px] md:text-xs font-black text-white/50 uppercase tracking-[0.2em] group-hover/card:text-white/80 transition-colors duration-300">
                      <div className={`w-1.5 h-1.5 rounded-full ${step.accent} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
                      {detail}
                    </div>
                  ))}
                </div>

                <div className="pt-8 border-t border-white/5 grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-2">
                      <Clock className="w-3 h-3" /> Duration
                    </div>
                    <p className="text-base font-black text-white tracking-tight">{step.duration}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-2">
                      <Zap className="w-3 h-3" /> Impact
                    </div>
                    <p className="text-base font-black text-accent tracking-tight">{step.stat}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Final CTA Card */}
          <div className="relative shrink-0 w-[85vw] md:w-[420px] group">
            <div className="relative h-full bg-white p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-pink to-accent" />
              <h3 className="text-3xl font-black text-black mb-4 leading-[0.9] tracking-tighter">READY TO <br /> IGNITE?</h3>
              <p className="text-black/60 mb-8 text-sm font-medium">Let's build something extraordinary together.</p>
              <button className="w-full py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>

        {/* Progress Bar at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            style={{ scaleX: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent to-pink origin-left"
          />
        </div>
      </div>
    </section>
  );
}
