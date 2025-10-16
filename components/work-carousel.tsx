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
    href: "https://www.creammoney.com/",
    tags: ["Webflow", "UI/UX"],
  },
  {
    src: "/works/designmadecool.png",
    title: "Design Made Cool",
    subtitle: "Studio portfolio overhaul",
    href: "https://designmadecool.com",
    tags: ["Webflow", "GSAP", "3D Animation", "Portfolio"],
  },
  {
    src: "/works/doughy.png",
    title: "Doughy",
    subtitle: "Bakery subscription experience",
    href: "https://eatdoughy.com/",
    tags: ["Shopify", "Liquid JS", "Ecommerce"],
  },
  {
    src: "/works/divviit.png",
    title: "Divviit",
    subtitle: "Estate Management SaaS",
    href: "https://divviit.com/",
    tags: ["Bubble", "Figma", "OpenAI"],
  },
  {
    src: "/works/suburbia.png",
    title: "Suburbia",
    subtitle: "Customized Skateboard Ecommerce Store",
    href: "https://suburbia-skate.netlify.app/",
    tags: ["Next JS", "Three JS", "3D Animation", "Ecommerce Store Integrations"],
  },
  {
    src: "/works/superbenji.png",
    title: "Super Benji",
    subtitle: "Sales outreach SaaS that helps users automate LinkedIn prospecting and email follow-ups.",
    href: "https://superbenji.ai/",
    tags: ["Figma", "Bubble", "APIs"],
  },
  {
    src: "/works/thirstydumplings.png",
    title: "Thirsty Dumplings",
    subtitle: "A DIY dumpling experience",
    href: "https://thirstydumpling.com/",
    tags: ["Branding", "UI/UX", "Framer", "Shopify"],
  },
  {
    src: "/works/wedmana.png",
    title: "Wedmana",
    subtitle: "Wedding planning workspace",
    href: "https://wedmana.io/",
    tags: ["Bubble", "Markertplace", "Stripe Connect"],
  },
  {
    src: "/works/fitnessmobileapp.webp",
    title: "Fitness Mobile App",
    subtitle: "Fitness tracking app",
    href: "https://contra.com/p/XsYsmgsN-fitness-app-design-and-development?r=mehul_sethia",
    tags: ["Flutterflow", "Flutter", "Figma"],
  },
  {
    src: "/works/contentdepot.png",
    title: "Content Depot",
    subtitle: "Creator marketplace and job board",
    href: "https://contentdepot.co.nz/",
    tags: ["Figma", "Bubble", "Stripe Connect"],
  },
  {
    src: "/works/formcarry.png",
    title: "Form Carry",
    subtitle: "Best form backend",
    href: "https://formcarry.com/",
    tags: ["Webflow", "Memberstack", "Relume"],
  },
  {
    src: "/works/weareker.png",
    title: "Ker",
    subtitle: "Wellness Ecommerce Brand",
    href: "https://weareker.com/",
    tags: ["Shopify", "Liquid JS", "CRM Integration"],
  },
  {
    src: "/works/bidx.png",
    title: "Bidx",
    subtitle: "AI powered government bid/grant matching and application SaaS",
    href: "https://bidx.ai/",
    tags: ["Bubble", "Supabase", "N8N"],
  },
  {
    src: "/works/buzzdaddy.png",
    title: "Buzz Daddy",
    subtitle: "Name-drop your business across social media 24/7",
    href: "https://buzzdaddy.ai/",
    tags: ["NextJS", "Python", "Supabase", "OpenAI"],
  },
]

const POSITIONS = [-1, 0, 1] as const

function wrapIndex(index: number, length: number) {
  return (index + length) % length
}

function shuffleArray<T>(items: readonly T[]) {
  const shuffled = [...items]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function WorkCarousel() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [works, setWorks] = useState<Work[]>(WORKS)
  const worksCount = works.length

  useEffect(() => {
    setWorks(shuffleArray(WORKS))
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % worksCount)
    }, 4200)

    return () => clearInterval(timer)
  }, [isPaused, worksCount])

  const slides = useMemo(() => {
    return POSITIONS.map((offset) => {
      const index = wrapIndex(active + offset, worksCount)
      const isActive = offset === 0
      const work = works[index] ?? works[wrapIndex(0, worksCount)]
      const translate = `calc(-50% + ${offset * 60}%)`
      const scale = isActive ? 1 : 0.88
      const opacity = isActive ? 1 : 0.55
      const width = isActive ? "min(82vw, 720px)" : "min(54vw, 380px)"
      const height = isActive ? "min(44vw, 360px)" : "min(38vw, 300px)"

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
  }, [active, works, worksCount])

  const goTo = (index: number) => setActive(wrapIndex(index, worksCount))
  const goPrev = () => setActive((prev) => wrapIndex(prev - 1, worksCount))
  const goNext = () => setActive((prev) => wrapIndex(prev + 1, worksCount))

  return (
    <section id="work" className="w-full border-b border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] pb-12 pt-6 sm:pb-16 sm:pt-10 md:pb-20 md:pt-12">
      <div className="relative mx-auto flex w-full max-w-[1060px] flex-col gap-8 px-4 sm:px-6 md:px-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />

        <div className="flex w-full items-center justify-center">
          <span className="inline-block h-px w-full bg-[#E0DEDB]" />
        </div>

        <div className="flex flex-col items-center gap-3 text-center">
          <span className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs text-xs font-medium uppercase leading-3 text-[#37322F]">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
              <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
            </svg>
            PROJECTS
          </span>
          <h2 className="text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
            Where design meets systems thinking
          </h2>
          <p className="max-w-[580px] text-sm text-[#605A57] sm:text-base">
            A rotating look at recent product builds, brand rollouts, and digital experiences crafted by the Senseibles crew.
          </p>
        </div>

        <div
          className="relative h-[240px] sm:h-[320px] md:h-[420px]"
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
                className={`group relative h-full w-full overflow-hidden rounded-[28px] border border-white/70 bg-white/90 backdrop-blur-sm ${
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
            className="absolute left-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(47,48,55,0.18)] bg-white/95 p-2.5 text-[#2F3037] shadow-[0_10px_30px_rgba(47,48,55,0.16)] transition hover:bg-white sm:left-0 sm:translate-x-[-50%] sm:p-3"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 13L6 8L10 3" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={goNext}
            className="absolute right-2 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full border border-[rgba(47,48,55,0.18)] bg-white/95 p-2.5 text-[#2F3037] shadow-[0_10px_30px_rgba(47,48,55,0.16)] transition hover:bg-white sm:right-0 sm:translate-x-[50%] sm:p-3"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 3L10 8L6 13" stroke="#2F3037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent" />
        </div>

        <div className="mx-auto flex items-center justify-center gap-2">
          {works.map((_, idx) => (
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
