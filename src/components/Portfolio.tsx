import { motion } from "motion/react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "NEON VELOCITY",
    category: "AI Campaign",
    image: "https://picsum.photos/seed/neon/1200/800",
    year: "2024",
    size: "large"
  },
  {
    title: "SILVER LINING",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/silver/1200/800",
    year: "2024",
    size: "small"
  },
  {
    title: "QUANTUM FLOW",
    category: "Web Experience",
    image: "https://picsum.photos/seed/quantum/1200/800",
    year: "2024",
    size: "small"
  },
  {
    title: "ORBITAL DATA",
    category: "Analytics Platform",
    image: "https://picsum.photos/seed/orbital/1200/800",
    year: "2024",
    size: "large"
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-12 md:py-20 bg-bg text-white overflow-hidden relative">
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-black text-white/[0.01] leading-none pointer-events-none select-none -rotate-90 origin-left">
        PORTFOLIO
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="text-massive">
              CRAFTING <span className="text-accent">IMPACT</span>.
            </h2>
          </div>
          <div className="flex gap-4">
            <motion.div 
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all cursor-pointer group rounded-2xl"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.div>
            <motion.div 
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.9 }}
              className="w-14 h-14 border border-white/10 flex items-center justify-center hover:bg-pink hover:text-white transition-all cursor-pointer group rounded-2xl"
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl mb-8 shadow-2xl border border-white/5 bg-surface">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
                
                <div className="absolute top-8 right-8 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <ArrowUpRight className="w-7 h-7" />
                </div>

                <div className="absolute bottom-8 left-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="px-4 py-2 bg-accent text-black text-[10px] font-black uppercase tracking-widest rounded-lg">
                    View Project
                  </span>
                </div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-black tracking-[0.3em] uppercase text-pink mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-4xl font-black tracking-tighter text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-muted font-mono text-xs opacity-50 block mb-1">YEAR</span>
                  <span className="text-white font-mono text-sm">{project.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
