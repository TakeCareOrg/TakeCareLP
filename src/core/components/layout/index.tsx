import { useEffect, useRef } from "react";
import { Navbar } from "./navbar";
import { PropsWithLang } from "../../types/app.types";
import { Footer } from "./footer";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const blobs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];
    const numBlobs = 3;

    // Définir les positions initiales pour chaque coin
    const startPositions = [
      { x: canvas.width * 0.2, y: canvas.height * 0.2, vx: 1, vy: 1 }, // Haut gauche
      { x: canvas.width * 0.8, y: canvas.height * 0.2, vx: -1, vy: 1 }, // Haut droite
      { x: canvas.width * 0.5, y: canvas.height * 0.8, vx: 0, vy: -1 }, // Bas milieu
    ];

    for (let i = 0; i < numBlobs; i++) {
      const radius = Math.random() * 100 + 300; // Rayon entre 100 et 300
      const startPos = startPositions[i];
      blobs.push({
        x: startPos.x,
        y: startPos.y,
        radius: radius,
        vx: startPos.vx * (1 + Math.random() * 0.5), // Vitesse de base + variation aléatoire
        vy: startPos.vy * (1 + Math.random() * 0.5),
        color:
          i === 0
            ? "#68DCE2" // cyan
            : i === 1
            ? "#8F97DB" // purple
            : "#DA8FDB", // violet-blue
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blobs.forEach((blob) => {
        // Mettre à jour la position
        blob.x += blob.vx;
        blob.y += blob.vy;

        // Gérer les rebonds sur les bords (basé sur le centre du blob)
        if (blob.x <= 0) {
          blob.x = 0;
          blob.vx = Math.abs(blob.vx);
        } else if (blob.x >= canvas.width) {
          blob.x = canvas.width;
          blob.vx = -Math.abs(blob.vx);
        }

        if (blob.y <= 0) {
          blob.y = 0;
          blob.vy = Math.abs(blob.vy);
        } else if (blob.y >= canvas.height) {
          blob.y = canvas.height;
          blob.vy = -Math.abs(blob.vy);
        }

        // Ajout d'une petite variation aléatoire dans le mouvement
        if (Math.random() < 0.02) {
          blob.vx += (Math.random() - 0.5) * 1.5;
          blob.vy += (Math.random() - 0.5) * 1.5;
          const speed = Math.sqrt(blob.vx ** 2 + blob.vy ** 2);
          if (speed > 6) {
            blob.vx = (blob.vx / speed) * 6;
            blob.vy = (blob.vy / speed) * 6;
          }
        }

        // Dessiner le blob avec un gradient
        const gradient = ctx.createRadialGradient(
          blob.x,
          blob.y,
          0,
          blob.x,
          blob.y,
          blob.radius
        );
        // Couleur plus intense au centre (50% d'opacité)
        gradient.addColorStop(0, blob.color + "80");
        // Transition douce
        gradient.addColorStop(0.6, blob.color + "40");
        // Plus transparent sur les bords (20% d'opacité)
        gradient.addColorStop(1, blob.color + "30");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-5"
      style={{ filter: "blur(24px)" }}
    />
  );
};

export const DefaultLayout: React.FC<PropsWithLang> = ({ children, lang }) => {
  return (
    <div className="relative bg-white/20">
      <AnimatedBackground />

      <Navbar lang={lang} />

      <div className="w-full min-h-[calc(100vh-60px)] grid gap-20">
        {children}
      </div>

      <Footer lang={lang} />
    </div>
  );
};
