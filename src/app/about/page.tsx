import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, mission, and leadership behind Res Logistics PTE Ltd — global energy logistics excellence.",
};

const values = [
  { title: "Safety First", copy: "Every transfer is governed by rigorous protocols and continuous monitoring." },
  { title: "Engineering Integrity", copy: "Infrastructure designed for decades of precise, reliable performance." },
  { title: "Operational Transparency", copy: "Clear custody, clear reporting, clear accountability." },
  { title: "Sustainable Progress", copy: "Efficiency and emissions reduction built into growth plans." },
];

const timeline = [
  { year: "1960s", event: "Foundations in regional liquid storage" },
  { year: "1980s", event: "Expansion into terminal berthing operations" },
  { year: "2000s", event: "Pipeline corridors and digital monitoring" },
  { year: "2010s", event: "Global shipping network integration" },
  { year: "Today", event: "Multi-continent energy logistics leadership" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Res Logistics"
        title="Decades of moving the world’s energy"
        description="We combine industrial scale with meticulous operational craft — building trust across terminals, pipelines, and oceans."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Mission</h2>
            <p className="mt-4 text-steel-light leading-relaxed">
              Deliver safe, reliable, and intelligent energy logistics that power industries
              and communities worldwide — without compromise on integrity or stewardship.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Vision</h2>
            <p className="mt-4 text-steel-light leading-relaxed">
              To be the defining digital and physical presence of world-class energy logistics —
              where engineering excellence and sustainability set the industry standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-midnight py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Core Values</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-6">
                  <h3 className="font-display text-xl font-semibold text-cyan">{v.title}</h3>
                  <p className="mt-2 text-sm text-steel-light">{v.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis">
          <Reveal>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Growth Timeline
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-8 border-l border-cyan/30 pl-8">
            {timeline.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.05}>
                <li className="relative">
                  <span className="absolute top-1.5 -left-[2.35rem] h-3 w-3 rounded-full bg-cyan" />
                  <p className="text-sm font-semibold tracking-wide text-cyan">{item.year}</p>
                  <p className="mt-1 text-lg text-white">{item.event}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy-900 py-24">
        <div className="section-pad container-regis grid gap-10 sm:grid-cols-3">
          <AnimatedCounter value={60} suffix="+" label="Years of Expertise" />
          <AnimatedCounter value={12} suffix="+" label="Strategic Terminals" />
          <AnimatedCounter value={40} suffix="+" label="Countries Served" />
        </div>
      </section>
    </>
  );
}
