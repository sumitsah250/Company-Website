"use client";

import { useRef, useEffect } from "react";

export default function Pyramid3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(${-15 + Math.sin(elapsed / 3000) * 5}deg) rotateY(${elapsed / 30}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64" style={{ perspective: "800px" }}>
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Pyramid faces */}
        <div 
          className="absolute w-full h-full bg-gradient-to-b from-primary/20 to-transparent border-l border-r border-primary/20"
          style={{ 
            transform: "rotateY(0deg) translateZ(60px) rotateX(30deg)",
            transformOrigin: "bottom center",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div 
          className="absolute w-full h-full bg-gradient-to-b from-secondary/20 to-transparent border-l border-r border-secondary/20"
          style={{ 
            transform: "rotateY(90deg) translateZ(60px) rotateX(30deg)",
            transformOrigin: "bottom center",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div 
          className="absolute w-full h-full bg-gradient-to-b from-primary/15 to-transparent border-l border-r border-primary/15"
          style={{ 
            transform: "rotateY(180deg) translateZ(60px) rotateX(30deg)",
            transformOrigin: "bottom center",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />
        <div 
          className="absolute w-full h-full bg-gradient-to-b from-secondary/15 to-transparent border-l border-r border-secondary/15"
          style={{ 
            transform: "rotateY(270deg) translateZ(60px) rotateX(30deg)",
            transformOrigin: "bottom center",
            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          }}
        />

        {/* Base */}
        <div 
          className="absolute w-full h-full bg-primary/5 border border-primary/10"
          style={{ 
            transform: "rotateX(90deg) translateZ(-80px)",
          }}
        />

        {/* Top glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary/60 blur-sm"
          style={{ transform: "translateZ(80px)" }}
        />
      </div>
    </div>
  );
}
