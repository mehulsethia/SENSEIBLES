"use client"

const categories = [
  "SPEED",
  "CLARITY",
  "QUALITY",
  "SCALABILITY",
  "COSTING",
]

const rows = [
  {
    id: "senseibles",
    name: "Senseibles",
    highlight: true,
    values: [
      "✅ 2–3× faster builds",
      "✅ Strategy-first execution",
      "✅ Design systems that scale",
      "✅ Code, no-code, or AI — we pick what fits",
      "✅ One team, no vendor chaos",
    ],
  },
  {
    id: "in-house",
    name: "In-house Team",
    highlight: false,
    values: [
      "⚠️ Slow setup",
      "⚠️ Narrow perspective",
      "✅ Consistent output",
      "⚠️ Limited bandwidth",
      "❌ High fixed cost",
    ],
  },
  {
    id: "agencies",
    name: "Traditional Agencies",
    highlight: false,
    values: [
      "⚠️ Long timelines",
      "❌ Generic strategy",
      "✅ Polished visuals",
      "⚠️ Slow to adapt",
      "❌ Expensive retainers",
    ],
  },
  {
    id: "freelancers",
    name: "Freelancers",
    highlight: false,
    values: [
      "✅ Quick start",
      "⚠️ Varies by person",
      "⚠️ Inconsistent quality",
      "❌ Hard to coordinate",
      "⚠️ Cheap short-term, costly long-term",
    ],
  },
  {
    id: "ai-tools",
    name: "AI Tools",
    highlight: false,
    values: [
      "✅ Instant output",
      "❌ No creative sense",
      "⚠️ Repetitive results",
      "⚠️ Limited scope",
      "✅ Low upfront cost",
    ],
  },
]

type Row = typeof rows[number]

function ComparisonRow({ row }: { row: Row }) {
  const highlightClasses =
    "bg-[#0b0b0b] text-[#f8f7f4] border-[#1a1a1a] shadow-[0_22px_60px_rgba(12,11,10,0.45)] hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(12,11,10,0.55)]"
  const baseClasses =
    "bg-[#f8f7f4] text-[#1c1b1a] border-[#e7e2dd] shadow-[0_10px_28px_rgba(55,50,47,0.12)] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(55,50,47,0.16)]"

  return (
    <div
      className={`grid grid-cols-1 gap-4 rounded-[24px] border p-5 text-sm leading-6 transition duration-300 transform-gpu sm:[grid-template-columns:160px_repeat(5,minmax(0,1fr))] ${
        row.highlight ? highlightClasses : baseClasses
      }`}
    >
      <div className="flex items-center justify-start text-sm font-semibold uppercase tracking-[0.2em] sm:justify-start">
        {row.name}
      </div>

      {row.values.map((value, index) => (
        <div
          key={`${row.id}-${index}`}
          className={`flex min-h-[72px] flex-col justify-center rounded-[18px] border border-transparent px-4 py-3 text-left sm:px-5 ${
            row.highlight ? "bg-white/10 text-[#f6f5f2]" : "bg-white text-[#3f3a36] border-[#eae5df]"
          }`}
        >
          <span className="mb-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#9A938F] sm:hidden">
            {categories[index]}
          </span>
          <span className="text-[13px] leading-6 sm:text-[15px]">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default function ComparisonTable() {
  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] py-16 sm:py-20">
      <div className="relative mx-auto flex w-full max-w-[1060px] flex-col gap-8 px-4 sm:px-6 md:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />

        <div className="flex flex-col items-center gap-4 text-center">
          <span className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs text-xs font-medium uppercase tracking-[0.3em] text-[#37322F]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
            </svg>
            WHY SENSEIBLES
          </span>
          <h2 className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Why Founders Choose Senseibles
          </h2>
          <p className="max-w-[620px] text-sm text-[#605A57] sm:text-base">
            We blend the speed of AI, the craft of design, and the intelligence of strategy.
          </p>
        </div>

        <div className="hidden gap-3 rounded-[32px] border border-[rgba(55,50,47,0.18)] bg-white/90 p-5 text-left text-xs font-semibold uppercase tracking-[0.3em] text-[#9A938F] shadow-[0_12px_40px_rgba(55,50,47,0.12)] backdrop-blur-sm sm:grid sm:[grid-template-columns:repeat(6,minmax(0,1fr))]">
          <div />
          {categories.map((header) => (
            <div key={header} className="text-center">
              {header}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {rows.map((row) => (
            <ComparisonRow key={row.id} row={row} />
          ))}
        </div>
      </div>
    </section>
  )
}
