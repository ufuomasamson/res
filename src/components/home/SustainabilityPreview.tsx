import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";

export function SustainabilityPreview() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy-950 via-[#0a2a22] to-[#0c3328] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute top-20 left-[10%] h-40 w-40 rounded-full bg-emerald/20 blur-[80px]" />
        <div className="absolute right-[15%] bottom-10 h-56 w-56 rounded-full bg-cyan/10 blur-[100px]" />
        {/* Subtle leaf silhouettes */}
        <svg className="absolute top-16 right-[20%] h-24 w-24 text-emerald/30 animate-float" viewBox="0 0 64 64">
          <path
            d="M32 8 C48 20 52 40 32 56 C12 40 16 20 32 8 Z"
            fill="currentColor"
          />
        </svg>
        <svg className="absolute bottom-24 left-[18%] h-16 w-16 text-emerald/20 animate-float" style={{ animationDelay: "2s" }} viewBox="0 0 64 64">
          <path
            d="M32 10 C46 22 48 38 32 54 C16 38 18 22 32 10 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="section-pad container-regis relative">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.22em] text-emerald uppercase">
            Sustainability
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
            Industrial power. Environmental responsibility.
          </h2>
          <p className="mt-4 max-w-xl text-steel-light">
            We measure carbon intensity, energy efficiency, and safety outcomes with the same rigor as throughput.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="mt-14 grid gap-10 sm:grid-cols-3">
          <AnimatedCounter value={32} suffix="%" label="Carbon Intensity Reduction" />
          <AnimatedCounter value={48} suffix="%" label="Energy Efficiency Gains" />
          <AnimatedCounter value={99} suffix="%" label="Safety Compliance Score" />
        </Reveal>

        <Reveal delay={0.2} className="mt-12">
          <Button href="/sustainability" variant="outline" className="border-emerald/50 text-emerald hover:bg-emerald/10 hover:border-emerald">
            Explore Our Commitment
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
