"use client";

import { useRef, useEffect } from "react";

export default function Hero3DShape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (containerRef.current) {
        const rotY = elapsed / 30;
        const rotX = Math.sin(elapsed / 4000) * 12;
        containerRef.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Data bar heights (simulating a server rack / data visualization)
  const dataBars = [
    { h: 60, delay: 0 }, { h: 85, delay: 0.2 }, { h: 45, delay: 0.4 },
    { h: 95, delay: 0.1 }, { h: 70, delay: 0.3 }, { h: 55, delay: 0.5 },
    { h: 80, delay: 0.15 }, { h: 40, delay: 0.35 }, { h: 90, delay: 0.25 },
  ];

  return (
    <div className="relative w-72 h-72 sm:w-96 sm:h-96" style={{ perspective: "1200px" }}>
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-primary/8 blur-3xl animate-pulse-glow" />

      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* === OUTER RING === */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/25"
          style={{ 
            transform: "rotateX(75deg)",
            boxShadow: "0 0 40px -10px rgba(99, 102, 241, 0.3), inset 0 0 40px -10px rgba(99, 102, 241, 0.1)"
          }}
        >
          {/* Ring nodes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <div
              key={`node-${deg}`}
              className="absolute w-2.5 h-2.5 rounded-full bg-primary/80 border border-primary/50"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-5px",
                marginLeft: "-5px",
                transform: `rotate(${deg}deg) translateX(${140}px)`,
                boxShadow: "0 0 8px rgba(99, 102, 241, 0.6)",
              }}
            />
          ))}
        </div>

        {/* === MIDDLE RING (tilted) === */}
        <div 
          className="absolute inset-8 rounded-full border border-secondary/20"
          style={{ 
            transform: "rotateY(60deg) rotateX(20deg)",
            boxShadow: "0 0 30px -5px rgba(14, 165, 233, 0.2)"
          }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <div
              key={`mid-${deg}`}
              className="absolute w-2 h-2 rounded-full bg-secondary/70"
              style={{
                top: "50%",
                left: "50%",
                marginTop: "-4px",
                marginLeft: "-4px",
                transform: `rotate(${deg}deg) translateX(${110}px)`,
              }}
            />
          ))}
        </div>

        {/* === INNER RING === */}
        <div 
          className="absolute inset-16 rounded-full border border-primary/15"
          style={{ 
            transform: "rotateZ(45deg) rotateX(80deg)",
          }}
        />

        {/* === CENTRAL DATA CORE === */}
        <div 
          className="absolute inset-24 rounded-xl border border-primary/30 bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm flex items-center justify-center"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Data visualization bars */}
          <div className="flex items-end gap-1.5 h-20">
            {dataBars.map((bar, i) => (
              <div
                key={i}
                className="w-2 rounded-sm bg-gradient-to-t from-primary/80 to-secondary/60"
                style={{
                  height: `${bar.h}%`,
                  animation: `pulseGlow ${1.5 + bar.delay}s ease-in-out infinite`,
                  animationDelay: `${bar.delay}s`,
                }}
              />
            ))}
          </div>

          {/* Center pulse */}
          <div 
            className="absolute inset-0 rounded-xl border border-primary/20 animate-pulse-glow"
            style={{ transform: "translateZ(10px)" }}
          />
        </div>

        {/* === ORBITING DATA PACKETS === */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 130;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius * 0.3;
          const z = Math.sin(angle) * radius;
          return (
            <div
              key={`packet-${i}`}
              className="absolute top-1/2 left-1/2 w-3 h-3 rounded-sm bg-secondary/70 border border-secondary/40"
              style={{
                marginTop: "-6px",
                marginLeft: "-6px",
                transform: `translate3d(${x}px, ${y}px, ${z}px)`,
                animation: `pulseGlow ${2 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
                boxShadow: "0 0 6px rgba(14, 165, 233, 0.5)",
              }}
            />
          );
        })}

        {/* === CONNECTION LINES (wireframe) === */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ transform: "translateZ(50px)" }}
        >
          <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
          <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="rgba(99,102,241,0.15)" strokeWidth="1" />
          <line x1="35%" y1="35%" x2="65%" y2="65%" stroke="rgba(14,165,233,0.1)" strokeWidth="1" />
          <line x1="65%" y1="35%" x2="35%" y2="65%" stroke="rgba(14,165,233,0.1)" strokeWidth="1" />
        </svg>

        {/* === FLOATING BITS === */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`bit-${i}`}
            className="absolute w-1 h-1 rounded-full bg-primary/50"
            style={{
              top: `${15 + (i * 7) % 70}%`,
              left: `${10 + (i * 11) % 80}%`,
              transform: `translateZ(${(i % 3) * 30 - 30}px)`,
              animation: `pulseGlow ${2 + (i % 4) * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
