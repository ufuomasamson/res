"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

const MAP_W = 1000;
const MAP_H = 500;

type Hub = {
  id: string;
  name: string;
  region: string;
  lon: number;
  lat: number;
  detail: string;
  metric: string;
};

type RouteDef = {
  id: string;
  from: string;
  to: string;
  color: string;
  duration: number;
  bend?: number;
};

const HUB_DEFS: Hub[] = [
  {
    id: "us",
    name: "Americas",
    region: "Gulf Coast",
    lon: -95.37,
    lat: 29.76,
    detail: "Gulf Coast tank farms and outbound energy logistics.",
    metric: "4 terminals",
  },
  {
    id: "eu",
    name: "Europe",
    region: "Northwest Hub",
    lon: 4.48,
    lat: 51.92,
    detail: "Northwest Europe distribution and blending corridors.",
    metric: "3 gateways",
  },
  {
    id: "af",
    name: "West Africa",
    region: "Coastal Belt",
    lon: 3.38,
    lat: 6.52,
    detail: "Coastal storage linked to Atlantic shipping lanes.",
    metric: "2 ports",
  },
  {
    id: "me",
    name: "Middle East",
    region: "Energy Corridor",
    lon: 55.27,
    lat: 25.2,
    detail: "Strategic petroleum corridors and pipeline feeders.",
    metric: "5 corridors",
  },
  {
    id: "sg",
    name: "Singapore",
    region: "Regional HQ",
    lon: 103.82,
    lat: 1.35,
    detail: "Regional headquarters and deepwater terminal operations.",
    metric: "HQ · Terminal",
  },
  {
    id: "au",
    name: "Asia Pacific",
    region: "Ocean Routes",
    lon: 151.21,
    lat: -33.87,
    detail: "Asia–Pacific ocean connectivity and regional distribution.",
    metric: "6 routes",
  },
];

const ROUTE_DEFS: RouteDef[] = [
  { id: "r1", from: "us", to: "eu", color: "#38bdf8", duration: 7, bend: -0.28 },
  { id: "r2", from: "eu", to: "me", color: "#2dd4bf", duration: 5.5, bend: 0.18 },
  { id: "r3", from: "me", to: "sg", color: "#2dd4bf", duration: 6, bend: 0.22 },
  { id: "r4", from: "sg", to: "au", color: "#34d399", duration: 4.5, bend: 0.2 },
  { id: "r5", from: "us", to: "af", color: "#38bdf8", duration: 8, bend: 0.25 },
  { id: "r6", from: "af", to: "me", color: "#f97316", duration: 5, bend: -0.15 },
  { id: "r7", from: "eu", to: "sg", color: "#38bdf8", duration: 9, bend: -0.32 },
  { id: "r8", from: "us", to: "sg", color: "#2dd4bf", duration: 11, bend: -0.42 },
];

function project(lon: number, lat: number) {
  return {
    x: ((lon + 180) / 360) * MAP_W,
    y: ((90 - lat) / 180) * MAP_H,
  };
}

function curvePath(
  a: { x: number; y: number },
  b: { x: number; y: number },
  bend = 0.22,
) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const cx = mx - dy * bend;
  const cy = my + dx * bend * 0.45;
  return `M${a.x.toFixed(1)} ${a.y.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

function MovingVessel({
  pathD,
  color,
  duration,
  delay,
  reduced,
}: {
  pathD: string;
  color: string;
  duration: number;
  delay: number;
  reduced: boolean | null;
}) {
  if (reduced) return null;

  return (
    <g>
      <circle r="7" fill={color} opacity="0.22">
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={pathD}
        />
      </circle>
      <circle r="3.2" fill={color} opacity="0.95">
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={pathD}
        />
      </circle>
      <circle r="1.2" fill="#ffffff" opacity="0.95">
        <animateMotion
          dur={`${duration}s`}
          begin={`${delay}s`}
          repeatCount="indefinite"
          path={pathD}
        />
      </circle>
    </g>
  );
}

export function GlobalNetwork() {
  const reduce = useReducedMotion();
  const [activeId, setActiveId] = useState("sg");
  const [paused, setPaused] = useState(false);

  const hubs = useMemo(
    () =>
      HUB_DEFS.map((hub) => {
        const { x, y } = project(hub.lon, hub.lat);
        return { ...hub, x, y };
      }),
    [],
  );

  const routes = useMemo(() => {
    const byId = Object.fromEntries(hubs.map((h) => [h.id, h]));
    return ROUTE_DEFS.map((route) => {
      const from = byId[route.from];
      const to = byId[route.to];
      return {
        ...route,
        d: curvePath(from, to, route.bend),
      };
    });
  }, [hubs]);

  const active = useMemo(
    () => hubs.find((h) => h.id === activeId) ?? hubs[4],
    [activeId, hubs],
  );

  useEffect(() => {
    if (paused || reduce) return;
    const timer = window.setInterval(() => {
      setActiveId((prev) => {
        const idx = hubs.findIndex((h) => h.id === prev);
        return hubs[(idx + 1) % hubs.length].id;
      });
    }, 3200);
    return () => window.clearInterval(timer);
  }, [paused, reduce, hubs]);

  const relatedRouteIds = useMemo(() => {
    return new Set(
      routes
        .filter((r) => r.from === activeId || r.to === activeId)
        .map((r) => r.id),
    );
  }, [activeId, routes]);

  const selectHub = (id: string) => {
    setPaused(true);
    setActiveId(id);
  };

  return (
    <section className="relative overflow-hidden bg-midnight py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ocean/20 blur-[120px]" />
      </div>

      <div className="section-pad container-regis relative">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.22em] text-cyan uppercase">
              Global Network
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white md:text-5xl">
              Connected corridors across the energy world
            </h2>
            <p className="mt-4 max-w-xl text-steel-light">
              Shipping lanes light up across a live world map. Hover a port to
              trace routes, vessel traffic, and regional presence.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {hubs.map((hub) => (
                <button
                  key={hub.id}
                  type="button"
                  onMouseEnter={() => selectHub(hub.id)}
                  onFocus={() => selectHub(hub.id)}
                  onClick={() => selectHub(hub.id)}
                  className={`cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300 ${
                    activeId === hub.id
                      ? "bg-cyan text-navy-950 shadow-[0_0_24px_rgba(45,212,191,0.35)]"
                      : "border border-white/10 bg-white/5 text-steel-light hover:border-cyan/40 hover:text-white"
                  }`}
                >
                  {hub.name}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-10">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-950 shadow-[0_40px_100px_rgba(0,0,0,0.45)]"
            onMouseLeave={() => setPaused(false)}
          >
            <div className="grid lg:grid-cols-[1fr_300px]">
              <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#020814]">
                {/* Real equirectangular Earth (night lights) */}
                <Image
                  src="/maps/earth-night.jpg"
                  alt="World map showing Earth at night"
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-center"
                  priority={false}
                />

                {/* Soft topology layer for land silhouette */}
                <Image
                  src="/maps/earth-topo.png"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 900px"
                  className="object-cover object-center opacity-[0.28] mix-blend-screen"
                  aria-hidden="true"
                />

                {/* Brand grade so routes stay readable */}
                <div className="pointer-events-none absolute inset-0 bg-[#031019]/45" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy-950/50 via-transparent to-navy-950/55" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(2,6,23,0.55)_100%)]" />

                {/* Animation overlay aligned to geographic projection */}
                <svg
                  viewBox={`0 0 ${MAP_W} ${MAP_H}`}
                  className="absolute inset-0 h-full w-full"
                  role="img"
                  aria-label="Interactive global shipping network over world map"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {routes.map((route) => {
                    const lit = relatedRouteIds.has(route.id);
                    return (
                      <g key={route.id} filter={lit ? "url(#route-glow)" : undefined}>
                        <path
                          d={route.d}
                          fill="none"
                          stroke={route.color}
                          strokeWidth={lit ? 2.6 : 1.3}
                          strokeLinecap="round"
                          opacity={lit ? 0.95 : 0.28}
                          style={{
                            transition: "opacity 0.4s ease, stroke-width 0.4s ease",
                          }}
                        />
                        <path
                          d={route.d}
                          fill="none"
                          stroke={route.color}
                          strokeWidth={lit ? 2 : 1}
                          strokeLinecap="round"
                          strokeDasharray="7 11"
                          opacity={lit ? 0.95 : 0.2}
                          className={
                            reduce
                              ? undefined
                              : "animate-[route-flow_2.2s_linear_infinite]"
                          }
                          style={{ transition: "opacity 0.4s ease" }}
                        />
                        <MovingVessel
                          pathD={route.d}
                          color={route.color}
                          duration={route.duration}
                          delay={Number(route.id.replace("r", "")) * 0.35}
                          reduced={reduce}
                        />
                      </g>
                    );
                  })}

                  {hubs.map((hub) => {
                    const isActive = hub.id === activeId;
                    return (
                      <g
                        key={hub.id}
                        className="cursor-pointer"
                        onMouseEnter={() => selectHub(hub.id)}
                        onFocus={() => selectHub(hub.id)}
                        tabIndex={0}
                        role="button"
                        aria-label={`${hub.name}: ${hub.detail}`}
                        aria-pressed={isActive}
                      >
                        <circle cx={hub.x} cy={hub.y} r="24" fill="transparent" />

                        {!reduce && (
                          <>
                            <circle
                              cx={hub.x}
                              cy={hub.y}
                              r="16"
                              fill="none"
                              stroke="#2dd4bf"
                              strokeWidth="1.2"
                              opacity={isActive ? 0.65 : 0.2}
                            >
                              {isActive && (
                                <animate
                                  attributeName="r"
                                  values="8;24;8"
                                  dur="2.4s"
                                  repeatCount="indefinite"
                                />
                              )}
                              {isActive && (
                                <animate
                                  attributeName="opacity"
                                  values="0.7;0;0.7"
                                  dur="2.4s"
                                  repeatCount="indefinite"
                                />
                              )}
                            </circle>
                            <circle
                              cx={hub.x}
                              cy={hub.y}
                              r="10"
                              fill="none"
                              stroke="#38bdf8"
                              strokeWidth="1"
                              opacity={isActive ? 0.45 : 0.12}
                            >
                              {isActive && (
                                <animate
                                  attributeName="r"
                                  values="5;18;5"
                                  dur="2.4s"
                                  begin="0.55s"
                                  repeatCount="indefinite"
                                />
                              )}
                            </circle>
                          </>
                        )}

                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r={isActive ? 7 : 5}
                          fill={isActive ? "#2dd4bf" : "#38bdf8"}
                          stroke="#031019"
                          strokeWidth="2"
                        />
                        <circle cx={hub.x} cy={hub.y} r="1.8" fill="#ffffff" />

                        <text
                          x={hub.x}
                          y={hub.y - 14}
                          textAnchor="middle"
                          fill={isActive ? "#ffffff" : "#c5d0de"}
                          fontSize="11"
                          fontFamily="var(--font-dm), sans-serif"
                          style={{
                            paintOrder: "stroke",
                            stroke: "rgba(3,16,25,0.85)",
                            strokeWidth: 3,
                          }}
                        >
                          {hub.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                <div className="absolute bottom-3 left-3 flex flex-wrap gap-3 rounded-xl border border-white/10 bg-navy-950/75 px-3 py-2 text-[10px] tracking-wide text-steel uppercase backdrop-blur-md sm:bottom-4 sm:left-4 sm:text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-3 rounded-full bg-cyan" /> Live route
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-electric" /> Port hub
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" /> Vessel
                  </span>
                </div>
              </div>

              <aside className="border-t border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm lg:border-t-0 lg:border-l">
                <p className="text-[10px] font-semibold tracking-[0.2em] text-cyan uppercase">
                  Active corridor
                </p>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-4"
                  >
                    <h3 className="font-display text-2xl font-bold text-white">
                      {active.name}
                    </h3>
                    <p className="mt-1 text-sm text-electric">{active.region}</p>
                    <p className="mt-4 text-sm leading-relaxed text-steel-light">
                      {active.detail}
                    </p>
                    <div className="mt-6 rounded-2xl border border-cyan/20 bg-cyan/5 px-4 py-3">
                      <p className="text-[10px] tracking-[0.16em] text-steel uppercase">
                        Network footprint
                      </p>
                      <p className="mt-1 font-display text-lg font-semibold text-white">
                        {active.metric}
                      </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                      {routes
                        .filter((r) => r.from === active.id || r.to === active.id)
                        .map((r) => {
                          const otherId = r.from === active.id ? r.to : r.from;
                          const other = hubs.find((h) => h.id === otherId);
                          return (
                            <li
                              key={r.id}
                              className="flex items-center gap-2 text-xs text-steel-light"
                            >
                              <span
                                className="h-1.5 w-1.5 rounded-full"
                                style={{ background: r.color }}
                              />
                              Link to {other?.name}
                            </li>
                          );
                        })}
                    </ul>
                  </motion.div>
                </AnimatePresence>

                <p className="mt-8 text-[11px] text-steel">
                  Auto-cycles hubs — hover to explore a corridor.
                </p>
              </aside>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
