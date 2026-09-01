"use client";

import { useRef, useEffect } from "react";

export default function HexGrid3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (containerRef.current) {
        containerRef.current.style.transform = `rotateX(60deg) rotateZ(${elapsed / 40}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const hexagons = [
    { x: 0, y: 0 }, { x: 1, y: 0 }, { x: -1, y: 0 },
    { x: 0.5, y: 0.87 }, { x: -0.5, y: 0.87 },
    { x: 0.5, y: -0.87 }, { x: -0.5, y: -0.87 },
  ];

  return (
    <div className="relative w-64 h-64" style={{ perspective: "600px" }}>
      <div 
        ref={containerRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {hexagons.map((hex, i) => (
          <div
            key={i}
            className="absolute w-16 h-16 border border-[#D8CEC0]/80"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${hex.x * 70}px, ${hex.y * 70}px)`,
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              background: i === 0 ? "rgba(255, 253, 248, 0.9)" : "rgba(244, 239, 230, 0.18)",
            }}
          />
        ))}
        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#E7DCCB]/80 blur-xl" />
      </div>
    </div>
  );
}
