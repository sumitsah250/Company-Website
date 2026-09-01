"use client";

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
<<<<<<< HEAD
=======
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
>>>>>>> 14a424c917ebe30c379a20e2ad540b33d7b817f5
import Hero3DShape from "./Hero3DShape";
import Floating3D from "./Floating3D";

<<<<<<< HEAD
type HeroProps = {
  featuredProject?: {
    title?: string;
    description?: string;
    image?: string;
  };
};

export default function Hero({ featuredProject }: HeroProps = {}) {
  void featuredProject;
  return (
    <section className="relative h-[100vh] min-h-[720px] overflow-hidden bg-[#050505] text-[#F2EFE9] pt-20">
=======
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    mass: 0.5,
  });

  const visualY = useTransform(smoothScrollProgress, [0, 1], [0, 110]);
  const visualScale = useTransform(smoothScrollProgress, [0, 1], [1, 1.08]);
  const visualRotateX = useTransform(smoothScrollProgress, [0, 1], [0, 8]);
  const visualRotateY = useTransform(smoothScrollProgress, [0, 1], [-12, 10]);
  const visualX = useTransform(smoothScrollProgress, [0, 1], [0, -18]);
  const glowOneY = useTransform(smoothScrollProgress, [0, 1], [0, 60]);
  const glowTwoY = useTransform(smoothScrollProgress, [0, 1], [0, -40]);
  const glowThreeY = useTransform(smoothScrollProgress, [0, 1], [0, 80]);

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
>>>>>>> 14a424c917ebe30c379a20e2ad540b33d7b817f5
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 68% 22%, rgba(242,239,233,0.09) 0%, rgba(242,239,233,0.025) 12%, transparent 32%), radial-gradient(circle at 58% 100%, rgba(242,239,233,0.04) 0%, transparent 28%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[54%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-[#F2EFE9]/[0.04] blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [0.97, 1.08, 0.97] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808] via-[#050505]/65 to-transparent" />

      <div className="relative z-10 mx-auto flex h-[calc(100vh-80px)] max-w-[1500px] items-center px-4 pb-8 sm:px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 lg:-translate-y-[1%] lg:translate-x-[2%] lg:pt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[#9B9892]"
            >
              SUMIX DEVELOPERS / DIGITAL STUDIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 56, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] font-medium uppercase leading-[0.78] tracking-[-0.08em] text-[#F2EFE9]"
              style={{ fontSize: "clamp(3.4rem, 7vw, 11rem)" }}
            >
              <span className="block">WE BUILD</span>
              <span className="block text-[#F2EFE9]/95">WHAT&apos;S NEXT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[560px] text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#9B9892] sm:text-[0.8rem]"
            >
              Digital products, intelligent systems & experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-[#F2EFE9]/90 transition-colors hover:text-white"
              >
                <span>VIEW OUR WORK</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#292929] bg-[#0C0C0C]/80 text-base text-[#F2EFE9] transition-transform duration-300 group-hover:translate-x-1 group-hover:border-[#3A3A3A]">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

<<<<<<< HEAD
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatType: "mirror", repeatDelay: 0.5 }}
            className="relative flex items-end justify-center"
          >
            <div className="absolute inset-x-[12%] bottom-[8%] h-[34%] rounded-full bg-[#F2EFE9]/[0.05] blur-[92px]" />
            <Floating3D speed={0.9} amplitude={16} className="relative z-10">
=======
          {/* Right - 3D Visual */}
          <motion.div 
            className="hidden lg:flex items-center justify-center"
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
            <Floating3D speed={0.7} amplitude={8}>
>>>>>>> 14a424c917ebe30c379a20e2ad540b33d7b817f5
              <Hero3DShape />
            </Floating3D>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-4 right-4 z-20 flex items-center gap-3 sm:right-8 sm:bottom-6"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#9B9892]">
          SCROLL TO EXPLORE
        </span>
        <div className="relative h-px w-14 overflow-hidden bg-[#202020]">
          <motion.div
            className="absolute left-0 top-0 h-full w-full origin-left bg-[#F2EFE9]/80"
            animate={{ scaleX: [0, 1, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
