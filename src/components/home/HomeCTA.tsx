import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function HomeCTA() {
  return (
    <section className="relative isolate overflow-hidden py-28 md:py-36">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-navy-950/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />

      <div className="section-pad container-regis relative">
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
