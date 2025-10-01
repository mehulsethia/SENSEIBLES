"use client";

import Link from "next/link";

import ContactForm from "@/components/sections/ContactForm";
import Prism from "@/components/three/Prism";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 py-24 text-slate-100 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(56,189,248,0.28),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_120deg_at_70%_30%,rgba(14,165,233,0.22),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(340px,420px)] lg:items-center">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.58em] text-sky-300/80">
            Senseibles Studio
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            A new-age tech agency for design, dev, automation, and AI.
          </h1>
          <p className="text-base text-slate-300 md:text-lg">
            We build digital infrastructure that scales — with taste, speed, and intelligence.
          </p>
          <p className="max-w-xl text-sm text-slate-400 md:text-base">
            From brand design to full-stack apps, internal automations to AI copilots — Senseibles brings bold ideas to life with a creative engineering mindset.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="https://senseibles.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              View latest work
            </Link>
            <Link
              href="mailto:sethiamehul14@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300"
            >
              Email the studio
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_70px_rgba(56,189,248,0.12)] backdrop-blur-xl">
            <div className="mb-5 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.4em] text-sky-200/70">
                Book a build sprint
              </span>
              <p className="text-sm text-slate-300">
                Drop a note and we will reply with next steps plus a private demo reel.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>

        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/40 p-3 shadow-[0_0_90px_rgba(56,189,248,0.22)]">
          <div className="absolute inset-3 rounded-[24px] bg-gradient-to-br from-white/10 via-white/0 to-white/5" />
          <div style={{ width: "100%", height: "520px", position: "relative" }}>
            <Prism
              animationType="rotate"
              timeScale={0.5}
              height={3.5}
              baseWidth={5.5}
              scale={3.6}
              hueShift={0}
              colorFrequency={1}
              noise={0.5}
              glow={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
