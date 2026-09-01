"use client";

import { useRef, useEffect } from "react";

export default function ProductCube3D() {
  const cubeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      if (cubeRef.current) {
        cubeRef.current.style.transform = `rotateX(${Math.sin(elapsed / 3000) * 15}deg) rotateY(${elapsed / 25}deg)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const faces = [
    { transform: "translateZ(50px)", bg: "from-[#F5F0E8] to-[#EDE6DA]", label: "AI" },
    { transform: "rotateY(90deg) translateZ(50px)", bg: "from-[#F8F4EE] to-[#EAE2D7]", label: "Cloud" },
    { transform: "rotateY(180deg) translateZ(50px)", bg: "from-[#F3EEE7] to-[#E5DCCF]", label: "Secure" },
    { transform: "rotateY(-90deg) translateZ(50px)", bg: "from-[#F9F6F1] to-[#E5DCCF]", label: "Auto" },
    { transform: "rotateX(90deg) translateZ(50px)", bg: "from-[#F7F3EB] to-[#EDE6DA]", label: "Data" },
    { transform: "rotateX(-90deg) translateZ(50px)", bg: "from-[#F7F3EB] to-[#EDE6DA]", label: "Build" },
  ];

  return (
    <div className="relative w-40 h-40 sm:w-48 sm:h-48" style={{ perspective: "800px" }}>
      <div 
        ref={cubeRef}
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {faces.map((face, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-gradient-to-br ${face.bg} border border-[#D8CEC0] backdrop-blur-sm flex items-center justify-center`}
            style={{ transform: face.transform }}
          >
            <span className="text-xs font-bold text-[#211F1B]/70 uppercase tracking-wider">{face.label}</span>
          </div>
        ))}

        {/* Inner core */}
        <div className="absolute inset-4 bg-[#E5DCCF]/50 blur-md" style={{ transform: "translateZ(0px)" }} />
      </div>

      {/* Orbiting ring */}
      <div 
        className="absolute inset-0 rounded-full border border-[#D8CEC0]"
        style={{ 
          transform: "rotateX(70deg) rotateZ(45deg)",
          animation: "float 8s ease-in-out infinite",
        }}
      />
    </div>
  );
}
