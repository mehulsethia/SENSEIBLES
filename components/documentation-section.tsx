"use client"

import { useState, useEffect } from "react"
import type React from "react"

// Badge component for consistency
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function DocumentationSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  const cards = [
    {
      title: "Discover & Define",
      description: "We audit what exists, surface bottlenecks, and blueprint the fix.",
      bullets: [
        "Deep-dive discovery sessions to understand your systems and goals.",
        "Clear problem mapping before a single pixel is designed.",
        "Defined success metrics to measure impact post-launch.",
      ],
      image: "/process-assets/discover.svg",
    },
    {
      title: "Design & Prototype",
      description: "We turn clarity into visuals — elegant interfaces, efficient systems, zero fluff.",
      bullets: [
        "Figma-first, idea-to-interface collaboration.",
        "Iterative design reviews with live feedback loops.",
        "Early interaction prototypes to validate user flows fast.",
      ],
      image: "/process-assets/design.svg",
    },
    {
      title: "Develop & Automate",
      description: "Using the best techstack in code, low-code, and AI, we build scalable digital experiences.",
      bullets: [
        "Modular builds using modern frameworks and no/low-code platforms.",
        "Automations and AI layers that reduce manual work.",
        "Weekly progress updates and milestone-based reviews.",
      ],
      image: "/process-assets/develop.svg",
    },
    {
      title: "Deploy & Optimize",
      description: "We launch, measure, and iterate — continuously refining until the system feels invisible.",
      bullets: [
        "Structured handoff with documentation and walkthroughs.",
        "Post-launch sprints for performance and scalability tweaks.",
        "Continuous support for updates, integrations, and new ideas.",
      ],
      image: "/process-assets/deploy.svg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % cards.length)
      setAnimationKey((prev) => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [cards.length])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setAnimationKey((prev) => prev + 1)
  }

  const activeCardData = cards[activeCard] ?? cards[0]

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}
      <div className="self-stretch px-6 md:px-24 py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-6 py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-4 shadow-none">
          <Badge
            icon={
              <div className="w-[10.50px] h-[10.50px] outline outline-[1.17px] outline-[#37322F] outline-offset-[-0.58px] rounded-full"></div>
            }
            text="PROCESS"
          />
          <div className="self-stretch text-center flex justify-center flex-col text-[#49423D] text-3xl md:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            How We Build Senseible Products
          </div>
          <div className="self-stretch text-center text-[#605A57] text-base font-normal leading-7 font-sans">
            Every project moves through a focused, collaborative, and highly iterative process.
            <br />
            We keep the process flexible and the results extraordinary.
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="self-stretch px-4 md:px-9 overflow-hidden flex justify-start items-center">
        <div className="flex-1 py-8 md:py-11 flex flex-col md:flex-row justify-start items-center gap-6 md:gap-12">
          {/* Left Column - Feature Cards */}
          <div className="w-full md:flex-1 md:max-w-[400px] h-full flex flex-col justify-center items-center gap-4 order-2 md:order-1">
            {cards.map((card, index) => {
              const isActive = index === activeCard

              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(index)}
                  className={`w-full overflow-hidden flex flex-col justify-start items-start transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
                      : "border border-[rgba(2,6,23,0.08)]"
                  }`}
                >
                  <div
                    className={`w-full h-0.5 bg-[rgba(50,45,43,0.08)] overflow-hidden ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    <div
                      key={animationKey}
                      className="h-0.5 bg-[#322D2B] animate-[progressBar_5s_linear_forwards] will-change-transform"
                    />
                  </div>
                  <div className="px-6 py-5 w-full flex flex-col gap-2">
                    <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm font-semibold leading-6 font-sans">
                      {card.title}
                    </div>
                    <div className="self-stretch text-[#605A57] text-[13px] font-normal leading-[22px] font-sans">
                      {card.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:flex-1 rounded-lg flex flex-col justify-between items-center gap-4 order-1 md:order-2 md:px-0 px-0 h-full">
            <div className="w-full md:w-[580px] space-y-2">
              <div className="flex flex-col gap-1.5">
                {activeCardData.bullets.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-2 rounded-full border border-[rgba(55,50,47,0.18)] bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-[#37322F] shadow-[0px_2px_6px_rgba(47,48,55,0.08)]"
                  >
                    <span className="inline-block size-1.5 flex-shrink-0 rounded-full bg-[#37322F]" />
                    <span className="flex-1 text-left normal-case tracking-normal text-[12px] font-medium text-[#49423D]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full md:w-[580px] h-[220px] md:h-[360px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-lg flex items-center justify-center">
              <img
                key={activeCardData.image}
                src={activeCardData.image}
                alt={activeCardData.title}
                className="h-full w-full object-contain p-6"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progressBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  )
}
