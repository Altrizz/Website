import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "motion/react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface Service {
  name: string;
  price: string;
}

export default function QuoteForm({ service, onComplete }: { service: Service; onComplete: () => void }) {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call or quote processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
    setTimeout(() => {
      onComplete();
    }, 4000);
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", damping: 12, stiffness: 200 }}
          className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 border border-green-500/30"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white">¡Misión Recibida!</h3>
          <p className="text-muted text-sm max-w-[280px] mx-auto leading-relaxed">
            Nuestros analistas han recibido tu solicitud para <span className="text-pink font-bold">{service.name}</span>. 
            Te contactaremos en menos de 24 horas.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit} 
      className="space-y-6 pt-2"
    >
      <div className="space-y-5">
        <div className="group">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2 block group-focus-within:text-pink transition-colors">Identidad</label>
          <Input 
            required 
            placeholder="Tu nombre completo" 
            className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus-visible:ring-accent focus-visible:ring-offset-0 placeholder:text-white/20"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: (e.target as HTMLInputElement).value})}
          />
        </div>
        <div className="group">
          <Input 
            required 
            type="email"
            placeholder="Email corporativo (@empresa.com)" 
            className="h-14 bg-white/5 border-white/10 rounded-2xl px-6 focus-visible:ring-accent focus-visible:ring-offset-0 placeholder:text-white/20"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: (e.target as HTMLInputElement).value})}
          />
        </div>
        <div className="group">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted mb-2 block group-focus-within:text-pink transition-colors">Detalles del Proyecto</label>
          <textarea 
            required
            placeholder="¿Qué desafío quieres que resolvamos?"
            className="w-full min-h-[140px] bg-white/5 border border-white/10 rounded-2xl p-6 text-sm text-white focus:outline-none focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20 resize-none"
            value={formData.project}
            onChange={(e) => setFormData({...formData, project: (e.target as HTMLTextAreaElement).value})}
          />
        </div>
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full h-16 bg-white text-black font-black uppercase tracking-[0.2em] gap-3 hover:bg-pink hover:text-white transition-all rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] group"
        >
          {isSubmitting ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              Confirmar Solicitud 
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </Button>
        <p className="text-[9px] text-center text-muted mt-6 uppercase tracking-widest opacity-50">
          Al enviar, aceptas que analicemos tu visión bajo estrictos términos de confidencialidad.
        </p>
      </div>
    </motion.form>
  );
}
