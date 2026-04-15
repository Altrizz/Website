import { motion } from "motion/react";
import { Code, Megaphone, Palette, Zap, Cpu, BarChart3 } from "lucide-react";

const services = [
  {
    id: "01",
    title: "AI Strategy",
    description: "Integrating LLMs and custom AI solutions into your business workflow.",
    icon: Cpu,
  },
  {
    id: "02",
    title: "Digital Marketing",
    description: "Performance-driven campaigns that scale with your growth goals.",
    icon: Megaphone,
  },
  {
    id: "03",
    title: "Web Development",
    description: "High-performance websites built with modern tech stacks.",
    icon: Code,
  },
  {
    id: "04",
    title: "Brand Identity",
    description: "Crafting unique visual languages that resonate with your audience.",
    icon: Palette,
  },
  {
    id: "05",
    title: "Data Analytics",
    description: "Turning raw data into actionable insights for better decision making.",
    icon: BarChart3,
  },
  {
    id: "06",
    title: "Automation",
    description: "Streamlining operations through intelligent process automation.",
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-bg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-item group"
            >
              <div className={`h-10 px-5 rounded-full mb-8 flex items-center justify-center font-black text-[10px] uppercase tracking-[0.3em] border transition-all duration-500 ${
                index % 2 === 0 
                  ? "bg-accent/10 border-accent/20 text-accent group-hover:bg-accent group-hover:text-black" 
                  : "bg-pink/10 border-pink/20 text-pink group-hover:bg-pink group-hover:text-white"
              }`}>
                Step {index + 1}
              </div>
              <h3 className="text-lg font-bold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
