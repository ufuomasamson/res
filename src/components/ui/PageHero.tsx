import { Button } from "@/components/ui/Button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
  ctaHref?: string;
  ctaLabel?: string;
  tone?: "industrial" | "nature";
  centered?: boolean;
  overlayStrength?: "default" | "strong" | "heavy";
};

const overlayPresets = {
  industrial: {
    default: {
      solid: "bg-navy-950/35",
      horizontal: "bg-gradient-to-r from-navy-950/75 via-navy-950/55 to-navy-900/35",
      vertical: "bg-gradient-to-t from-navy-950/75 via-transparent to-navy-950/25",
    },
    strong: {
      solid: "bg-navy-950/50",
      horizontal: "bg-gradient-to-r from-navy-950/85 via-navy-950/65 to-navy-900/45",
      vertical: "bg-gradient-to-t from-navy-950/85 via-navy-950/30 to-navy-950/40",
    },
    heavy: {
      solid: "bg-navy-950/60",
      horizontal: "bg-gradient-to-r from-navy-950/90 via-navy-950/75 to-navy-900/55",
      vertical: "bg-gradient-to-t from-navy-950/90 via-navy-950/40 to-navy-950/50",
    },
  },
  nature: {
    default: {
      solid: "bg-[#071a14]/40",
      horizontal: "bg-gradient-to-r from-[#071a14]/75 via-[#0a2a22]/55 to-[#0c3328]/35",
      vertical: "bg-gradient-to-t from-[#071a14]/75 via-transparent to-[#071a14]/25",
    },
    strong: {
      solid: "bg-[#071a14]/55",
      horizontal: "bg-gradient-to-r from-[#071a14]/85 via-[#0a2a22]/65 to-[#0c3328]/45",
      vertical: "bg-gradient-to-t from-[#071a14]/85 via-[#071a14]/30 to-[#071a14]/40",
    },
    heavy: {
      solid: "bg-[#071a14]/65",
      horizontal: "bg-gradient-to-r from-[#071a14]/90 via-[#0a2a22]/75 to-[#0c3328]/55",
      vertical: "bg-gradient-to-t from-[#071a14]/90 via-[#071a14]/40 to-[#071a14]/50",
    },
  },
} as const;

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/img/company-overview.png",
  ctaHref,
  ctaLabel,
  tone = "industrial",
  centered = false,
  overlayStrength = "default",
}: PageHeroProps) {
  const overlay = overlayPresets[tone][overlayStrength];

  return (
    <section
      className={`relative flex min-h-[70vh] overflow-hidden pb-16 pt-10 md:min-h-[75vh] md:pb-0 md:pt-12 ${
        centered ? "items-center justify-center" : "items-end md:items-center"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div
          className="absolute inset-0 bg-navy-950 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
        />
        <div className={`absolute inset-0 ${overlay.solid}`} />
        <div className={`absolute inset-0 ${overlay.horizontal}`} />
        <div className={`absolute inset-0 ${overlay.vertical}`} />
      </div>

      <div
        className={`section-pad container-regis relative z-10 w-full ${
          centered ? "mx-auto max-w-3xl text-center" : ""
        }`}
      >
        <p
          className={`mb-4 text-xs font-semibold tracking-[0.28em] uppercase md:text-sm ${
            tone === "nature" ? "text-emerald" : "text-cyan"
          }`}
        >
          {eyebrow}
        </p>
        <h1
          className={`max-w-4xl font-display text-4xl font-bold tracking-tight text-white md:text-6xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {title}
        </h1>
        <p className={`mt-5 max-w-2xl text-lg text-steel-light ${centered ? "mx-auto" : ""}`}>
          {description}
        </p>
        {ctaHref && ctaLabel && (
          <div className={`mt-8 ${centered ? "flex justify-center" : ""}`}>
            <Button href={ctaHref}>{ctaLabel}</Button>
          </div>
        )}
      </div>
    </section>
  );
}
