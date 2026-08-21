"use client";

import { useRef, useEffect, ReactNode } from "react";

interface Floating3DProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  amplitude?: number;
}

export default function Floating3D({ children, className = "", speed = 1, amplitude = 15 }: Floating3DProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let animationId: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const y = Math.sin((elapsed * speed) / 1000) * amplitude;
      const rotateX = Math.sin((elapsed * speed * 0.5) / 1000) * 3;
      const rotateY = Math.cos((elapsed * speed * 0.3) / 1000) * 3;

      element.style.transform = `translateY(${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed, amplitude]);

  return (
    <div 
      ref={elementRef} 
      className={`${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </div>
  );
}
