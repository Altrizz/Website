import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, X, MessageSquare, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ai } from "@/src/lib/gemini";

interface Message {
  role: "user" | "model";
  text: string;
}

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "model", text: "¡Hola! Soy Aura, tu consultora de agencia de IA. ¿Cómo puedo ayudarte a impulsar tu negocio hoy?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user" as const, text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chat = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "Eres 'Aura', una consultora de agencia digital de alto nivel para 'Aura Digital'. Eres profesional, estratégica y ligeramente futurista. Tu objetivo es ayudar a los clientes potenciales a entender cómo Aura Digital puede ayudarlos con IA, marketing digital y desarrollo web. Menciona que pueden ver nuestro catálogo completo y cotizar servicios en la sección de 'Servicios' del menú. Mantén las respuestas concisas y perspicaces. RESPONDE SIEMPRE EN ESPAÑOL.",
        },
        history: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] }))
      });

      const result = await chat.sendMessage({ message: input });
      const modelText = result.text || "Lo siento, no pude procesar eso.";
      
      setMessages(prev => [...prev, { role: "model", text: modelText }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: "model", text: "Estoy teniendo algunas dificultades técnicas. Por favor, inténtalo de nuevo más tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 rounded-2xl shadow-2xl z-50 group bg-white text-black hover:bg-accent hover:text-white transition-all hover:scale-110 border border-white/10 btn-glitch"
      >
        <MessageSquare className="w-8 h-8 group-hover:rotate-12 transition-transform" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 w-[380px] h-[520px] bg-surface rounded-3xl z-50 flex flex-col overflow-hidden shadow-2xl border border-white/10"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Consultora Aura</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-muted font-bold uppercase tracking-wider">En línea y lista</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-muted hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <ScrollArea className="flex-1 p-6" ref={scrollRef}>
              <div className="space-y-6">
                {messages.map((m, i) => (
                  <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user" 
                        ? "bg-accent text-white shadow-md shadow-accent/10 rounded-tr-none" 
                        : "bg-white/5 text-white border border-white/10 rounded-tl-none"
                    }`}>
                      {m.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                      <Loader2 className="w-4 h-4 text-accent animate-spin" />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-white/10 bg-surface">
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex gap-2"
              >
                <Input 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Pregunta sobre servicios..."
                  className="rounded-xl border-white/10 bg-white/5 text-white focus-visible:ring-accent h-12"
                />
                <Button type="submit" size="icon" className="rounded-xl bg-white text-black hover:bg-accent hover:text-white shrink-0 w-12 h-12 btn-glitch">
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
