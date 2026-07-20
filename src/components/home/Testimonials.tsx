"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const testimonial = {
  quote:
    "Their terminal controls and custody transfer systems set a new bar for transparency in liquid storage.",
  name: "Marcus Chen",
  role: "Director of Operations, Pacific Fuels",
  logo: "Pacific Fuels",
};

const partnerImages = [
  { src: "/img/trusted-1.jpg", alt: "Trusted partner" },
  { src: "/img/trusted-2.jpg", alt: "Trusted partner" },
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
          <Reveal delay={0}>
            <div className="flex h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[280px]">
                <Image
                  src={partnerImages[0].src}
                  alt={partnerImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <blockquote className="flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/40 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
              <p className="text-sm tracking-[0.16em] text-cyan uppercase">{testimonial.logo}</p>
              <p className="mt-5 flex-1 text-base leading-relaxed text-steel-light">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-0.5 text-sm text-steel">{testimonial.role}</p>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex h-full overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40 shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[4/3] w-full md:aspect-auto md:min-h-[280px]">
                <Image
                  src={partnerImages[1].src}
                  alt={partnerImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
