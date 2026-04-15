import { motion } from "motion/react";

interface MarqueeProps {
  text: string[];
  reverse?: boolean;
  speed?: number;
}

export default function Marquee({ text, reverse = false, speed = 30 }: MarqueeProps) {
  // Duplicate text multiple times to ensure seamless loop on all screen sizes
  const items = [...text, ...text, ...text, ...text, ...text, ...text];

  return (
    <div className="relative flex overflow-x-hidden bg-accent py-6 md:py-10 border-y border-white/10 my-4 md:my-8">
      <motion.div
        animate={{
          x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {items.map((t, i) => (
          <span 
            key={i} 
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black flex items-center gap-12"
          >
            {t}
            <div className="w-4 h-4 md:w-6 md:h-6 bg-black rounded-full" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
