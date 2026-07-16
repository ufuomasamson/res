"use client";

import { Reveal } from "@/components/ui/Reveal";
import {
  Droplets,
  Waypoints,
  FlaskConical,
  Flame,
  Building2,
  Warehouse,
  Ship,
  Microscope,
} from "lucide-react";

const services = [
  {
    title: "Bulk Liquid Storage",
    copy: "Our state-of-the-art storage facilities provide secure, flexible solutions for petroleum products. We offer both short-term and long-term storage options, ensuring your products are handled with care and maintained in optimal conditions.",
    icon: Droplets,
  },
  {
    title: "Pipeline Transport",
    copy: "We utilize an extensive network of pipelines for the safe, efficient, and cost-effective transport of bulk liquids. This reduces reliance on road transport, minimizing environmental impact and enhancing delivery speed.",
    icon: Waypoints,
  },
  {
    title: "Chemical Blending",
    copy: "We offer precise blending services, allowing clients to customize fuel and chemical formulations to meet specific standards. Our blending operations are backed by stringent quality control measures, ensuring product consistency.",
    icon: FlaskConical,
  },
  {
    title: "Heating Services",
    copy: "Our heated tanks provide temperature-controlled environments for products that require special storage conditions. This service is essential for maintaining the integrity of products such as heavy fuel oils and waxes.",
    icon: Flame,
  },
  {
    title: "Terminal Operations",
    copy: "Our terminals, located in key global energy hubs, facilitate the loading, unloading, and storage of petroleum products. With 24/7 operations, we ensure a smooth, continuous flow of products, meeting the demands of the global energy supply chain.",
    icon: Building2,
  },
  {
    title: "Warehousing",
    copy: "Our secure warehousing facilities provide reliable storage solutions for packaged petroleum products and chemicals. We use advanced monitoring systems to maintain optimal storage conditions, keeping your goods safe until they’re ready for dispatch.",
    icon: Warehouse,
  },
  {
    title: "Shipping",
    copy: "We offer global shipping services, ensuring the safe and timely transport of petroleum products across international waters. Our partnerships with major shipping lines and strategic port locations enable us to manage the complex logistics of moving products worldwide with efficiency and precision.",
    icon: Ship,
  },
  {
    title: "Quality Testing",
    copy: "We conduct comprehensive fuel testing services to ensure your products meet all regulatory and performance standards. Equipped with the latest technology, our testing labs provide accurate analysis, ensuring that fuel quality remains consistent and reliable throughout the supply chain.",
    icon: Microscope,
  },
];

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-[10%] h-72 w-72 rounded-full bg-cyan/10 blur-[100px] animate-pulse-glow" />
        <div className="absolute right-[5%] bottom-0 h-80 w-80 rounded-full bg-ocean/25 blur-[120px] animate-float" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/10 blur-[90px] animate-[pulse-glow_5s_ease-in-out_infinite]" />
        <svg
          className="absolute inset-0 h-full w-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M0 400 C200 280, 400 520, 600 360 S1000 280, 1200 420"
            fill="none"
            stroke="rgba(45,212,191,0.45)"
            strokeWidth="1.2"
            strokeDasharray="8 10"
            className="animate-[route-flow_8s_linear_infinite]"
          />
          <path
            d="M0 520 C250 480, 500 620, 750 500 S1050 460, 1200 560"
            fill="none"
            stroke="rgba(56,189,248,0.35)"
            strokeWidth="1"
            strokeDasharray="5 12"
            className="animate-[route-flow_11s_linear_infinite]"
          />
        </svg>
      </div>

      <div className="section-pad container-regis relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
            Comprehensive Service Portfolio
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
            At Res Logistics PTE LTD, we understand that every client has unique
            storage and logistics needs. As a result, we offer a comprehensive
            range of services, all tailored to ensure the smooth and efficient
            movement of petroleum and chemical products through the global
            supply chain. Our facilities are designed to handle a wide range of
            petroleum products, including crude oil, jet fuel, diesel, gasoline,
            chemicals, and other bulk liquids.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.04}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-950/55 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan/35 hover:shadow-[0_20px_50px_rgba(45,212,191,0.12)]">
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyan/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-steel">
                    {service.copy}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
