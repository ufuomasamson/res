"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

const hotspots = [
  { id: "tanks", label: "Storage Tanks", x: "28%", y: "42%", detail: "High-capacity tanks with continuous level and pressure monitoring." },
  { id: "dock", label: "Dock", x: "68%", y: "70%", detail: "Deepwater berths for tanker loading and unloading operations." },
  { id: "pipeline", label: "Pipeline", x: "48%", y: "58%", detail: "Manifold and pipeline links between tanks, pumps, and berths." },
  { id: "control", label: "Control Center", x: "52%", y: "28%", detail: "24/7 SCADA oversight of transfers, alarms, and integrity." },
  { id: "loading", label: "Loading Area", x: "38%", y: "68%", detail: "Truck racks and metering for inland distribution." },
  { id: "ships", label: "Ships", x: "78%", y: "62%", detail: "Vessel coordination synchronized with berth windows." },
];

const flow = [
  "Ship arrives",
  "Unload",
  "Storage",
  "Quality inspection",
  "Pipeline transfer",
  "Truck loading",
  "Departure",
];

export default function TerminalOperationsPage() {
  const [active, setActive] = useState("tanks");
  const current = hotspots.find((h) => h.id === active)!;

  return (
    <>
      <PageHero
        eyebrow="Terminal Operations"
        title="A living petroleum terminal"
        description="Hover the isometric landscape — every hotspot reveals how product moves through the facility."
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Interactive terminal map
            </h2>
            <p className="mt-3 max-w-xl text-steel-light">
              Explore tanks, docks, pipelines, and control systems as one coordinated operation.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/10 bg-midnight">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

              {hotspots.map((spot) => (
                <button
                  key={spot.id}
                  type="button"
                  className="absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ left: spot.x, top: spot.y }}
                  onMouseEnter={() => setActive(spot.id)}
                  onFocus={() => setActive(spot.id)}
                  onClick={() => setActive(spot.id)}
                  aria-label={spot.label}
                >
                  <span
                    className={`block h-4 w-4 rounded-full border-2 ${
                      active === spot.id
                        ? "border-cyan bg-cyan shadow-[0_0_20px_rgba(45,212,191,0.8)]"
                        : "border-electric bg-electric/40"
                    }`}
                  />
                  <span className="absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy-950/90 px-2 py-1 text-[10px] text-white md:text-xs">
                    {spot.label}
                  </span>
                </button>
              ))}

              <div className="absolute right-4 bottom-4 left-4 rounded-2xl border border-cyan/20 bg-navy-950/90 p-4 backdrop-blur-md md:right-6 md:bottom-6 md:left-auto md:w-80">
                <p className="font-semibold text-cyan">{current.label}</p>
                <p className="mt-2 text-sm text-steel-light">{current.detail}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Operational storyline
            </h2>
          </Reveal>
          <ol className="mt-12 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center">
            {flow.map((step, i) => (
              <Reveal key={step} delay={i * 0.05} className="flex items-center gap-4">
                <li className="rounded-xl border border-white/10 bg-navy-900/50 px-4 py-3 text-sm font-medium text-white">
                  <span className="mr-2 text-cyan">{String(i + 1).padStart(2, "0")}</span>
                  {step}
                </li>
                {i < flow.length - 1 && (
                  <span className="hidden text-cyan md:inline" aria-hidden="true">
                    →
                  </span>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
