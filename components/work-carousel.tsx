"use client"

import Image from "next/image"
import { useEffect, useMemo, useState, type CSSProperties } from "react"

type Work = {
  src: string
  title: string
  subtitle: string
  href?: string
  tags: string[]
}

const WORKS: Work[] = [
  {
    src: "/works/creammoney.png",
    title: "Cream Money",
    subtitle: "Fintech brand & dashboard",
    href: "https://creammoney.co",
    tags: ["Bubble", "Web App", "Automation"],
  },
  {
    src: "/works/designmadecool.png",
    title: "Design Made Cool",
    subtitle: "Studio portfolio overhaul",
    href: "https://designmadecool.com",
    tags: ["Webflow", "Brand", "Copy"],
  },
  {
    src: "/works/doughy.png",
    title: "Doughy",
    subtitle: "Bakery subscription experience",
    href: "https://doughy.app",
    tags: ["Shopify", "Retention", "Automation"],
  },
  {
    src: "/works/divviit.png",
    title: "Divviit",
    subtitle: "B2B marketplace platform",
    href: "https://divviit.co",
    tags: ["Product Strategy", "Web App", "Integrations"],
  },
  {
    src: "/works/suburbia.png",
    title: "Suburbia",
    subtitle: "Community retail marketplace",
    href: "https://suburbia.fm",
    tags: ["UX", "Marketplace", "Automation"],
  },
  {
    src: "/works/superbenji.png",
    title: "Super Benji",
    subtitle: "Kids finance mobile app",
    href: "https://superbenji.io",
    tags: ["Figma", "Mobile", "Flow Design"],
  },
  {
    src: "/works/thirstydumplings.png",
    title: "Thirsty Dumplings",
    subtitle: "Restaurant ordering flow",
    href: "https://thirstydumplings.com",
    tags: ["Brand", "Ordering", "Automation"],
  },
  {
    src: "/works/wedmana.png",
    title: "Wedmana",
    subtitle: "Wedding planning workspace",
    href: "https://wedmana.com",
    tags: ["Notion", "Process", "Operations"],
  },
]

const POSITIONS = [-1, 0, 1] as const

function wrapIndex(index: number, length: number) {
  return (index + length) % length
}

export default function WorkCarousel() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % WORKS.length)
    }, 4200)

    return () => clearInterval(timer)
  }, [isPaused])

  const slides = useMemo(() => {
    return POSITIONS.map((offset) => {
      const index = wrapIndex(active + offset, WORKS.length)
      const isActive = offset === 0
      const work = WORKS[index]
      const translate = `calc(-50% + ${offset * 60}%)`
      const scale = isActive ? 1 : 0.88
      const opacity = isActive ? 1 : 0.55
      const width = isActive ? "min(90vw, 720px)" : "min(65vw, 420px)"
      const height = isActive ? "min(52vw, 420px)" : "min(48vw, 340px)"

      return {
        key: `${index}-${offset}`,
        work,
        isActive,
        style: {
          transform: `translateX(${translate}) scale(${scale})`,
          opacity,
          width,
          height,
          zIndex: isActive ? 40 : 20,
        } as CSSProperties,
      }
    })
  }, [active])

  const goTo = (index: number) => setActive(wrapIndex(index, WORKS.length))
  const goPrev = () => setActive((prev) => wrapIndex(prev - 1, WORKS.length))
  const goNext = () => setActive((prev) => wrapIndex(prev + 1, WORKS.length))

  return (
    <section className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] pb-12 pt-6 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12">
      <div className="mx-auto flex w-full max-w-[1060px] flex-col gap-8 px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-center text-[#E0DEDB]">
          <span className="inline-block h-px w-24 bg-[#E0DEDB]" />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-[rgba(55,50,47,0.12)] bg-white px-4 py-1 text-xs font-medium uppercase tracking-[0.3em] text-[#605A57]">
            Projects
          </span>
          <h2 className="font-serif text-3xl font-semibold text-[#2F3037] sm:text-4xl md:text-[46px]">
            Where design meets systems thinking
          </h2>
          <p className="max-w-[580px] text-sm text-[#605A57] sm:text-base">
            A rotating look at recent product builds, brand rollouts, and digital experiences crafted by the Senseibles crew.
          </p>
        </div>

        <div
          className="relative h-[360px] sm:h-[400px] md:h-[440px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map(({ key, work, isActive, style }) => (
            <div
              key={key}
              className="absolute left-1/2 top-0 flex -translate-y-[2%] items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.33,0.04,0.24,0.99)]"
              style={style}
            >
              <article
                className={`group relative h-full w-full overflow-hidden rounded-[28px] border border-white/70 bg-white/90 shadow-[0px_22px_60px_rgba(55,50,47,0.18)] backdrop-blur-sm ${
                  isActive ? "" : "blur-[0.3px]"
                }`}
              >
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  sizes="(min-width: 1200px) 700px, (min-width: 768px) 520px, 90vw"
                  className="object-cover"
                  priority={isActive}
                />
                {work.href && (
                  <a
                    href={work.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute right-5 top-5 hidden size-10 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[#2F3037] shadow-[0_10px_20px_rgba(47,48,55,0.16)] transition group-hover:flex"
                    aria-label={`Visit ${work.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.75 4.5H13.5V11.25" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4.5 13.5L13.5 4.5" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 px-8 py-6">
                  <div className="flex flex-col items-start gap-1 text-white">
                    <h3 className="text-lg font-semibold sm:text-xl">{work.title}</h3>
                    <p className="text-sm text-white/80 sm:text-base">{work.subtitle}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/60 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}

          <button
            type="button"
            aria-label="Previous project"
            onClick={goPrev}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 translate-x-[-50%] rounded-full border border-[rgba(47,48,55,0.18)] bg-white/90 p-3 text-[#2F3037] shadow-[0_10px_30px_rgba(47,48,55,0.16)] transition hover:bg-white sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13L6 8L10 3" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={goNext}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[50%] rounded-full border border-[rgba(47,48,55,0.18)] bg-white/90 p-3 text-[#2F3037] shadow-[0_10px_30px_rgba(47,48,55,0.16)] transition hover:bg-white sm:flex"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L10 8L6 13" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
        </div>

        <div className="mx-auto flex items-center justify-center gap-2">
          {WORKS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`h-1.5 w-6 rounded-full transition-all ${
                idx === active ? "bg-[#2F3037]" : "bg-[#CFC9C4]"
              }`}
              aria-label={`Show project ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
