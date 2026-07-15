import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";

const variants: Record<Variant, string> = {
  primary:
    "bg-cyan text-navy-950 hover:bg-electric shadow-[0_0_32px_rgba(45,212,191,0.25)] hover:shadow-[0_0_40px_rgba(56,189,248,0.35)]",
  secondary:
    "bg-white/10 text-white hover:bg-white/18 border border-white/15 backdrop-blur-sm",
  ghost: "bg-transparent text-steel-light hover:text-white hover:bg-white/5",
  outline:
    "border border-cyan/50 text-cyan hover:bg-cyan/10 hover:border-cyan",
};

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  ariaLabel?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out active:scale-[0.98] cursor-pointer ${variants[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
