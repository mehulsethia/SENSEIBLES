import type { Metadata } from "next"

import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Pricing - Senseibles",
  description: "Simple engagement options for product, automation, and AI work with Senseibles.",
}

const plans = [
  {
    name: "Sprint",
    price: "Project based",
    description: "Focused execution for a clear product, automation, or design milestone.",
    features: ["Scoped roadmap", "Design and build support", "Weekly progress reviews"],
  },
  {
    name: "Studio",
    price: "Monthly retainer",
    description: "Ongoing product and automation support for teams that need consistent momentum.",
    features: ["Dedicated delivery cadence", "Product, design, and engineering", "Priority iteration queue"],
  },
  {
    name: "Advisory",
    price: "Flexible",
    description: "Strategic guidance for teams validating ideas, systems, or AI workflows.",
    features: ["Technical discovery", "Architecture review", "Actionable implementation plan"],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1060px] flex-col gap-14 px-6 pb-24 pt-28 sm:px-10">
        <section className="max-w-3xl space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#605A57]">Pricing</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Choose the level of product support that fits the work.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#605A57] sm:text-lg">
            Senseibles works across product design, software development, AI integration, and automation. Pricing is
            shaped around scope, speed, and the amount of senior involvement required.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex min-h-[320px] flex-col justify-between rounded-[8px] border border-[#37322F]/10 bg-white/70 p-6 shadow-[0px_12px_24px_rgba(47,48,55,0.08)]"
            >
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight">{plan.name}</h2>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-[#605A57]">{plan.price}</p>
                </div>
                <p className="text-sm leading-6 text-[#605A57]">{plan.description}</p>
              </div>
              <ul className="mt-8 space-y-3 text-sm text-[#37322F]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#37322F]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="rounded-[8px] border border-[#37322F]/10 bg-[#37322F] p-8 text-white">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight">Every engagement starts with clarity.</h2>
            <p className="text-sm leading-6 text-white/75 sm:text-base">
              We define outcomes first, then shape the team, timeline, and budget around what needs to be true for the
              work to succeed.
            </p>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
