"use client";

import { useRef, useEffect } from "react";

export default function ContactOrb3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateY(${elapsed / 30}deg) rotateX(${Math.sin(elapsed / 2500) * 10}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="relative w-48 h-48 sm:w-56 sm:h-56" style={{ perspective: "1000px" }}>
      {/* Main sphere */}
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Wireframe sphere made of rings */}
        {[0, 30, 60, 90, 120, 150].map((deg, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border border-[#C8BAA9]/80"
            style={{
              transform: `rotateY(${deg}deg)`,
              boxShadow: i === 0 ? "0 0 30px -5px rgba(200, 186, 169, 0.18)" : "none",
            }}
          />
        ))}

        {/* Horizontal rings */}
        {[0, 45, -45].map((deg, i) => (
          <div
            key={`h-${i}`}
            className="absolute inset-0 rounded-full border border-[#D8CEC0]"
            style={{ transform: `rotateX(${deg}deg)` }}
          />
        ))}

        {/* Center core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#F7F3EB] to-[#E5DCCF] blur-md animate-pulse-glow" />

        {/* Floating dots on surface */}
        {[...Array(12)].map((_, i) => {
          const phi = Math.acos(-1 + (2 * i) / 12);
          const theta = Math.sqrt(12 * Math.PI) * phi;
          const x = 50 + 45 * Math.cos(theta) * Math.sin(phi);
          const y = 50 + 45 * Math.sin(theta) * Math.sin(phi);
          return (
            <div
              key={`dot-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#9E938A]/80"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                animation: `pulseGlow ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
