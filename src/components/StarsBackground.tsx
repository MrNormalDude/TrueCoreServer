import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export default function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      angle: 0,
      opacity: 0,
      active: false,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 8000);
      stars = [];
      const colors = [
        "rgba(255, 255, 255, ",
        "rgba(147, 197, 253, ", // Light blue
        "rgba(167, 139, 250, ", // Light violet
        "rgba(103, 232, 249, ", // Light cyan
      ];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          twinkleSpeed: 0.01 + Math.random() * 0.02,
          phase: Math.random() * Math.PI * 2,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    const spawnShootingStar = () => {
      if (shootingStar.active) return;
      
      const startX = Math.random() * canvas.width * 0.8;
      const startY = Math.random() * canvas.height * 0.5;
      
      shootingStar = {
        x: startX,
        y: startY,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        angle: Math.PI / 6 + Math.random() * (Math.PI / 12), // around 30 degrees
        opacity: 1,
        active: true,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep dark cosmic background matching Frosted Glass (#05060f)
      ctx.fillStyle = "#05060f";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle nebula glow effects matching design blurs
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      
      // Indigo top-left blur sphere
      const indigoGlow = ctx.createRadialGradient(
        0, 0, 10,
        0, 0, Math.max(canvas.width, canvas.height) * 0.45
      );
      indigoGlow.addColorStop(0, "rgba(79, 70, 229, 0.25)");
      indigoGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = indigoGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Blue bottom-right blur sphere
      const blueGlow = ctx.createRadialGradient(
        canvas.width, canvas.height, 10,
        canvas.width, canvas.height, Math.max(canvas.width, canvas.height) * 0.55
      );
      blueGlow.addColorStop(0, "rgba(30, 58, 138, 0.35)");
      blueGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = blueGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.restore();

      // Draw beautiful dot-grid overlay matching Design HTML
      ctx.save();
      ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();

      // Update and draw stars
      stars.forEach((star) => {
        star.phase += star.twinkleSpeed;
        const opacity = (Math.sin(star.phase) + 1) / 2 * 0.5 + 0.15; // subtle stars
        ctx.fillStyle = `${star.color}${opacity.toFixed(2)})`;
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Update and draw shooting star
      if (shootingStar.active) {
        ctx.save();
        ctx.strokeStyle = `rgba(147, 197, 253, ${shootingStar.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(147, 197, 253, 0.8)";
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        
        const dx = Math.cos(shootingStar.angle) * shootingStar.length;
        const dy = Math.sin(shootingStar.angle) * shootingStar.length;
        
        ctx.lineTo(shootingStar.x - dx, shootingStar.y - dy);
        ctx.stroke();
        ctx.restore();

        // Update positions
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed;
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed;
        shootingStar.opacity -= 0.015;

        if (shootingStar.opacity <= 0 || shootingStar.x > canvas.width || shootingStar.y > canvas.height) {
          shootingStar.active = false;
        }
      } else {
        // 0.2% chance to spawn shooting star on each frame
        if (Math.random() < 0.002) {
          spawnShootingStar();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-50 pointer-events-none"
    />
  );
}
