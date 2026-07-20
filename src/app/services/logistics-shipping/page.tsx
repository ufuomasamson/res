import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Logistics & Shipping",
  description:
    "Global logistics and shipping solutions for petroleum products and chemicals from Res Logistics PTE Ltd.",
};

const grids = [
  {
    title: "Chemical Blending",
    copy: "We provide chemical blending services tailored to meet the specific needs of our clients. Whether you need customized fuel formulations or chemical additives blended to precise specifications, our blending operations are backed by sophisticated equipment and rigorous quality control measures.",
    image: "/img/logistics-grid-1.png",
  },
  {
    title: "Heating Services",
    copy: "Certain petroleum products, such as heavy fuel oils, require temperature-controlled storage to maintain their integrity. Our heating services ensure that these products are stored at optimal temperatures, preventing solidification or degradation.",
    image: "/img/logistics-grid-2.png",
  },
  {
    title: "Integrated Logistics Solutions",
    copy: "Our integrated logistics solutions cover every aspect of your product’s journey, from initial storage to final delivery. With comprehensive services that include road, rail, sea, and pipeline transportation, we ensure that your petroleum and chemical products move smoothly through the supply chain.",
    image: "/img/logistics-grid-3.png",
  },
  {
    title: "Warehousing",
    copy: "For clients requiring secure storage of packaged goods, our warehousing services offer safe and controlled environments for petroleum products and chemicals. Whether you need storage for barrels, drums, or smaller containers, we have the infrastructure to accommodate a wide range of needs.",
    image: "/img/logistics-grid-4.png",
  },
  {
    title: "Fuel Quality Testing",
    copy: "Ensuring the integrity of your products is essential. Our fuel quality testing services include comprehensive analysis of your petroleum and chemical products to ensure they meet industry standards. Our in-house labs use cutting-edge technology to conduct tests on fuel stability, emissions, and product composition.",
    image: "/img/logistics-grid-5.png",
  },
  {
    title: "Loading and Unloading",
    copy: "At Res Logistics PTE Ltd, our loading and unloading services are designed to handle petroleum products and chemicals with precision and care. We utilize advanced equipment and automated systems to ensure safe, efficient, and timely transfer of goods at our terminals.",
    image: "/img/logistics-grid-6.png",
  },
];

export default function LogisticsShippingPage() {
  return (
    <>
      {/* Centered hero — liquid tanks */}
      <section className="relative flex min-h-[68vh] items-center justify-center overflow-hidden pb-20 pt-10 md:min-h-[74vh] md:pt-12">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/img/company-overview.png"
            alt="Liquid storage tanks at an industrial facility"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-navy-950/78" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/98 via-navy-950/88 to-navy-900/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/55" />
        </div>

        <div className="section-pad container-regis relative z-10 mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Logistics and Shipping
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-steel-light sm:text-base md:text-lg">
              At Res Logistics PTE Ltd., our logistics solutions and shipping
              services are designed to support the seamless movement of
              petroleum products and chemicals across the globe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why Choose — two columns */}
      <section className="bg-navy-950 py-20 md:py-28">
        <div className="section-pad container-regis grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Why Choose Res Logistics PTE Ltd for Your Shipping and Logistics
              Needs?
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-sm leading-relaxed text-steel-light md:text-base">
              At Res Logistics PTE Ltd., we bring together decades of
              experience, advanced infrastructure, and a commitment to
              sustainability to provide world-class logistics and shipping
              solutions. Whether you’re looking to store bulk liquids, transport
              them via pipeline or ship them across continents, we have the
              expertise and resources to make it happen. Our team works closely
              with each client to develop customized solutions that fit their
              specific needs, ensuring efficiency, safety, and reliability in
              every aspect of our operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6 capability grids */}
      <section className="bg-midnight py-20 md:py-28">
        <div className="section-pad container-regis grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {grids.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-950/50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan/35">
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel-light">
                    {item.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Global Shipping Solutions */}
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="section-pad container-regis">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Global Shipping Solutions
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-steel-light md:text-base">
              At the heart of our logistics operations is a global shipping
              network designed to connect key energy markets. With strategic
              partnerships at major ports like Rotterdam, we ensure the seamless
              transport of products via sea, rail, and road, providing reliable
              and efficient delivery to any destination. Our port facilities are
              equipped with the latest technologies for fast loading and
              unloading, reducing downtime and ensuring that products reach
              their markets quickly.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.08}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-950/50 p-7 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-cyan">
                  Sea Freight Solutions
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-light md:text-base">
                  Sea transport is an essential component of our logistics
                  solutions, offering a cost-effective way to move large volumes
                  of petroleum products across the globe. Our fleet of vessels
                  is designed to handle bulk liquids safely, with a focus on
                  efficiency and environmental responsibility. From Europe to
                  Asia and North America, our global reach ensures that your
                  products are delivered on time, every time.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="h-full rounded-2xl border border-white/10 bg-navy-950/50 p-7 md:p-8">
                <h3 className="font-display text-2xl font-semibold text-cyan">
                  Road and Rail Transport
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-steel-light md:text-base">
                  For land-based transport, we offer both road and rail
                  solutions designed to move products quickly and safely. With
                  an extensive network of trucks and rail services, we can
                  provide customized logistics solutions that meet your specific
                  needs, whether you require short-haul or long-distance
                  transport.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
