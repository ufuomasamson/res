"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";

function Particles() {
  const [dots, setDots] = useState<{ id: number; left: number; delay: number; size: number }[]>(
    [],
  );

  useEffect(() => {
    setDots(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        size: 1 + Math.random() * 2.5,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute bottom-0 rounded-full bg-cyan/40 animate-[particle-rise_12s_linear_infinite]"
          style={{
            left: `${dot.left}%`,
            width: dot.size,
            height: dot.size,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      setReduceMotion(mq.matches);
      const video = videoRef.current;
      if (!video) return;
      if (mq.matches) {
        video.pause();
      } else {
        void video.play().catch(() => {});
      }
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative isolate flex min-h-dvh items-end overflow-hidden pb-20 pt-32 md:items-center md:pb-0 md:pt-24">
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reduceMotion}
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/img/bg-v.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-900/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/35" />
        {!reduceMotion && <Particles />}
      </div>

      <div className="section-pad container-regis relative w-full">
        <p className="mb-5 font-display text-sm font-semibold tracking-[0.35em] text-cyan uppercase md:text-base">
          Regis Logistics PTE Ltd
        </p>
        <h1 className="max-w-4xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Powering Global{" "}
          <span className="text-gradient">Energy Logistics</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel-light md:text-xl">
          Safe Storage. Reliable Transport. Global Energy Solutions.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button href="/services">Explore Services</Button>
          <Button href="/contact" variant="secondary">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
