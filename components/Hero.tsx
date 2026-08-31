"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Hero3DShape from "./Hero3DShape";
import Floating3D from "./Floating3D";

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
    <section className="relative h-[100vh] min-h-[720px] overflow-hidden bg-[#030303] text-[#f5f1ea] pt-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 68% 24%, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.02) 14%, transparent 34%), radial-gradient(circle at 52% 104%, rgba(255,255,255,0.04) 0%, transparent 30%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[54%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-white/[0.04] blur-[110px]"
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [0.98, 1.12, 0.98] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#080808] to-transparent" />

      <div className="relative z-10 mx-auto flex h-[calc(100vh-80px)] max-w-[1500px] items-center px-4 pb-8 sm:px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 42 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 lg:pt-0 lg:-translate-y-[1%] lg:translate-x-[2%]"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[#d9d5cf]/70"
            >
              SUMIX DEVELOPERS / DIGITAL STUDIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 56, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] font-medium uppercase leading-[0.78] tracking-[-0.08em] text-[#f5f1ea]"
              style={{ fontSize: "clamp(3.4rem, 7vw, 11rem)" }}
            >
              <span className="block">WE BUILD</span>
              <span className="block text-[#f5f1ea]/95">WHAT&apos;S NEXT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[560px] text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#d6d1ca]/65 sm:text-[0.8rem]"
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
                className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-[#f3efe8]/90 transition-colors hover:text-white"
              >
                <span>VIEW OUR WORK</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/[0.02] text-base text-[#f5f1ea] transition-transform duration-300 group-hover:translate-x-1 group-hover:border-white/25">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatType: "mirror", repeatDelay: 0.5 }}
            className="relative flex items-end justify-center"
          >
            <div className="absolute inset-x-[12%] bottom-[8%] h-[34%] rounded-full bg-[#f1efe9]/6 blur-[92px]" />
            <Floating3D speed={0.9} amplitude={16} className="relative z-10">
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
        <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#d9d5cf]/70">
          SCROLL TO EXPLORE
        </span>
        <div className="relative h-px w-14 overflow-hidden bg-white/10">
          <motion.div
            className="absolute left-0 top-0 h-full w-full origin-left bg-[#f5f1ea]/80"
            animate={{ scaleX: [0, 1, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
