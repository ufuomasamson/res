"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

const offsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { x: 0, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const reduce = useReducedMotion();
  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={
        reduce
          ? { opacity: 1 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      animate={
        inView
          ? { opacity: 1, x: 0, y: 0 }
          : reduce
            ? { opacity: 1 }
            : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
