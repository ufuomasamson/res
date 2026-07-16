import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      <div className="section-pad container-regis grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
            <Image
              src="/img/company-overview.png"
              alt="Res Logistics petroleum storage and terminal operations"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Company Overview
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Built for scale. Operated with precision.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
              Res Logistics PTE Ltd designs and operates critical liquid storage and
              energy movement infrastructure. From tank farms to ocean lanes, every
              process is engineered for safety, integrity, and continuous uptime.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-12 grid grid-cols-2 gap-8">
            <AnimatedCounter value={60} suffix="+" label="Years Experience" />
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                <span className="text-cyan">Millions</span>
              </p>
              <p className="mt-2 text-sm tracking-wide text-steel uppercase md:text-base">
                Barrels Stored
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                <span className="text-cyan">24</span>/7
              </p>
              <p className="mt-2 text-sm tracking-wide text-steel uppercase md:text-base">
                Operations
              </p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                <span className="text-cyan">Global</span>
              </p>
              <p className="mt-2 text-sm tracking-wide text-steel uppercase md:text-base">
                Distribution
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
