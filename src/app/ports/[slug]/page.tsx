import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
      {/* Text-only hero — no background image */}
      <section className="bg-navy-950 pb-12 pt-10 md:pb-16 md:pt-12">
        <div className="section-pad container-regis mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-cyan uppercase">
              {port.region} Terminal
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {port.label}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-steel-light sm:text-base md:text-lg">
              {port.brief}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button href="/contact">Contact Operations</Button>
              <Button href="/#terminal-network" variant="secondary">
                Back to Network Map
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Port image — centered below hero */}
      <section className="bg-navy-950 pb-16 md:pb-20">
        <div className="section-pad container-regis">
          <Reveal>
            <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="relative aspect-[16/10] w-full bg-midnight">
                <Image
                  src={port.image}
                  alt={`${port.name} terminal`}
                  fill
                  unoptimized
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-midnight py-20 md:py-24">
        <div className="section-pad container-regis mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Terminal overview
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-light md:text-lg">
              {port.content}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contact">Speak with Our Team</Button>
              <Button href="/terminal-operations" variant="secondary">
                Terminal Operations
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/5 bg-navy-950 py-16">
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
