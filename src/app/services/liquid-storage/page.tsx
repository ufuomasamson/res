import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Liquid Storage & Handling",
  description:
    "Petroleum and liquid storage terminals with advanced monitoring, safety, and inventory control.",
};

const facets = [
  { title: "Storage", copy: "Multi-product tank farms with segregated systems and coating integrity programs." },
  { title: "Handling", copy: "Manifold routing, pumping capacity, and precise custody transfer." },
  { title: "Safety", copy: "Fire systems, vapor control, and redundant emergency protocols." },
  { title: "Monitoring", copy: "Radar gauging, temperature profiles, and remote operations visibility." },
  { title: "Inspection", copy: "Scheduled integrity assessments and non-destructive evaluation." },
  { title: "Inventory", copy: "Real-time stock accounting aligned to commercial and regulatory needs." },
];

export default function LiquidStoragePage() {
  return (
    <>
      <PageHero
        eyebrow="Liquid Storage & Handling"
        title="Tank farms built for absolute custody"
        description="Dark industrial scale. Instrument-grade precision. Storage you can trust under every condition."
        image="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="relative overflow-hidden bg-navy-950 py-24">
        <div className="section-pad container-regis grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Animated integrity at every level
            </h2>
            <p className="mt-4 text-steel-light leading-relaxed">
              Product levels rise under control. Pressure and temperature stay within engineered
              envelopes. Operators see the tank as a living system — not a static asset.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-midnight p-8">
              <svg viewBox="0 0 280 220" className="mx-auto h-auto w-full max-w-sm text-cyan" aria-hidden="true">
                <rect x="80" y="30" width="120" height="150" rx="8" fill="none" stroke="currentColor" strokeWidth="3" />
                <rect x="84" y="34" width="112" height="142" rx="4" fill="#2dd4bf" opacity="0.15" />
                <rect
                  x="84"
                  y="80"
                  width="112"
                  height="96"
                  rx="4"
                  fill="#2dd4bf"
                  opacity="0.45"
                  className="origin-bottom animate-[fill-tank_3s_ease-in-out_infinite_alternate]"
                  style={{ transformBox: "fill-box", transformOrigin: "bottom" }}
                />
                <line x1="70" y1="70" x2="80" y2="70" stroke="#38bdf8" strokeWidth="2" />
                <line x1="70" y1="110" x2="80" y2="110" stroke="#38bdf8" strokeWidth="2" />
                <line x1="70" y1="150" x2="80" y2="150" stroke="#38bdf8" strokeWidth="2" />
                <text x="40" y="74" fill="#8b9cb3" fontSize="10">P</text>
                <text x="40" y="114" fill="#8b9cb3" fontSize="10">T</text>
                <text x="40" y="154" fill="#8b9cb3" fontSize="10">L</text>
              </svg>
              <p className="mt-4 text-center text-sm text-steel">Interactive tank cross-section concept</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="section-pad container-regis grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {facets.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-navy-950/50 p-6">
                <h3 className="font-display text-xl font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm text-steel-light">{f.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
