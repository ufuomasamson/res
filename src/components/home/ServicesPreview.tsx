"use client";

import Link from "next/link";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    href: "/services/liquid-storage",
    title: "Liquid Storage",
    blurb: "High-integrity tank farms with real-time custody and inventory control.",
    visual: "tank",
  },
  {
    href: "/services/pipeline-transport",
    title: "Pipeline Transport",
    blurb: "Continuous energy flow through engineered, monitored corridors.",
    visual: "pipeline",
  },
  {
    href: "/services/logistics-shipping",
    title: "Shipping",
    blurb: "Ocean vessels synchronized with terminal berthing and outbound lanes.",
    visual: "ship",
  },
  {
    href: "/services",
    title: "Logistics",
    blurb: "Multimodal routing that connects storage, pipe, and global delivery.",
    visual: "routes",
  },
];

function ServiceVisual({ type, active }: { type: string; active: boolean }) {
  if (type === "tank") {
    return (
      <svg viewBox="0 0 120 100" className="h-28 w-full" aria-hidden="true">
        <rect x="35" y="18" width="50" height="64" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <rect
          x="37"
          y="20"
          width="46"
          height="60"
          rx="4"
          fill="#2dd4bf"
          style={{
            transformOrigin: "bottom",
            transform: active ? "scaleY(0.72)" : "scaleY(0.25)",
            transition: "transform 0.8s ease",
            opacity: 0.45,
          }}
        />
        <line x1="35" y1="82" x2="85" y2="82" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "pipeline") {
    return (
      <svg viewBox="0 0 120 100" className="h-28 w-full" aria-hidden="true">
        <path
          d="M10 55 Q40 20 60 55 T110 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle
          r="5"
          fill="#38bdf8"
          style={{
            offsetPath: "path('M10 55 Q40 20 60 55 T110 55')",
            animation: active ? "energy-flow 1.8s linear infinite" : "none",
            opacity: active ? 1 : 0.4,
          }}
        />
      </svg>
    );
  }
  if (type === "ship") {
    return (
      <svg viewBox="0 0 120 100" className="h-28 w-full" aria-hidden="true">
        <path
          d="M20 62 L35 48 H85 L100 62 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={active ? "animate-[ship-drift_6s_ease-in-out_infinite]" : ""}
        />
        <path d="M15 68 H105" stroke="#38bdf8" strokeWidth="1.5" opacity="0.5" />
        <path d="M25 74 H95" stroke="#2dd4bf" strokeWidth="1" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 120 100" className="h-28 w-full" aria-hidden="true">
      <circle cx="30" cy="45" r="5" fill="#2dd4bf" className={active ? "animate-pulse-glow" : ""} />
      <circle cx="90" cy="35" r="5" fill="#38bdf8" className={active ? "animate-pulse-glow" : ""} />
      <circle cx="70" cy="70" r="4" fill="#34d399" className={active ? "animate-pulse-glow" : ""} />
      <path
        d="M30 45 Q55 20 90 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
        className={active ? "animate-[route-dash_2s_linear_infinite]" : ""}
      />
      <path
        d="M30 45 Q50 80 70 70"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

export function ServicesPreview() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="relative bg-navy-900 py-24 md:py-32">
      <div className="section-pad container-regis">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            Services
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
            Capabilities that move energy
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group block rounded-2xl border border-white/10 bg-navy-950/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_20px_50px_rgba(45,212,191,0.12)]"
                onMouseEnter={() => setHovered(service.title)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(service.title)}
                onBlur={() => setHovered(null)}
              >
                <div className="text-cyan">
                  <ServiceVisual type={service.visual} active={hovered === service.title} />
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{service.blurb}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
