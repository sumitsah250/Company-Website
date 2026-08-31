"use client";

import { useRef, useState, ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -intensity;
    const rotateY = ((x - centerX) / centerX) * intensity;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPosition({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlowPosition({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className={`card-3d ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="card-3d-inner relative w-full h-full"
        style={{ 
          transform,
          transition: "transform 0.15s ease-out",
          transformStyle: "preserve-3d"
        }}
      >
        {/* Glow effect — pointer-events-none ensures it never blocks child interactions */}
        <div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${glowPosition.x}% ${glowPosition.y}%, rgba(255, 255, 255, 0.05), transparent 60%)`,
            zIndex: 0,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Content wrapper — explicitly allows pointer events */}
        <div className="relative z-10 h-full" style={{ pointerEvents: "auto" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
