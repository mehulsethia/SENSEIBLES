"use client";

import Link from "next/link";

import ContactForm from "@/components/sections/ContactForm";
import Prism from "@/components/three/Prism";

export function HeroSection() {
  return (
    <section className="relative flex h-screen items-center overflow-hidden bg-slate-950 px-6 py-20 text-slate-100 md:px-10 lg:px-16">
      <div className="absolute inset-0 -z-20 bg-slate-950" />
      <div className="absolute inset-0 -z-10">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <Prism
            animationType="rotate"
            timeScale={0.45}
            height={3.8}
            baseWidth={5.8}
            scale={3.4}
            noise={0.35}
            glow={1.2}
            hueShift={0.35}
            colorFrequency={1.2}
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.32),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 -z-5 bg-[linear-gradient(120deg,rgba(15,23,42,0.8)_0%,rgba(2,6,23,0.2)_55%,rgba(2,6,23,0.85)_100%)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,420px)] lg:items-center">
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.58em] text-sky-300/80">
              Senseibles Studio
            </span>
            <p className="text-sm font-semibold uppercase tracking-[0.75em] text-white/60">
              Agency Launching Soon
            </p>
          </div>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            Built With Sense.
            <br className="hidden md:block" />
            <span className="block">By Senseis.</span>
          </h1>
          <p className="text-base text-slate-200 md:text-lg">
            We’re Senseibles — a tech-native product and automation agency that blends thoughtful design, functional development, and sharp AI into systems that just make sense. Think of us as your modern-day sensei — minus the robe, plus the roadmap.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="mailto:sethiamehul14@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300"
            >
              Email the studio
            </Link>
          </div>

        </div>

        <div className="relative isolate overflow-hidden rounded-[38px] border border-white/15 bg-slate-900/40 p-[1px] shadow-[0_0_120px_rgba(10,132,255,0.24)]">
          <div className="absolute inset-0 rounded-[38px] bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.25),transparent_60%)]" />
          <div className="relative rounded-[36px] border border-white/10 bg-[linear-gradient(140deg,rgba(17,25,40,0.85)_0%,rgba(15,23,42,0.55)_45%,rgba(2,6,23,0.85)_100%)] p-6 shadow-[0_25px_80px_rgba(10,132,255,0.25)] backdrop-blur-lg">
            <div className="absolute inset-0 overflow-hidden rounded-[36px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.4),transparent_70%)] opacity-35" />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(15,23,42,0.65),transparent_45%)]" />
            </div>
            <div className="relative space-y-3 pb-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                Shoot a message
              </span>
              <p className="text-sm text-slate-200">
                Drop a note and we’ll revert soon.
              </p>
            </div>
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
