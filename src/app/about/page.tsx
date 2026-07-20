import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "With years of experience, Res Logistics PTE Ltd is a trusted partner in bulk liquid storage, logistics, and sustainable energy supply chains.",
};

const values = [
  {
    title: "Customer-Centric Approach",
    copy: "At Res Logistics, our clients are at the heart of everything we do. We take pride in delivering exceptional services tailored to meet their unique requirements. Through transparency, responsiveness, and a solutions-oriented approach, we work hand-in-hand with our clients to ensure success in every project.",
    image: "/img/about-values-customer.jpg",
    alt: "Two professionals reviewing plans on a tablet at an industrial site",
  },
  {
    title: "Safety First",
    copy: "Safety is paramount in all our operations. We adhere to the strictest industry regulations and implement rigorous safety protocols to protect our employees, clients, and the communities in which we operate. From routine safety drills to the maintenance of our facilities, we are committed to fostering a culture of safety and accountability.",
    image: "/img/about-values-safety.jpg",
    alt: "Industrial workers in safety helmets collaborating on site",
  },
  {
    title: "Sustainability",
    copy: "We are fully dedicated to minimizing the environmental footprint of our operations. From implementing energy-efficient technologies to reducing emissions, sustainability is a core value that shapes our decisions. Our goal is to operate in an eco-friendly manner, supporting the global shift toward greener energy solutions.",
    image: "/img/about-values-3.jpg",
    alt: "Clean energy landscape representing sustainable operations",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — centered */}
      <section className="relative isolate flex min-h-[72vh] items-center justify-center overflow-hidden pb-20 pt-10 md:min-h-[78vh] md:pt-12">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/about-hero-alt.jpg"
            alt="Workers with safety helmets collaborating on site"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-navy-950/50" />
        </div>

        <div className="section-pad container-regis relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-cyan uppercase">
              About Us
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Trusted in Bulk Liquid Storage
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-steel-light sm:text-base md:text-lg">
              With years of experience, we have grown into one of
              Europe’s most trusted names in bulk liquid storage, known for our
              commitment to innovation, safety, and sustainability.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Story — two columns */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="section-pad container-regis grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Our Story
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              A Legacy of Excellence
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-light md:text-base">
              Established with the goal of offering reliable and safe storage
              solutions, Res Logistics PTE Ltd began its operations in the
              bustling port regions of Singapore. Over the years, we
              expanded our infrastructure and services, leveraging our strategic
              location at Asia’s busiest ports to become a premier player in
              the global energy supply chain. Our growth is driven by our
              unwavering dedication to customer satisfaction, cutting-edge
              technology, and a proactive approach to adapting to the evolving
              needs of the energy and logistics sectors.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl">
              <Image
                src="/img/abt-hero.png"
                alt="Res Logistics terminal operations and cargo handling"
                fill
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Who We Are Today — centered */}
      <section className="bg-midnight py-20 md:py-28">
        <div className="section-pad container-regis mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Who We Are Today
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Modern. Agile. Partner-focused.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-light md:text-base">
              Today, Res Logistics PTE Ltd stands as a modern, agile company
              with a forward-thinking approach to logistics and storage
              management. Our highly skilled team of engineers, logisticians,
              and industry experts ensure that we maintain the highest
              operational standards across all our services. We pride ourselves
              on being more than just a storage and logistics company; we are a
              trusted partner to our clients, working collaboratively to deliver
              customized solutions that meet their specific business needs.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel-light md:text-base">
              Our company is recognized for its commitment to innovation,
              constantly upgrading our facilities with the latest technologies
              in tank storage, pipeline transport, and chemical blending. We
              invest heavily in research and development to ensure that our
              operations remain efficient, cost-effective, and environmentally
              responsible.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Vision — centered */}
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/10 blur-[100px]" />
        </div>
        <div className="section-pad container-regis relative mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Our Vision
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Pioneering the Future of Energy Logistics
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-light md:text-base">
              At Res Logistics PTE Ltd, our vision is to continue leading the
              energy and logistics sector by offering innovative and sustainable
              solutions that drive the future of energy. We envision a world
              where petroleum and chemical products are transported and stored
              in ways that minimize environmental impact while maximizing
              efficiency and safety.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-steel-light md:text-base">
              Our mission is to constantly evolve in order to meet the dynamic
              needs of the industry, supporting our clients as they navigate an
              increasingly complex energy landscape. Whether through expanding
              our storage capabilities, adopting greener technologies, or
              optimizing our logistics network, we are committed to maintaining
              our position at the cutting edge of industry innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values — three columns */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="section-pad container-regis">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Our Values
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
              Driving Excellence and Integrity
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40">
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={value.image}
                      alt={value.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-steel-light">
                      {value.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
