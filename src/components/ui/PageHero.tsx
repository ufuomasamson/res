import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
  tone?: "industrial" | "nature";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80",
  ctaHref,
  ctaLabel,
  tone = "industrial",
}: PageHeroProps) {
  const overlay =
    tone === "nature"
      ? "bg-gradient-to-r from-[#071a14]/90 via-[#0a2a22]/75 to-[#0c3328]/40"
      : "bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/50";

  return (
    <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden pb-16 pt-32 md:min-h-[75vh] md:items-center md:pb-0">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className={`absolute inset-0 ${overlay}`} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
      </div>
      <div className="section-pad container-regis relative w-full">
        <p
          className={`mb-4 text-xs font-semibold tracking-[0.28em] uppercase md:text-sm ${
            tone === "nature" ? "text-emerald" : "text-cyan"
          }`}
        >
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-steel-light">{description}</p>
        {ctaHref && ctaLabel && (
          <div className="mt-8">
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
