import type { Metadata } from "next"

import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "About - Senseibles",
  description: "Learn about Senseibles, a product, design, AI, and automation studio built around practical clarity.",
}

const principles = [
  {
    title: "Build what is useful",
    copy: "We focus on products and systems that reduce friction, support real work, and create visible momentum.",
  },
  {
    title: "Keep strategy close to execution",
    copy: "Ideas move faster when product thinking, design, engineering, and automation are shaped together.",
  },
  {
    title: "Make systems feel simple",
    copy: "Good technology should clarify decisions, connect workflows, and make teams feel more in control.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1060px] flex-col gap-14 px-6 pb-24 pt-28 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#605A57]">About</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Senseibles builds digital systems with taste, utility, and momentum.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#605A57] sm:text-lg">
              We are a tech-native studio working across product design, development, AI, and automation. The goal is
              simple: help ambitious teams turn unclear workflows into useful products and sharper operations.
            </p>
          </div>

          <aside className="rounded-[8px] border border-[#37322F]/10 bg-white/70 p-6 shadow-[0px_12px_24px_rgba(47,48,55,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#605A57]">Studio focus</p>
            <p className="mt-4 text-3xl font-semibold tracking-tight">Design, development, AI, automation.</p>
            <p className="mt-4 text-sm leading-6 text-[#605A57]">
              A compact team for practical product work, clean interfaces, and connected workflows.
            </p>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {principles.map((principle) => (
            <article key={principle.title} className="rounded-[8px] border border-[#37322F]/10 bg-white/60 p-6">
              <h2 className="text-xl font-semibold tracking-tight">{principle.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#605A57]">{principle.copy}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[8px] border border-[#37322F]/10 bg-[#37322F] p-8 text-white">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Built for useful progress.</h2>
            <p className="text-sm leading-6 text-white/75 sm:text-base">
              Senseibles works best where business needs, product detail, and technical execution all have to meet in
              the same room.
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
