import Image from "next/image";
import Link from "next/link";
import { GlobeFooter } from "@/components/layout/GlobeFooter";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/terminal-operations", label: "Terminal Operations" },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/liquid-storage", label: "Liquid Storage" },
  { href: "/services/pipeline-transport", label: "Pipeline Transport" },
  { href: "/services/logistics-shipping", label: "Logistics & Shipping" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-navy-950">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-ocean/30 blur-[100px]" />
        <div className="absolute bottom-0 right-[10%] h-48 w-48 rounded-full bg-cyan/10 blur-[80px]" />
      </div>

      <div className="section-pad container-regis relative grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block" aria-label="Regis Global Logistics home">
            <Image
              src="/img/regis-logo-clear.png"
              alt="Regis Global Logistics PTE. LTD"
              width={240}
              height={72}
              className="h-14 w-auto object-contain"
            />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-steel-light">
            Engineering excellence across petroleum storage, terminal operations, and
            global energy logistics — delivering trust at every mile.
          </p>
          <div className="mt-8">
            <GlobeFooter />
          </div>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-steel-light transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-steel-light transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
            Newsletter
          </p>
          <p className="mt-4 text-sm text-steel-light">
            Insights on energy logistics, safety, and sustainability.
          </p>
          <NewsletterForm />
          <p className="mt-6 text-sm text-steel">
            Emergency:{" "}
            <a href="tel:+6500000000" className="text-energy hover:underline">
              +65 0000 0000
            </a>
          </p>
        </div>
      </div>

      <div className="section-pad container-regis relative flex flex-col gap-3 border-t border-white/5 py-6 text-xs text-steel sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Regis Logistics PTE Ltd. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/contact" className="hover:text-white">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-white">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
