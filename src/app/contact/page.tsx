"use client";

import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, MapPin, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Res Logistics"
        description="Terminal coordination, commercial inquiries, and emergency response — we’re ready."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=80"
      />

      <section className="bg-navy-950 py-24">
        <div className="section-pad container-regis grid gap-10 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {[
              {
                icon: MapPin,
                title: "Headquarters",
                copy: "Singapore · Global operations across energy corridors",
              },
              {
                icon: Phone,
                title: "Emergency Desk",
                copy: "+65 0000 0000 · 24/7 response line",
              },
              {
                icon: Clock,
                title: "Business Hours",
                copy: "Mon–Fri 08:00–18:00 SGT · Ops continuous",
              },
            ].map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  <div className="rounded-2xl border border-white/10 bg-navy-900/40 p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{card.title}</p>
                        <p className="mt-1 text-sm text-steel-light">{card.copy}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}

            <Reveal delay={0.2}>
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80')",
                  }}
                  role="img"
                  aria-label="Office location map visualization"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-3xl border border-white/10 bg-navy-900/40 p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center py-16 text-center">
                  <CheckCircle2 className="h-14 w-14 text-cyan" />
                  <h2 className="mt-4 font-display text-2xl font-bold text-white">
                    Message received
                  </h2>
                  <p className="mt-2 max-w-md text-steel-light">
                    Thank you. A Res Logistics specialist will respond shortly.
                  </p>
                  <button
                    type="button"
                    className="mt-8 cursor-pointer text-sm text-cyan hover:underline"
                    onClick={() => setSent(false)}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-white">
                    Send an inquiry
                  </h2>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm text-steel-light">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan/50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm text-steel-light">
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="company" className="text-sm text-steel-light">
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm text-steel-light">
                      How can we help?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="mt-1.5 w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-cyan/50"
                    />
                  </div>
                  <Button type="submit">Submit Inquiry</Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
