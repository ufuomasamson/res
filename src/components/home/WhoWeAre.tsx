import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      <div className="section-pad container-regis grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/6]">
            <Image
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80"
              alt="Petroleum terminal workers wearing safety helmets"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Who We Are
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Industry Expertise and Heritage.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
              With many years of industry experience, Res Logistics PTE LTD has
              an unparalleled understanding of the petroleum and energy markets.
              Since our inception in 1964, we have grown and adapted to the
              rapidly changing landscape, continually refining our services and
              technologies to remain at the forefront of the industry. Our
              longevity is a testament to our reliability, efficiency, and
              commitment to quality service.
            </p>
            <div className="mt-8">
              <Button href="/about">Learn More</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
