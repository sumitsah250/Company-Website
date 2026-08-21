"use client";

import { useRef, useEffect, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in" | "blur-in";
  delay?: number;
  duration?: number;
  threshold?: number;
}

export default function AnimateOnScroll({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  threshold = 0.15,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  const animations = {
    "fade-up": {
      hidden: { opacity: 0, transform: "translateY(40px)" },
      visible: { opacity: 1, transform: "translateY(0)" },
    },
    "fade-in": {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-left": {
      hidden: { opacity: 0, transform: "translateX(60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "slide-right": {
      hidden: { opacity: 0, transform: "translateX(-60px)" },
      visible: { opacity: 1, transform: "translateX(0)" },
    },
    "scale-in": {
      hidden: { opacity: 0, transform: "scale(0.9)" },
      visible: { opacity: 1, transform: "scale(1)" },
    },
    "blur-in": {
      hidden: { opacity: 0, filter: "blur(10px)" },
      visible: { opacity: 1, filter: "blur(0px)" },
    },
  };

  const currentAnim = animations[animation];

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...currentAnim.hidden,
        transition: `all ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        ...(isVisible ? currentAnim.visible : {}),
        willChange: "opacity, transform, filter",
      }}
    >
      {children}
    </div>
  );
}
