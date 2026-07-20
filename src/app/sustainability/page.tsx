import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Environmental commitment, carbon reduction, and safety innovation at Res Logistics.",
};

export default function SustainabilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Progress measured in cleaner energy movement"
        description="A brighter operational atmosphere — greens, growth, and rigorous environmental accountability."
        image="/img/sustainability.jpg"
        tone="nature"
      />

      <section className="bg-gradient-to-b from-[#071a14] to-[#0a241c] py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Environmental Commitment
            </h2>
            <p className="mt-4 max-w-2xl text-steel-light">
              One of the pillars of our sustainability efforts is our focus on minimizing the
              environmental impact of our operations. As a leading logistics and storage company,
              we understand that our activities—from storage tank operations to product handling
              and transportation—can significantly affect the environment if not managed
              responsibly.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-8 sm:grid-cols-3">
            <AnimatedCounter value={32} suffix="%" label="Carbon Reduction Pathway" />
            <AnimatedCounter value={48} suffix="%" label="Energy Efficiency Target" />
            <AnimatedCounter value={100} suffix="%" label="Safety Standards Coverage" />
          </div>
        </div>
      </section>

      <section className="bg-[#0c3328] py-24">
        <div className="section-pad container-regis grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Carbon Reduction", copy: "Electrification pilots, vapor recovery, and optimized vessel waiting." },
            { title: "Safety Standards", copy: "ISO-aligned systems and continuous process hazard reviews." },
            { title: "Innovation", copy: "Digital twins and predictive integrity for fewer wasteful interventions." },
            { title: "Future Goals", copy: "Net-lower intensity operations with transparent annual reporting." },
            { title: "Community", copy: "Local partnerships around terminal environmental stewardship." },
            { title: "Biodiversity", copy: "Buffer zones and runoff controls protecting coastal ecosystems." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-emerald/20 bg-black/20 p-6">
                <h3 className="font-display text-xl font-semibold text-emerald">{item.title}</h3>
                <p className="mt-2 text-sm text-steel-light">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
