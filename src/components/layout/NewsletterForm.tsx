"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-4 flex flex-col gap-2 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@company.com"
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-steel focus:border-cyan/50"
      />
      <button
        type="submit"
        className="cursor-pointer rounded-xl bg-cyan px-5 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-electric"
      >
        Join
      </button>
    </form>
  );
}
