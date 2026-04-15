import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const glowRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    // Initial position
    glowRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const render = () => {
      // Smooth easing for the glow position
      glowRef.current.x += (mouseRef.current.x - glowRef.current.x) * 0.05;
      glowRef.current.y += (mouseRef.current.y - glowRef.current.y) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create radial gradient for the glow
      const gradient = ctx.createRadialGradient(
        glowRef.current.x,
        glowRef.current.y,
        0,
        glowRef.current.x,
        glowRef.current.y,
        window.innerWidth * 0.4
      );

      // Design: Subtle blue/purple glow inspired by Linear/Apple
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.08)"); // Accent blue
      gradient.addColorStop(0.5, "rgba(255, 0, 127, 0.03)"); // Pink/Purple
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Optional: Add a second, faster trailing light
      const trailX = glowRef.current.x + (mouseRef.current.x - glowRef.current.x) * 0.2;
      const trailY = glowRef.current.y + (mouseRef.current.y - glowRef.current.y) * 0.2;
      
      const trailGradient = ctx.createRadialGradient(
        trailX,
        trailY,
        0,
        trailX,
        trailY,
        window.innerWidth * 0.2
      );
      trailGradient.addColorStop(0, "rgba(59, 130, 246, 0.04)");
      trailGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = trailGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
