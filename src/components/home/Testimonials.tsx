"use client";

import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "Res operates with the discipline of a Fortune 500 infrastructure partner — reliability we can plan around.",
    name: "Aisha Rahman",
    role: "VP Supply, Global Energy Trader",
    logo: "Aether Energy",
  },
  {
    quote:
      "Their terminal controls and custody transfer systems set a new bar for transparency in liquid storage.",
    name: "Marcus Chen",
    role: "Director of Operations, Pacific Fuels",
    logo: "Pacific Fuels",
  },
  {
    quote:
      "From pipeline integrity to vessel berthing, every handoff is orchestrated with precision.",
    name: "Elena Vos",
    role: "Head of Logistics, NordVista",
    logo: "NordVista",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-navy-950 py-24 md:py-32">
      <div className="section-pad container-regis">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            Trusted Partners
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
            Built on long-term confidence
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/40 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
                <p className="text-sm tracking-[0.16em] text-cyan uppercase">{t.logo}</p>
                <p className="mt-5 flex-1 text-base leading-relaxed text-steel-light">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-sm text-steel">{t.role}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
