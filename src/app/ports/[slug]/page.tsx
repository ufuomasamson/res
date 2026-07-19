import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PORTS, getPortBySlug } from "@/data/ports";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return PORTS.map((port) => ({ slug: port.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const port = getPortBySlug(slug);
  if (!port) return { title: "Terminal" };
  return {
    title: port.label,
    description: port.brief,
    robots: { index: false, follow: false },
  };
}

export default async function PortPage({ params }: Props) {
  const { slug } = await params;
  const port = getPortBySlug(slug);
  if (!port) notFound();

  const others = PORTS.filter((p) => p.id !== port.id);

  return (
    <>
      <PageHero
        eyebrow={`${port.region} Terminal`}
        title={port.label}
        description={port.brief}
        image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=2400&q=80"
        ctaHref="/contact"
        ctaLabel="Contact Operations"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Terminal overview
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
              {port.content}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Speak with Our Team</Button>
              <Button href="/#terminal-network" variant="secondary">
                Back to Network Map
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 bg-midnight py-16">
        <div className="section-pad container-regis">
          <p className="text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
            Other Terminals
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/ports/${p.slug}`}
                  className="block rounded-xl border border-white/10 bg-navy-900/40 px-4 py-3 text-sm text-steel-light transition-colors hover:border-cyan/40 hover:text-white"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
