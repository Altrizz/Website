import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/10 h-20 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 w-full">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-muted hover:text-white transition-colors">Solutions</a>
            <a href="#work" className="text-sm font-medium text-muted hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-sm font-medium text-muted hover:text-white transition-colors">Agency</a>
            <Button className="cta-button">
              Start a Project
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-surface border-b border-white/10 px-4 py-6 space-y-4"
        >
          <a href="#services" className="block text-lg font-medium text-white">Services</a>
          <a href="#work" className="block text-lg font-medium text-white">Work</a>
          <a href="#about" className="block text-lg font-medium text-white">About</a>
          <Button className="w-full cta-button">Start a Project</Button>
        </motion.div>
      )}
    </nav>
  );
}
