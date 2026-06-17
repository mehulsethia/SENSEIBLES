import type { Metadata } from "next"

import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Contact - Senseibles",
  description: "Contact Senseibles for product, design, AI, automation, and development work.",
}

const contactOptions = [
  {
    label: "New projects",
    value: "Start a product, automation, or AI build with a focused discovery conversation.",
  },
  {
    label: "Partnerships",
    value: "Explore collaborations with teams, agencies, founders, and operators.",
  },
  {
    label: "Support",
    value: "Get help with an existing engagement, handoff, or implementation question.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1060px] flex-col gap-14 px-6 pb-24 pt-28 sm:px-10">
        <section className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#605A57]">Contact</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              Tell us what needs to make sense.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[#605A57] sm:text-lg">
              Share the product, workflow, or system you are trying to improve. We will help clarify the path from idea
              to shipped execution.
            </p>
          </div>

          <aside className="rounded-[8px] border border-[#37322F]/10 bg-white/70 p-6 shadow-[0px_12px_24px_rgba(47,48,55,0.08)]">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#605A57]">Reach us</p>
            <a className="mt-4 block text-2xl font-semibold tracking-tight underline" href="mailto:support@senseibles.com">
              support@senseibles.com
            </a>
            <p className="mt-4 text-sm leading-6 text-[#605A57]">
              For test traffic, this page is intentionally standalone and does not add any new navigation links.
            </p>
          </aside>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {contactOptions.map((option) => (
            <article key={option.label} className="rounded-[8px] border border-[#37322F]/10 bg-white/60 p-6">
              <h2 className="text-xl font-semibold tracking-tight">{option.label}</h2>
              <p className="mt-3 text-sm leading-6 text-[#605A57]">{option.value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[8px] border border-[#37322F]/10 bg-white/70 p-8">
          <h2 className="text-2xl font-semibold tracking-tight">What helps us respond faster</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#605A57] sm:text-base">
            Include the goal, current stage, deadline, known constraints, and any existing product links or workflows.
            A short note is enough to start.
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
