"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const stages = [
  { title: "Oil", copy: "Feedstock enters the network from producers and traders." },
  { title: "Storage", copy: "Secure tank farms hold product under continuous surveillance." },
  { title: "Pipeline", copy: "Engineered corridors move volume with integrity assurance." },
  { title: "Terminal", copy: "Berths, manifolds, and control rooms orchestrate transfer." },
  { title: "Ship", copy: "Vessels load for long-haul ocean transit." },
  { title: "Global Delivery", copy: "Energy arrives where markets and communities need it." },
];

export function StoryJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-midnight py-24 md:py-32">
      <div className="section-pad container-regis">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            The Journey
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
            From molecule to market
          </h2>
          <p className="mt-4 max-w-xl text-steel-light">
            Scroll through the energy value chain — each stage is a chapter in our operational story.
          </p>
        </Reveal>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-white/10 md:left-6" />
          <motion.div
            className="absolute top-0 left-4 w-px origin-top bg-gradient-to-b from-cyan via-electric to-emerald md:left-6"
            style={{ height: lineHeight }}
          />

          <ul className="space-y-10 md:space-y-14">
            {stages.map((stage, i) => (
              <Reveal key={stage.title} delay={i * 0.05}>
                <li className="relative pl-14 md:pl-20">
                  <span className="absolute top-1 left-2.5 flex h-4 w-4 items-center justify-center rounded-full border border-cyan bg-navy-950 md:left-[1.1rem]">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                  </span>
                  <p className="font-display text-2xl font-bold text-white md:text-3xl">
                    {stage.title}
                  </p>
                  <p className="mt-2 max-w-lg text-steel-light">{stage.copy}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
