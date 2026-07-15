"use client";

export function GlobeFooter() {
  return (
    <div className="relative h-28 w-28" aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        <defs>
          <radialGradient id="globeGlow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="60" cy="60" r="48" fill="url(#globeGlow)" />
        <circle
          cx="60"
          cy="60"
          r="40"
          fill="none"
          stroke="rgba(45,212,191,0.35)"
          strokeWidth="1"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="18"
          ry="40"
          fill="none"
          stroke="rgba(56,189,248,0.25)"
          strokeWidth="1"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="40"
          ry="14"
          fill="none"
          stroke="rgba(45,212,191,0.25)"
          strokeWidth="1"
        />
        <path
          d="M20 55 Q60 35 100 58"
          fill="none"
          stroke="#2dd4bf"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          className="animate-[route-dash_2s_linear_infinite]"
          opacity="0.7"
        />
        <path
          d="M28 78 Q60 95 92 70"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1"
          strokeDasharray="3 5"
          className="animate-[route-dash_3s_linear_infinite]"
          opacity="0.5"
        />
        <circle cx="32" cy="52" r="2.5" fill="#2dd4bf" className="animate-pulse-glow" />
        <circle cx="88" cy="60" r="2.5" fill="#38bdf8" className="animate-pulse-glow" />
        <circle cx="62" cy="86" r="2" fill="#34d399" className="animate-pulse-glow" />
      </svg>
    </div>
  );
}
