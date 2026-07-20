import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Droplets, Waypoints, Ship } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Liquid storage, pipeline transport, and global logistics & shipping from Res Logistics PTE Ltd.",
};

const services = [
  {
    href: "/services/liquid-storage",
    title: "Liquid Storage & Handling",
    description:
      "Tank farms engineered for secure custody, inventory precision, and continuous monitoring.",
    icon: Droplets,
  },
  {
    href: "/services/pipeline-transport",
    title: "Pipeline Transport",
    description:
      "High-integrity corridors that move energy underground with pulse-level visibility.",
    icon: Waypoints,
  },
  {
    href: "/services/logistics-shipping",
    title: "Logistics & Shipping",
    description:
      "Ocean routes, vessel coordination, and multimodal handoffs across the world.",
    icon: Ship,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="End-to-end energy movement"
        description="From tank to terminal to ocean — capabilities designed as one connected system."
        image="/img/company-overview.png"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis grid gap-6 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.href} delay={i * 0.08}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/40 p-8 transition-all hover:-translate-y-1 hover:border-cyan/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-6 font-display text-2xl font-semibold text-white group-hover:text-cyan">
                    {service.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-steel-light">
                    {service.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-cyan">Explore →</span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
