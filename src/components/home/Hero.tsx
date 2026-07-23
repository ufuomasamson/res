"use client";

import { useEffect, useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";

const teaser =
  "Res Logistics has established itself as one of the Asia’s top global logistics and storage providers in Singapore, serving the petroleum industry with years of expertise.";

const more =
  "Our operations focus on bulk liquid storage, vessel shipping, pipeline transport, chemical blending and integrated logistics solutions designed to meet the demand of global energy markets in Asia and Europe.";

function Particles() {
  const [dots, setDots] = useState<{ id: number; left: number; delay: number; size: number }[]>(
    [],
  );

  useEffect(() => {
    setDots(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        size: 1 + Math.random() * 2,
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {dots.map((dot) => (
        <span
          key={dot.id}
          className="absolute bottom-0 rounded-full bg-cyan/35 animate-[particle-rise_12s_linear_infinite]"
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
  const [reduceMotion, setReduceMotion] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const moreId = useId();

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pb-16 pt-10 md:pb-20 md:pt-12">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="/img/hero-bg.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
        />

        <div className="absolute inset-0 bg-navy-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/55 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
        {!reduceMotion && <Particles />}
      </div>

      <div className="section-pad container-regis relative z-10 w-full">
        <div className="max-w-2xl">
          <p className="mb-3 font-display text-[11px] font-semibold tracking-[0.28em] text-cyan uppercase sm:text-xs">
            Welcome to Res Logistics PTE LTD
          </p>

          <h1 className="font-display text-[2rem] leading-[1.12] font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            Powering Global
            <br className="hidden sm:block" />{" "}
            <span className="text-gradient">Petroleum Supply Chains</span>
          </h1>

          <div className="mt-5 max-w-xl">
            <p className="text-sm leading-relaxed text-steel-light sm:text-[0.95rem]">
              {teaser}
            </p>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.p
                  id={moreId}
                  key="more"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden text-sm leading-relaxed text-steel-light sm:text-[0.95rem]"
                >
                  <span className="mt-3 block">{more}</span>
                </motion.p>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={moreId}
              className="mt-2.5 inline-flex cursor-pointer items-center gap-1 text-xs font-semibold tracking-wide text-cyan transition-colors hover:text-electric"
            >
              {expanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  expanded ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="/services" className="px-5 py-3 text-xs sm:text-sm">
              Explore Services
            </Button>
            <Button href="/contact" variant="secondary" className="px-5 py-3 text-xs sm:text-sm">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
