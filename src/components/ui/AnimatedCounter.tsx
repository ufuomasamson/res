"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 1.8,
}: CounterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    let frame: number;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(eased * value));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration, reduce]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
        <span className="text-cyan">{prefix}</span>
        {display}
        <span className="text-cyan">{suffix}</span>
      </p>
      <p className="mt-2 text-sm tracking-wide text-steel uppercase md:text-base">{label}</p>
    </div>
  );
}
