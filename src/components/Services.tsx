import { motion } from "motion/react";
import { Palette, Zap, Cpu, TrendingUp, Globe, BarChart3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "AI Strategy",
      description: "Custom AI roadmaps tailored to your business goals and market position.",
      icon: <Cpu className="w-8 h-8" />,
      color: "accent",
      size: "large"
    },
    {
      title: "Digital Design",
      description: "High-fidelity interfaces that convert and captivate.",
      icon: <Palette className="w-8 h-8" />,
      color: "pink",
      size: "small"
    },
    {
      title: "Growth Engine",
      description: "Data-driven marketing automation and performance scaling.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "accent",
      size: "small"
    },
    {
      title: "Brand Identity",
      description: "Defining your digital presence in a crowded marketplace.",
      icon: <Zap className="w-8 h-8" />,
      color: "pink",
      size: "large"
    },
    {
      title: "Global Scale",
      description: "Expanding your reach across borders with localized digital strategies.",
      icon: <Globe className="w-8 h-8" />,
      color: "accent",
      size: "small"
    },
    {
      title: "Data Intelligence",
      description: "Advanced analytics to drive informed decision making at every level.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "pink",
      size: "small"
    }
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-bg relative overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-0 right-0 text-[15vw] font-black text-white/[0.02] leading-none pointer-events-none select-none translate-y-1/4">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
        <div className="mb-20">
          <span className="section-label">Capabilities</span>
          <h2 className="text-massive">
            WE BUILD <span className="text-accent">VALUE</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-10 bg-surface border border-white/10 overflow-hidden rounded-3xl ${
                service.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Hover Accent */}
              <div className={`absolute top-0 left-0 w-1 h-full ${
                service.color === 'accent' ? 'bg-accent' : 'bg-pink'
              } scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500`} />
              
              <div className="relative z-10">
                <div className={`mb-8 ${
                  service.color === 'accent' ? 'text-accent' : 'text-pink'
                } group-hover:scale-110 transition-transform duration-500 inline-block`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent transition-colors">{service.title}</h3>
                <p className="text-muted leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </div>

              {/* Decorative Number */}
              <div className="absolute bottom-4 right-8 text-6xl font-black text-white/[0.03] group-hover:text-white/[0.08] transition-colors">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
