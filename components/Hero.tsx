"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [frameIndex, setFrameIndex] = useState(0);
  const [isSequenceActive, setIsSequenceActive] = useState(!prefersReducedMotion);
  const frameCount = 147;
  const animationCompleteRef = useRef(Boolean(prefersReducedMotion));
  const animationProgressRef = useRef(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  useEffect(() => {
    if (prefersReducedMotion) {
      setFrameIndex(0);
      setIsSequenceActive(false);
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    let touchStartY = 0;

    document.body.style.overflow = "hidden";

    const releaseScroll = (scrollDelta: number, direction: "down" | "up") => {
      animationCompleteRef.current = direction === "down";
      setIsSequenceActive(direction === "up");
      document.body.style.overflow = direction === "down" ? previousOverflow : "hidden";
      window.scrollBy({ top: scrollDelta, behavior: "auto" });
    };

    const updateAnimation = (distance: number) => {
      animationProgressRef.current = Math.min(
        1,
        Math.max(0, animationProgressRef.current + distance / 4200),
      );
      setFrameIndex(Math.floor(animationProgressRef.current * (frameCount - 1)));
      return animationProgressRef.current;
    };

    const handleWheel = (event: WheelEvent) => {
      const isReversingAtTop = animationCompleteRef.current && event.deltaY < 0 && window.scrollY <= 0;
      if (!animationCompleteRef.current || isReversingAtTop) {
        event.preventDefault();
        if (isReversingAtTop) setIsSequenceActive(true);
        const progress = updateAnimation(event.deltaY);

        if (progress >= 1) {
          releaseScroll(event.deltaY, "down");
        } else if (progress <= 0) {
          releaseScroll(event.deltaY, "up");
        }
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (!animationCompleteRef.current) {
        touchStartY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!animationCompleteRef.current || window.scrollY <= 0) event.preventDefault();
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const touchEndY = event.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      const isReversingAtTop = animationCompleteRef.current && swipeDistance < 0 && window.scrollY <= 0;

      if (!animationCompleteRef.current || isReversingAtTop) {
        if (isReversingAtTop) setIsSequenceActive(true);
        const progress = updateAnimation(swipeDistance * 2);

        if (progress >= 1) {
          releaseScroll(swipeDistance, "down");
        } else if (progress <= 0) {
          releaseScroll(swipeDistance, "up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [frameCount, prefersReducedMotion]);

  const visualY = useTransform(smoothScrollProgress, [0, 1], [0, 110]);
  const visualScale = useTransform(smoothScrollProgress, [0, 1], [1, 1.08]);
  const visualRotateX = useTransform(smoothScrollProgress, [0, 1], [0, 8]);
  const visualRotateY = useTransform(smoothScrollProgress, [0, 1], [-12, 10]);
  const visualX = useTransform(smoothScrollProgress, [0, 1], [0, -18]);
  const glowOneY = useTransform(smoothScrollProgress, [0, 1], [0, 60]);
  const glowTwoY = useTransform(smoothScrollProgress, [0, 1], [0, -40]);
  const glowThreeY = useTransform(smoothScrollProgress, [0, 1], [0, 80]);

  const activeFrame = `/home_page_animation/ezgif-frame-${String(frameIndex + 1).padStart(3, "0")}.jpg`;

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[128px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={prefersReducedMotion ? undefined : { y: glowOneY }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={prefersReducedMotion ? undefined : { y: glowTwoY }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={prefersReducedMotion ? undefined : { y: glowThreeY }}
        />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-elevated border border-border/50 mb-8 glow-subtle"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted">Software + AI + Digital Products</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              We Build Digital
              <br />
              <span className="text-gradient">Products That Move Businesses Forward.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              className="text-lg sm:text-xl text-muted leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              From custom software and mobile applications to intelligent AI systems and scalable web platforms — we engineer solutions that drive growth and deliver measurable impact.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <MagneticButton strength={0.2}>
                <Link
                  href="/contact"
                  className="group relative flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-background font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-[1.02]"
                >
                  <span className="relative z-10">Start a Project</span>
                  <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-10 transition-opacity" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/projects"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl border border-border/50 text-white font-semibold hover:bg-surface-elevated hover:border-primary/30 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right - Sequence Visual */}
          <motion.div 
            className={isSequenceActive
              ? "fixed inset-0 z-50 flex items-center justify-center bg-background"
              : "hidden lg:flex items-center justify-center"}
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={prefersReducedMotion ? undefined : {
              y: visualY,
              x: visualX,
              scale: visualScale,
              rotateX: visualRotateX,
              rotateY: visualRotateY,
              transformPerspective: 1400,
            }}
          >
            <div className={isSequenceActive
              ? "relative w-screen h-[100dvh] flex items-center justify-center"
              : "relative w-[520px] h-[520px] flex items-center justify-center"}
            >
              <img
                src={activeFrame}
                alt="Sumix Developers sequence animation"
                className="w-full h-full object-contain select-none pointer-events-none"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom stats */}
        <motion.div 
          className="mt-20 pt-12 border-t border-border/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Software Engineering", desc: "Custom solutions" },
              { label: "AI & Automation", desc: "Intelligent systems" },
              { label: "Digital Experiences", desc: "User-first design" },
              { label: "Cloud & Infrastructure", desc: "Scalable hosting" },
            ].map((item, i) => (
              <motion.div 
                key={item.label} 
                className="text-center group"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
              >
                <div className="text-sm font-semibold text-white mb-1 group-hover:text-primary transition-colors">{item.label}</div>
                <div className="text-xs text-subtle">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
