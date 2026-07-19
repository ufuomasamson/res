import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { GlobalNetwork } from "@/components/home/GlobalNetwork";

export default function TerminalOperationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terminal Operations"
        title="Ocean highways. Orchestrated arrivals."
        description="Massive tanker movements synchronized with terminal windows, inland transfer, and market timing."
        image="/img/Terminal-Operations.png"
        ctaHref="/contact"
        ctaLabel="Plan a Shipment"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Vessels",
              copy: "Tanker coordination and berth window management.",
            },
            {
              title: "Containers & Cargo",
              copy: "Multimodal connections beyond bulk liquids.",
            },
            {
              title: "Trucking",
              copy: "Last-leg dispatch from terminal truck racks.",
            },
            {
              title: "Air Freight Links",
              copy: "Critical spare and time-sensitive logistics support.",
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel-light">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="terminal-network">
        <GlobalNetwork />
      </div>
    </>
  );
}
