import { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const glowRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ y: 0, max: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let count = 0;
    let smoothedScroll = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      scrollRef.current.max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollRef.current.y = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleResize();

    glowRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const render = () => {
      const time = Date.now() * 0.0005;

      // Smooth easing for scroll progress
      smoothedScroll += (scrollRef.current.y - smoothedScroll) * 0.05;
      const scrollProgress = Math.max(0, Math.min(1, smoothedScroll / scrollRef.current.max));

      // Smooth easing for the mouse glow position
      glowRef.current.x += (mouseRef.current.x - glowRef.current.x) * 0.05;
      glowRef.current.y += (mouseRef.current.y - glowRef.current.y) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // --- Ambient Animated Orbs ---
      const drawAmbientOrb = (xBase: number, yBase: number, radius: number, r: number, g: number, b: number, a: number) => {
        const gradient = ctx.createRadialGradient(xBase, yBase, 0, xBase, yBase, radius);
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      };

      drawAmbientOrb(w * 0.5 + Math.cos(time * 0.5) * w * 0.3, h * 0.5 + Math.sin(time * 0.3) * h * 0.3, w * 0.5, 59, 130, 246, 0.03);
      drawAmbientOrb(w * 0.3 + Math.sin(time * 0.4) * w * 0.3, h * 0.4 + Math.cos(time * 0.6) * h * 0.4, w * 0.5, 255, 0, 127, 0.02);
      drawAmbientOrb(w * 0.7 + Math.cos(time * 0.7) * w * 0.2, h * 0.7 + Math.sin(time * 0.5) * h * 0.3, w * 0.4, 59, 130, 246, 0.02);

      // --- 3D Particle Wave ---
      count += 0.015; 
      const AMOUNTX = 85; // Way more particles
      const AMOUNTY = 85;
      const SEPARATION = 45; // Tighter grid
      const fov = 400;
      const cameraZ = 800; 

      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          const x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
          const z = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);

          const y = 
            Math.sin((ix + count * 0.8) * 0.2) * 40 + 
            Math.cos((iy + count * 0.6) * 0.2) * 40 + 
            Math.sin((ix + iy + count * 1.2) * 0.1) * 30;

          const distanceZ = z + cameraZ;
          if (distanceZ > 0) {
            const scale = fov / distanceZ;
            const x2d = (x * scale) + w / 2;
            const y2d = (y * scale) + h * 0.6; 

            // Capped opacity: max 35% so it's less distracting
            const opacity = Math.min(0.35, Math.max(0, scale * 1.5 - 0.2));
            
            // Limit maximum radius so objects in the front aren't huge blobs
            const baseRadius = 0.5; 
            const maxRadius = 1.6;
            const radius = Math.min(maxRadius, Math.max(baseRadius, scale * 1.5));

            // Color Math -> mix wave height into a hue
            let progress = (y + 110) / 220; 
            progress = Math.max(0, Math.min(1, progress));
            
            // Brand Blue is ~217 HSL, Brand Pink is ~330 HSL
            const waveHue = 217 + (progress * 113);
            
            // As user scrolls down the page, we dynamically shift standard colors
            // Shifting by up to +120 degrees at the bottom of the page
            const finalHue = (waveHue + (scrollProgress * 120)) % 360;

            ctx.fillStyle = `hsla(${finalHue}, 90%, 60%, ${opacity})`;
            ctx.beginPath();
            ctx.arc(x2d, y2d, radius, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // --- Interactive Mouse Glow ---
      const mouseGradient = ctx.createRadialGradient(
        glowRef.current.x,
        glowRef.current.y,
        0,
        glowRef.current.x,
        glowRef.current.y,
        w * 0.3
      );
      mouseGradient.addColorStop(0, "rgba(59, 130, 246, 0.06)"); 
      mouseGradient.addColorStop(0.5, "rgba(255, 0, 127, 0.02)"); 
      mouseGradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = mouseGradient;
      ctx.fillRect(0, 0, w, h);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
