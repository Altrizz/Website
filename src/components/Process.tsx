import { motion } from "motion/react";
import { Search, Lightbulb, Code, Rocket, ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react";

const steps = [
  {
    title: "Descubrimiento",
    subtitle: "Fase 01",
    desc: "Nos sumergimos en el ADN de tu marca, posición en el mercado y potencial de IA. No es solo investigación; es arqueología digital.",
    icon: <Search className="w-7 h-7" />,
    color: "from-accent/30 to-accent/5",
    accent: "bg-accent",
    details: ["Análisis de Mercado", "Auditoría de Marca", "Mapeo de IA"],
    stat: "100%",
    statLabel: "Transparencia",
    duration: "1-2 Semanas"
  },
  {
    title: "Estrategia",
    subtitle: "Fase 02",
    desc: "Arquitectamos un mapa de ruta quirúrgico para el diseño e implementación técnica. Definimos el plano para tu dominio digital.",
    icon: <Lightbulb className="w-7 h-7" />,
    color: "from-pink/30 to-pink/5",
    accent: "bg-pink",
    details: ["Arquitectura UX", "Selección de Tech Stack", "Estrategia de Crecimiento"],
    stat: "2.5x",
    statLabel: "Impulso de Eficiencia",
    duration: "2 Semanas"
  },
  {
    title: "Ejecución",
    subtitle: "Fase 03",
    desc: "Construimos activos digitales de alto rendimiento con precisión y velocidad. Nuestros desarrolladores y diseñadores trabajan en equipo.",
    icon: <Code className="w-7 h-7" />,
    color: "from-accent/30 to-accent/5",
    accent: "bg-accent",
    details: ["Diseño Quirúrgico", "Prototipado Rápido", "Integración de IA"],
    stat: "60fps",
    statLabel: "Rendimiento",
    duration: "4-8 Semanas"
  },
  {
    title: "Aceleración",
    subtitle: "Fase 04",
    desc: "Lanzamos y escalamos tu marca hacia la frontera digital. No solo lanzamos; encendemos tu motor de crecimiento.",
    icon: <Rocket className="w-7 h-7" />,
    color: "from-pink/30 to-pink/5",
    accent: "bg-pink",
    details: ["Entrada al Mercado", "Monitoreo de Rendimiento", "Escala Continua"],
    stat: "150%",
    statLabel: "Crecimiento Prom.",
    duration: "Continuo"
  }
];

export default function Process() {
  return (
    <section id="process" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Text Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.01] leading-none pointer-events-none select-none whitespace-nowrap italic">
        AURA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-4xl relative z-10">
            <span className="section-label">Nuestra Metodología</span>
            <h2 className="text-massive uppercase leading-[0.95] tracking-tight mb-8">
              EL FLUJO DE <br />
              <span className="text-accent">ACELERACIÓN</span> <br />
              <span className="text-pink italic">EFICAZ</span>.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-muted relative z-10">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Desliza para ver más</span>
            <ArrowRight className="w-5 h-5 animate-pulse text-accent" />
          </div>
        </motion.div>
      </div>

      <div className="w-full relative z-10">
        <div className="flex gap-6 md:gap-8 px-4 sm:px-6 lg:px-16 overflow-x-auto pb-12 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing">
          {steps.map((step, index) => (
          <div
            key={step.title}
            className="relative shrink-0 w-[85vw] md:w-[420px] group snap-center"
          >
            <div className={`absolute -inset-4 bg-gradient-to-br ${step.color} rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />
            
            <div className="relative h-full bg-surface border border-white/10 p-8 md:p-10 rounded-[2.5rem] hover:border-white/20 transition-all duration-700 flex flex-col group/card shadow-2xl">
              <div className="flex items-start justify-between mb-10">
                <div className="relative">
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
                    <Clock className="w-3 h-3" /> Duración
                  </div>
                  <p className="text-base font-black text-white tracking-tight">{step.duration}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-muted mb-2">
                    <Zap className="w-3 h-3" /> Impacto
                  </div>
                  <p className="text-base font-black text-accent tracking-tight">{step.stat}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Final CTA Card inline with horizontal scroll */}
        <div className="relative shrink-0 w-[85vw] md:w-[420px] group snap-center">
          <div className="relative h-full bg-white p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-pink to-accent" />
            <h3 className="text-3xl font-black text-black mb-4 leading-[0.9] tracking-tighter">¿LISTO PARA <br /> DESPEGAR?</h3>
            <p className="text-black/60 mb-8 text-sm font-medium">Construyamos algo extraordinario juntos.</p>
            <button className="w-full py-4 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-accent hover:text-black transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
              Comenzar
            </button>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}

