import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 800, damping: 50 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest("button") || 
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHover);

    // Hide default cursor
    document.body.style.cursor = "none";
    const allElements = document.querySelectorAll("*");
    allElements.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
    });

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHover);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center"
        style={{ 
          x: cursorX, 
          y: cursorY,
          scale: isHovering ? 1.2 : isClicking ? 0.9 : 1,
        }}
      >
        {/* Shadow/Glow Layer */}
        <motion.div
          animate={{
            opacity: isHovering ? 0.4 : 0.2,
            scale: isHovering ? 1.5 : 1,
          }}
          className="absolute inset-0 bg-accent blur-xl rounded-full w-8 h-8 -translate-x-1/2 -translate-y-1/2"
        />

        {/* The Pointer SVG */}
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative -translate-x-[4px] -translate-y-[4px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
        >
          <path 
            d="M8 4V28L15 21L24 21L8 4Z" 
            fill="white" 
            stroke="black" 
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Hover Indicator */}
        {isHovering && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute -right-12 top-0 bg-accent text-white text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-md shadow-xl"
          >
            Select
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
