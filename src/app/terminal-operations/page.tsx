import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { GlobalNetwork } from "@/components/home/GlobalNetwork";

export default function TerminalOperationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Terminal Operations"
        title="Our terminal operations are the backbone of our global logistics network"
        description="Strategically located in key international ports, our terminals are equipped to handle wide range of petrochemicals products such as crude oil, diesel En590, jet fuel and other chemical products."
        image="/img/Terminal-Operations.png"
        ctaHref="/contact"
        ctaLabel="Plan a Shipment"
      />

      <div id="terminal-network">
        <GlobalNetwork />
      </div>

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "24/7 Operations",
              copy: "Our terminals operate around the clock to ensure continuous product movement, minimizing delays and optimizing logistics efficiency.",
            },
            {
              title: "Advanced Infrastructure",
              copy: "We use state-of-the-art technology for automated loading and unloading, tank monitoring, and product tracking to enhance safety and efficiency.",
            },
            {
              title: "Global Connectivity",
              copy: "Our terminals are strategically located in major ports, allowing for quick and efficient access to international shipping routes and distribution networks.",
            },
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
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-900/40 p-6">
                <h3 className="font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-light">{item.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
