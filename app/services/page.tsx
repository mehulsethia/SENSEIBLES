import type { Metadata } from "next"

import FooterSection from "@/components/footer-section"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Services - Senseibles",
  description: "Explore Senseibles services across design, development, AI integration, and automation.",
}

const services = [
  {
    title: "Product Design",
    copy: "Interfaces, user flows, design systems, and product direction for tools that need to feel clear and useful.",
  },
  {
    title: "Development",
    copy: "Web apps, internal platforms, dashboards, integrations, and production-ready product builds.",
  },
  {
    title: "AI Systems",
    copy: "AI workflows, assistant experiences, structured outputs, automation agents, and practical model integration.",
  },
  {
    title: "Automation",
    copy: "Operational systems that reduce repeated work, connect tools, and make everyday workflows easier to manage.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-[1060px] flex-col gap-14 px-6 pb-24 pt-28 sm:px-10">
        <section className="max-w-3xl space-y-5">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#605A57]">Services</p>
          <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Practical product work for teams that want less friction.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-[#605A57] sm:text-lg">
            Senseibles helps turn fuzzy requirements into useful digital products, cleaner operations, and AI-enabled
            systems that support real workflows.
          </p>
        </section>

        <section className="grid gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[8px] border border-[#37322F]/10 bg-white/70 p-7 shadow-[0px_12px_24px_rgba(47,48,55,0.08)]"
            >
              <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
              <p className="mt-4 text-sm leading-6 text-[#605A57] sm:text-base">{service.copy}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 rounded-[8px] border border-[#37322F]/10 bg-[#37322F] p-8 text-white md:grid-cols-[240px_1fr]">
          <h2 className="text-2xl font-semibold tracking-tight">How we work</h2>
          <p className="text-sm leading-6 text-white/75 sm:text-base">
            We clarify the desired outcome, map the current workflow, identify the smallest useful release, and then
            build in tight cycles so strategy and execution stay connected.
          </p>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}
