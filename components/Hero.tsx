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
    <section className="relative h-[100vh] min-h-[720px] overflow-hidden bg-[#F4EFE6] text-[#211F1B] pt-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 68% 22%, rgba(33,31,27,0.06) 0%, rgba(33,31,27,0.018) 12%, transparent 32%), radial-gradient(circle at 58% 100%, rgba(33,31,27,0.04) 0%, transparent 28%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(33,31,27,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(33,31,27,0.12) 1px, transparent 1px)",
          backgroundSize: "84px 84px",
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute left-[54%] top-[18%] h-[22rem] w-[22rem] rounded-full bg-[#C8BAA9]/[0.18] blur-[120px]"
        animate={{ opacity: [0.28, 0.42, 0.28], scale: [0.97, 1.08, 0.97] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#EDE6DA] via-[#F4EFE6]/70 to-transparent" />

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
              className="mb-6 text-[10px] font-medium uppercase tracking-[0.38em] text-[#211F1B]"
            >
              SUMIX DEVELOPERS / DIGITAL STUDIO
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 56, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[760px] font-medium uppercase leading-[0.78] tracking-[-0.08em] text-[#211F1B]"
              style={{ fontSize: "clamp(3.4rem, 7vw, 11rem)" }}
            >
              <span className="block">WE BUILD</span>
              <span className="block text-[#211F1B]">WHAT&apos;S NEXT.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 max-w-[560px] text-[0.72rem] font-medium uppercase tracking-[0.2em] text-[#211F1B] sm:text-[0.8rem]"
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
                className="group inline-flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.38em] text-[#211F1B] transition-colors hover:text-[#211F1B]"
              >
                <span>VIEW OUR WORK</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C8BAA9] bg-[#FFFDF8] text-base text-[#211F1B] transition-transform duration-300 group-hover:translate-x-1 group-hover:border-[#B8A58E]">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, scale: 1 }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
            className="relative flex items-end justify-center"
          >
            <div className="absolute inset-x-[12%] bottom-[8%] h-[34%] rounded-full bg-[#C8BAA9]/[0.12] blur-[92px]" />
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
        <span className="text-[10px] font-medium uppercase tracking-[0.38em] text-[#77746F]">
          SCROLL TO EXPLORE
        </span>
        <div className="relative h-px w-14 overflow-hidden bg-[#DEDCD7]">
          <motion.div
            className="absolute left-0 top-0 h-full w-full origin-left bg-[#181612]"
            animate={{ scaleX: [0, 1, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
