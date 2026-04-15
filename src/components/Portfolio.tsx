import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "NEON VELOCITY",
    category: "AI Campaign",
    image: "https://picsum.photos/seed/neon/1200/800",
    color: "bg-blue-500",
  },
  {
    title: "SILVER LINING",
    category: "Brand Identity",
    image: "https://picsum.photos/seed/silver/1200/800",
    color: "bg-gray-400",
  },
  {
    title: "QUANTUM FLOW",
    category: "Web Experience",
    image: "https://picsum.photos/seed/quantum/1200/800",
    color: "bg-purple-500",
  },
  {
    title: "ORBITAL DATA",
    category: "Analytics Platform",
    image: "https://picsum.photos/seed/orbital/1200/800",
    color: "bg-orange-500",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 bg-bg text-white overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-accent mb-4 block">
              Selected Work
            </span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white">
              CRAFTING <span className="text-accent">IMPACT</span>.
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-colors cursor-pointer">
              ←
            </div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink hover:text-white transition-colors cursor-pointer">
              →
            </div>
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
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-2xl border border-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase text-pink mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-muted font-mono text-sm">/ 2024</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
