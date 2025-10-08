"use client"

import { useState, type ReactNode } from "react"

interface FAQItem {
  question: string
  answer: ReactNode
}

const faqData: FAQItem[] = [
  {
    question: "What exactly does Senseibles do?",
    answer: (
      <p>
        Senseibles is a modern tech studio that builds digital experiences powered by design, development, automation, and AI.
        We help brands, founders, and teams move faster — by designing and developing intuitive products, streamlining workflows, and
        connecting systems that actually talk to each other.
      </p>
    ),
  },
  {
    question: "What problems do you solve or automate?",
    answer: (
      <div className="space-y-3">
        <p>We step in wherever time, clarity, or scalability breaks down. That could mean:</p>
        <ul className="space-y-1 text-[#2F3037]">
          <li>
            <strong>Design</strong> — shaping digital experiences that feel intuitive and alive.
          </li>
          <li>
            <strong>Development</strong> — building products, dashboards, and systems that scale without breaking.
          </li>
          <li>
            <strong>Automation</strong> — connecting tools and workflows so your business runs on autopilot.
          </li>
          <li>
            <strong>AI</strong> — embedding intelligence into your operations through smart assistants, data enrichment, and workflow logic.
          </li>
        </ul>
        <p>
          In short — we bring <em>sense</em> to your systems, design, and code so you spend less time building or managing product, and more time growing it.
        </p>
      </div>
    ),
  },
  {
    question: "What tech stacks do you use?",
    answer: (
      <div className="space-y-3">
        <p>We pick the right tool for the right problem, but here’s our usual playground:</p>
        <ul className="space-y-1 text-[#2F3037]">
          <li>
            <strong>Custom-code Frontend:</strong> Next.js, React
          </li>
          <li>
            <strong>Custom-code Backend:</strong> FastAPI, Supabase, AWS
          </li>
          <li>
            <strong>Automation:</strong> n8n, Make, Zapier
          </li>
          <li>
            <strong>No/Low-Code:</strong> Bubble, FlutterFlow, Airtable, Webflow, Framer
          </li>
          <li>
            <strong>AI &amp; Data:</strong> OpenAI, LangChain, RelevanceAI
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What's the Senseibles delivery process?",
    answer: (
      <div className="space-y-3">
        <p>We keep it fast, clear, and collaborative.</p>
        <ol className="ml-4 list-decimal space-y-1 text-[#2F3037]">
          <li>
            <strong>Sense:</strong> We start by understanding the ‘why’ — the problem, context, and desired outcome.
          </li>
          <li>
            <strong>Shape:</strong> We prototype or map the ideal workflow or product.
          </li>
          <li>
            <strong>Build:</strong> We execute fast, with weekly check-ins.
          </li>
          <li>
            <strong>Refine:</strong> We iterate based on feedback and performance.
          </li>
        </ol>
        <p>
          On request, we provide projects with its own Notion hub or dashboard to track deliverables, updates, and timelines.
        </p>
      </div>
    ),
  },
  {
    question: "How is pricing structured?",
    answer: (
      <div className="space-y-3">
        <p>We offer two models:</p>
        <ul className="space-y-1 text-[#2F3037]">
          <li>
            <strong>Fixed Projects:</strong> Ideal for clearly defined scopes like websites, MVPs, or automations.
          </li>
          <li>
            <strong>Monthly Retainer:</strong> Perfect for ongoing work — continuous builds, automation sprints, or multi-project support.
          </li>
        </ul>
        <p>All quotes are transparent — no surprise costs or “extra hours” drama.</p>
      </div>
    ),
  },
  {
    question: "How does the Monthly Retainer work?",
    answer: (
      <p>
        You get a dedicated Senseibles slot every month. We prioritize your tasks, ship deliverables weekly, and keep an open feedback loop.
        You can pause, upgrade, or cancel anytime with a 7-day notice — zero friction.
      </p>
    ),
  },
  {
    question: "What if I'm not happy with the work?",
    answer: (
      <p>
        That’s rare — but fair question. We iterate fast and early so there are no surprises. If something feels off, we fix it before moving forward.
        If you’re still not satisfied, you can pause or end the engagement — no hard feelings.
      </p>
    ),
  },
  {
    question: "How do I share feedback?",
    answer: (
      <p>
        Everything runs inside a single shared workspace (Notion, Linear, or Slack). You can drop feedback directly on builds, add comments, or book a quick sync call.
        We keep things human and async-friendly — so nothing gets lost in translation.
      </p>
    ),
  },
  {
    question: "Is there a limit to how much I can ask for?",
    answer: (
      <p>
        You can queue up as many requests as you like — we tackle them in priority order, one at a time, to maintain quality and pace. Think of it as your own tech and design engine running on subscription.
      </p>
    ),
  },
  {
    question: "Can we have calls?",
    answer: (
      <p>
        Of course. We love clarity — and sometimes that means a 15-minute chat beats 15 messages. Calls are available for onboarding, key milestones, or reviews.
        Everything else runs smoothly async.
      </p>
    ),
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="w-full bg-[#f7f5f3]">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col gap-8 px-4 py-16 text-center sm:px-6 md:px-8 lg:py-20">
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(2,6,23,0.08)] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.35em] text-[#37322F] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 1C3.686 1 1 3.686 1 7s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6Zm.875 9.708v.917h-1.75v-.917h1.75Zm.083-2.75-.458.188c-.583.25-.792.5-.792.896H5.541c0-.896.458-1.417 1.417-1.792l.5-.208c.458-.188.667-.438.667-.771 0-.541-.458-.958-1.083-.958-.75 0-1.083.438-1.083 1.041H4.5c0-1.458 1.125-2.208 2.375-2.208 1.292 0 2.375.771 2.375 2 0 .875-.417 1.458-1.292 1.771Z"
                fill="#37322F"
              />
            </svg>
            FAQ
          </span>
        </div>

        <header className="mx-auto max-w-[640px] space-y-4">
          <h2 className="text-[#2F3037] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            Frequently asked questions
          </h2>
          <p className="text-sm leading-7 text-[#605A57] sm:text-base">
            Here’s what founders and operators ask Senseibles before we build their next chapter.
          </p>
        </header>

        <div className="flex flex-col gap-3 text-left">
          {faqData.map((item, index) => {
            const isOpen = openItems.includes(index)

            return (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E0DEDB] bg-white/95 px-4 transition hover:border-[#d2cfcc]"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-3 py-3 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-[#2F3037] sm:text-base">{item.question}</span>
                  <span
                    className={`flex size-7 items-center justify-center rounded-full bg-[#f0eeec] text-base text-[#2F3037] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden text-[#605A57] transition-all duration-300 ${
                    isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pb-4 text-sm leading-6 sm:text-base">{item.answer}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
