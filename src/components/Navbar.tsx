import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[90] transition-all duration-500 ${
      scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center w-full">
        <Logo />
        
        <div className="hidden md:flex items-center gap-12">
          {[
            { name: 'Soluciones', href: '#services' },
            { name: 'Proyectos', href: '#work' },
            { name: 'Agencia', href: '#about' }
          ].map((item, i) => (
            <motion.a 
              key={item.name}
              href={item.href} 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-muted hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ x: -2, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button className="cta-button btn-glitch">
              Iniciar Proyecto
            </Button>
          </motion.div>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-surface border-b border-white/10 p-8 md:hidden flex flex-col gap-8 shadow-2xl z-[100]"
          >
            {[
              { name: 'Soluciones', href: '#services' },
              { name: 'Proyectos', href: '#work' },
              { name: 'Agencia', href: '#about' }
            ].map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-2xl font-black uppercase tracking-tighter text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <motion.div
              whileTap={{ scale: 0.98 }}
            >
              <Button className="w-full cta-button btn-glitch">Iniciar Proyecto</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
