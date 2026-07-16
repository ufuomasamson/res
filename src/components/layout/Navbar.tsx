"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Droplets, Waypoints, Ship } from "lucide-react";

const services = [
  {
    href: "/services/liquid-storage",
    title: "Liquid Storage & Handling",
    description: "Tank farms with precision monitoring and secure custody transfer.",
    icon: Droplets,
  },
  {
    href: "/services/pipeline-transport",
    title: "Pipeline Transport",
    description: "Engineered networks moving energy with continuous integrity.",
    icon: Waypoints,
  },
  {
    href: "/services/logistics-shipping",
    title: "Logistics & Shipping",
    description: "Global vessel, route, and multimodal supply chain solutions.",
    icon: Ship,
  },
];

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services", dropdown: true },
  { href: "/sustainability", label: "Sustainability" },
  { href: "/terminal-operations", label: "Terminal Operations" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-2.5 shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-pad container-regis flex items-center justify-between gap-6">
        <Link
          href="/"
          className="group relative flex shrink-0 items-center"
          aria-label="Res Logistics home"
        >
          <Image
            src="/img/regis-logo-clear.png"
            alt="Res Logistics PTE. LTD"
            width={220}
            height={56}
            priority
            className={`h-9 w-auto object-contain transition-all duration-500 md:h-11 ${
              scrolled ? "scale-95 opacity-95" : "scale-100"
            } group-hover:opacity-100`}
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {links.map((link) =>
            link.dropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`flex cursor-pointer items-center gap-1 rounded-lg px-3.5 py-2 text-sm transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-cyan"
                      : "text-steel-light hover:text-white"
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 w-[420px] -translate-x-1/2 pt-3"
                    >
                      <div className="glass overflow-hidden rounded-2xl p-2 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                        {services.map((service) => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.href}
                              href={service.href}
                              className="flex gap-3 rounded-xl p-3 transition-colors hover:bg-white/5"
                            >
                              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                                <Icon className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block text-sm font-semibold text-white">
                                  {service.title}
                                </span>
                                <span className="mt-0.5 block text-xs leading-relaxed text-steel">
                                  {service.description}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  pathname === link.href
                    ? "text-cyan"
                    : "text-steel-light hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex cursor-pointer items-center rounded-xl bg-cyan px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-electric"
          >
            Talk to Us
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-white/5 lg:hidden"
          >
            <nav className="section-pad flex flex-col gap-1 py-4" aria-label="Mobile">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      type="button"
                      className="flex w-full cursor-pointer items-center justify-between rounded-xl px-4 py-3 text-left text-base text-white"
                      onClick={() => setMobileServices((v) => !v)}
                      aria-expanded={mobileServices}
                    >
                      Services
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileServices && (
                      <div className="mb-2 ml-2 space-y-1 border-l border-cyan/20 pl-3">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-steel-light hover:text-cyan"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-xl px-4 py-3 text-base ${
                      pathname === link.href ? "text-cyan" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
