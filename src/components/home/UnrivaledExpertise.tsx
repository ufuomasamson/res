import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export function UnrivaledExpertise() {
  return (
    <section className="relative overflow-hidden bg-midnight py-24 md:py-32">
      <div className="section-pad container-regis grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 lg:order-1">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Our Advantage
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-5xl">
              Unrivaled Expertise in Petroleum Logistics
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
              What sets Res Logistics PTE LTD. apart is our deep expertise in
              the logistics and transportation of petroleum products. With
              decades of experience, we have mastered the complexities of
              international energy supply chains, ensuring the secure and timely
              delivery of products to refineries, distributors, and end-users
              across Europe and beyond. Our commitment to customer satisfaction,
              operational excellence, and industry leadership has allowed us to
              build strong, long-lasting relationships with our clients, making
              us the go-to partner for petroleum storage and logistics
              solutions.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="relative aspect-[16/11] overflow-hidden rounded-3xl">
            <Image
              src="/img/company-overview.png"
              alt="Liquid storage tanks at an industrial petroleum facility"
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
