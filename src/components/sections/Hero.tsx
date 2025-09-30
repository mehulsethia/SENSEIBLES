"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const SceneCanvas = dynamic(() => import("@/components/three/SceneCanvas"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/60">
      <span className="text-xs uppercase tracking-[0.4em] text-white/40">
        Initialising Canvas
      </span>
    </div>
  ),
});

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_45deg_at_70%_30%,rgba(14,165,233,0.16),transparent_55%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-16 px-6 py-24 md:flex-row md:items-center md:gap-14 md:px-8 lg:px-12">
        <div className="max-w-xl space-y-9">
          <span className="text-xs uppercase tracking-[0.58em] text-sky-300/80">
            Coming Soon · 2025
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Senseibles is shaping tactile brand universes for the spatial web.
          </h1>
          <p className="text-base text-slate-300 md:text-lg">
            We are finishing an immersive playground that blends realtime storytelling, spatial commerce, and ambient interaction systems. Talk to the studio now to co-create your launch moment.
          </p>
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-300 shadow-[0_0_50px_rgba(56,189,248,0.12)] sm:grid-cols-2">
            <div>
              <p className="text-lg font-medium text-white">Immersive Commerce</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
                Product Spatialisation
              </p>
            </div>
            <div>
              <p className="text-lg font-medium text-white">Realtime Worlds</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/50">
                Procedural Brand Systems
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300"
            >
              Talk to the Studio
            </Link>
            <a
              href="mailto:sethiamehul14@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              Email Directly
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full flex-1 rounded-[32px] border border-white/5 bg-slate-900/30 p-3 shadow-[0_0_80px_rgba(14,165,233,0.2)] backdrop-blur-xl md:h-[520px]">
          <div className="absolute inset-3 rounded-[28px] bg-gradient-to-br from-white/5 via-white/0 to-white/10" />
          <div className="relative h-full w-full overflow-hidden rounded-[28px]">
            <SceneCanvas />
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-slate-950/80 py-6 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 text-xs uppercase tracking-[0.4em] text-white/40 md:px-8 lg:px-12">
          <span>Realtime visualisation · Spatial retail · Narrative interfaces</span>
          <span>Senseibles Studio · hello@senseibles.com</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
