import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discovery",
    desc: "We dive deep into your brand's DNA, market position, and AI potential.",
    icon: <Search className="w-8 h-8" />,
    color: "bg-accent"
  },
  {
    title: "Strategy",
    desc: "Architecting a surgical roadmap for design and technical implementation.",
    icon: <Lightbulb className="w-8 h-8" />,
    color: "bg-pink"
  },
  {
    title: "Execution",
    desc: "Building high-performance digital assets with precision and speed.",
    icon: <Code className="w-8 h-8" />,
    color: "bg-accent"
  },
  {
    title: "Acceleration",
    desc: "Launching and scaling your brand into the digital frontier.",
    icon: <Rocket className="w-8 h-8" />,
    color: "bg-pink"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="mb-24 text-center">
          <span className="section-label mx-auto">Our Method</span>
          <h2 className="text-massive">
            THE <span className="text-accent">ACCELERATE</span> PROCESS.
          </h2>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative z-10 group"
              >
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center text-black mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                  {step.icon}
                </div>
                <div className="bg-surface p-8 rounded-3xl border border-white/10 hover:border-accent/50 transition-colors">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted mb-4 block">Step 0{index + 1}</span>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
