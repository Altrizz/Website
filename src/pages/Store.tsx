import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ShoppingBag, Layout, Play, BarChart3, Users2, ShieldCheck, Zap, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import QuoteForm from "@/src/components/QuoteForm";

const SERVICES = [
  {
    id: 1,
    name: "Web Experience: Startup",
    category: "Development / Design",
    price: "Desde $1,200",
    description: "Landing pages de alto impacto optimizadas para conversión y velocidad extrema.",
    image: "https://picsum.photos/seed/web1/800/800",
    features: ["Diseño UI/UX Custom", "SEO Core Vitals", "Carga en < 1s"],
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: 2,
    name: "Enterprise Architecture",
    category: "Development / Scalability",
    price: "Desde $4,500",
    description: "Sistemas web complejos con integraciones de IA y dashboards personalizados.",
    image: "https://picsum.photos/seed/web2/800/800",
    features: ["Full Stack App", "Integración IA", "Seguridad Bancaria"],
    icon: <Layout className="w-5 h-5" />
  },
  {
    id: 3,
    name: "Content Engine Pro",
    category: "Multimedia / Branding",
    price: "Desde $800/mes",
    description: "Producción de contenido multimedia premium: Video, 3D y Motion Graphics.",
    image: "https://picsum.photos/seed/video1/800/800",
    features: ["Edición 4K", "Motion Design", "Visual Storytelling"],
    icon: <Play className="w-5 h-5" />
  },
  {
    id: 4,
    name: "Growth Ads Mastery",
    category: "Marketing / Ads",
    price: "Desde $1,500/mes",
    description: "Gestión avanzada de Google Ads y Meta Ads basada en datos y ROI real.",
    image: "https://picsum.photos/seed/ads1/800/800",
    features: ["A/B Testing", "Trackeo de Conversión", "Reportes IA"],
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    id: 5,
    name: "Social Ecosystem",
    category: "Social / Community",
    price: "Desde $950/mes",
    description: "Manejo estratégico de redes sociales para construir comunidades leales.",
    image: "https://picsum.photos/seed/social1/800/800",
    features: ["Content Calendar", "Engagement Bio", "Estrategia Influencer"],
    icon: <Users2 className="w-5 h-5" />
  }
];

export default function Store() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const openQuote = (service: typeof SERVICES[0]) => {
    setSelectedService(service);
    setIsQuoteOpen(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-16">
      {/* Hero Store Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="mb-24 text-center"
      >
        <span className="section-label">Aura Service Store</span>
        <h1 className="text-massive uppercase font-black tracking-tighter mb-8">
          SOLUCIONES PARA LA <br />
          <span className="text-pink">ERA DIGITAL.</span>
        </h1>
        <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed">
          Nuestros servicios están diseñados como productos de alta ingeniería. 
          Selecciona el motor de crecimiento que tu negocio necesita.
        </p>
      </motion.section>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="group relative"
          >
            <div className="glass-panel rounded-3xl overflow-hidden aspect-[4/5] relative">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-40 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="mb-6 flex items-center gap-3">
                  <div className="p-2 bg-pink/20 rounded-lg text-pink backdrop-blur-md">
                    {service.icon}
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink">{service.category}</p>
                </div>
                
                <h3 className="text-3xl font-extrabold text-white tracking-tighter mb-2">{service.name}</h3>
                <p className="text-sm text-muted mb-6 line-clamp-2 leading-relaxed">{service.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.features.map(feature => (
                    <span key={feature} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[9px] uppercase font-bold text-muted group-hover:border-pink/30 group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-4">
                  <p className="text-2xl font-light text-white">{service.price}</p>
                  <Button 
                    onClick={() => openQuote(service)}
                    className="h-12 px-6 bg-white text-black font-black uppercase text-xs tracking-widest gap-2 group-hover:bg-pink group-hover:text-white transition-all"
                  >
                    Cotizar <ShoppingBag className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quote Dialog */}
      <Dialog open={isQuoteOpen} onOpenChange={setIsQuoteOpen}>
        <DialogContent className="sm:max-w-[500px] bg-bg border-white/10 p-8">
          <DialogHeader>
            <DialogTitle className="text-4xl font-black uppercase tracking-tighter text-white mb-2">Solicitar Cotización</DialogTitle>
            <DialogDescription className="text-muted text-sm uppercase tracking-widest leading-relaxed">
              Iniciando despliegue estratégico para: <span className="text-pink font-bold">{selectedService?.name}</span>
            </DialogDescription>
          </DialogHeader>
          {selectedService && (
            <QuoteForm 
              service={selectedService} 
              onComplete={() => setIsQuoteOpen(false)} 
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Trust Badges - Service Focused */}
      <section className="mt-32 pt-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col items-center text-center">
          <ShieldCheck className="w-12 h-12 text-accent mb-6" />
          <h4 className="text-xl font-bold mb-4">Metodología Blindada</h4>
          <p className="text-muted text-sm px-8">Procesos estandarizados que garantizan la calidad en cada entrega.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <Zap className="w-12 h-12 text-pink mb-6" />
          <h4 className="text-xl font-bold mb-4">Ejecución Fast-Track</h4>
          <p className="text-muted text-sm px-8">Tiempos de entrega optimizados mediante flujos impulsados por IA.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <HeartHandshake className="w-12 h-12 text-accent mb-6" />
          <h4 className="text-xl font-bold mb-4">Socio Estratégico</h4>
          <p className="text-muted text-sm px-8">No somos proveedores, somos el equipo de crecimiento de tu empresa.</p>
        </div>
      </section>

      {/* Background Decor */}
      <div className="fixed top-1/2 left-0 -translate-y-1/2 text-[40vw] font-black text-white/[0.01] pointer-events-none z-0 select-none">
        AURA
      </div>
    </div>
  );
}
