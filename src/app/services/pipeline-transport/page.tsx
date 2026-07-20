import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Pipeline Transport",
  description:
    "Pipeline networks that carry energy with continuous integrity monitoring and intelligent flow control.",
};

export default function PipelinePage() {
  return (
    <>
      <PageHero
        eyebrow="Pipeline Transport"
        title="Underground arteries of global energy"
        description="Glowing corridors of flow — engineered, monitored, and secured from origin to terminal gate."
        image="/img/pipeline-transport.jpg"
        centered
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Pipeline Service
            </h2>
            <p className="mt-4 max-w-2xl text-steel-light">
              Our pipeline service provides efficient, safe, and cost-effective
              transportation of petroleum and liquid products, across Singapore
              and Asia, our pipelines services are designed to meet the evolving
              needs of the energy sector
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-midnight p-8 md:p-12">
            <svg viewBox="0 0 800 200" className="h-auto w-full" aria-hidden="true">
              <path
                id="pipe"
                d="M40 120 C160 40, 280 180, 400 100 S640 40, 760 120"
                fill="none"
                stroke="#163a5f"
                strokeWidth="28"
                strokeLinecap="round"
              />
              <path
                d="M40 120 C160 40, 280 180, 400 100 S640 40, 760 120"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.5"
              />
              <circle r="8" fill="#38bdf8">
                <animateMotion dur="3.5s" repeatCount="indefinite" path="M40 120 C160 40, 280 180, 400 100 S640 40, 760 120" />
              </circle>
              <circle r="6" fill="#2dd4bf">
                <animateMotion dur="3.5s" begin="1.1s" repeatCount="indefinite" path="M40 120 C160 40, 280 180, 400 100 S640 40, 760 120" />
              </circle>
              <text x="40" y="170" fill="#8b9cb3" fontSize="14">Inlet</text>
              <text x="700" y="170" fill="#8b9cb3" fontSize="14">Terminal</text>
            </svg>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { title: "Inlet", copy: "Metered entry with quality sampling and batch identification." },
              { title: "Transit", copy: "With real-time monitoring systems that track the flow of the product" },
              { title: "Arrival", copy: "Controlled discharge into tank farms or loading systems." },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
                  <h3 className="font-display text-xl font-semibold text-cyan">{step.title}</h3>
                  <p className="mt-2 text-sm text-steel-light">{step.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
