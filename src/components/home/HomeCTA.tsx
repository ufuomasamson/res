import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-navy-950 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/company-overview.png')" }}
        />
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-navy-950/55 to-navy-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/30" />
      </div>

      <div className="section-pad container-regis relative z-10">
        <Reveal>
          <h2 className="max-w-3xl font-display text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Ready to move energy with a world-class partner?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-steel-light">
            Speak with our terminal and logistics teams about storage, pipelines, and global shipping.
          </p>
          <div className="mt-10">
            <Button href="/contact">Contact Us</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
