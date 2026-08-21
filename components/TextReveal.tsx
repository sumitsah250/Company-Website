"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  type?: "chars" | "words";
}

export default function TextReveal({ 
  text, 
  className = "", 
  delay = 0,
  once = true,
  type = "words",
}: TextRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px" });

  const items = type === "words" ? text.split(" ") : text.split("");

  return (
    <motion.span
      ref={ref}
      className={`inline-flex flex-wrap ${className}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: type === "words" ? 0.08 : 0.02,
            delayChildren: delay,
          },
        },
      }}
    >
      {items.map((item, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ marginRight: type === "words" ? "0.3em" : "0" }}
          variants={{
            hidden: { opacity: 0, y: 20, rotateX: -90 },
            visible: { 
              opacity: 1, 
              y: 0, 
              rotateX: 0,
              transition: {
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}
