"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import ComparisonTable from "../components/comparison-table"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import HeroBeam from "../components/hero-beam"
import WorkCarousel from "../components/work-carousel"
import { WorkWithMeModal } from "@/components/work-with-me-modal"

// Reusable Badge Component
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

export default function LandingPage() {
  const carouselLogos = ['/client-logos/bidx.png', '/client-logos/damanmarkets.png', '/client-logos/hijackeralert.png', '/client-logos/iconicawards.png', '/client-logos/suiteop.png', '/client-logos/superbenji.png', '/client-logos/wedmana.png', '/client-logos/zoop.png']
  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
  ]
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <header className="relative z-20 w-full px-4 sm:px-6 md:px-8 lg:px-0 pt-4 sm:pt-6 md:pt-8">
              <div className="pointer-events-none absolute inset-x-4 top-6 hidden h-px bg-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white] sm:block sm:inset-x-6 md:inset-x-8 lg:inset-x-0 lg:top-[42px]" />
              <div className="relative mx-auto flex w-full max-w-[720px] items-center gap-3 rounded-full bg-[#F7F5F3]/95 px-3 py-2 shadow-[0px_0px_0px_2px_white] backdrop-blur-sm sm:px-4 sm:py-2.5 md:px-6">
                <Link href="/" className="flex items-center">
                  <Image src="/logo/LOGO.png" alt="Senseibles" width={120} height={32} priority className="h-7 w-auto" />
                </Link>
                <nav className="hidden flex-1 items-center justify-center gap-3 sm:flex sm:gap-4 md:gap-6 lg:gap-7">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      className="text-[rgba(49,45,43,0.8)] text-xs md:text-[13px] font-medium leading-[14px] font-sans transition-colors hover:text-[#0b0b0b]"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <WorkWithMeModal
                  trigger={
                    <button
                      type="button"
                      className="hidden sm:inline-flex h-7 md:h-8 items-center justify-center rounded-full bg-white px-3.5 md:px-[14px] text-xs md:text-[13px] font-medium leading-5 text-[#37322F] shadow-[0px_1px_2px_rgba(55,50,47,0.12)] transition hover:bg-white/80"
                    >
                      Book a call
                    </button>
                  }
                />
                <button
                  type="button"
                  aria-expanded={isMobileNavOpen}
                  onClick={() => setIsMobileNavOpen((prev) => !prev)}
                  className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(55,50,47,0.16)] bg-white text-[#37322F] shadow-[0px_10px_24px_rgba(55,50,47,0.12)] transition hover:bg-white/85 sm:hidden"
                >
                  <span className="sr-only">Toggle navigation</span>
                  {isMobileNavOpen ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="stroke-current">
                      <path d="M4 4L12 12M12 4L4 12" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="stroke-current">
                      <path d="M3 5.25H15M3 9H15M3 12.75H15" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  )}
                </button>
              </div>
              <div
                className={`sm:hidden transition-all duration-300 ease-in-out ${
                  isMobileNavOpen ? "max-h-64 opacity-100" : "pointer-events-none max-h-0 opacity-0"
                }`}
              >
                <div className="mx-auto mt-3 flex w-full max-w-[720px] flex-col gap-3 rounded-[24px] border border-[rgba(55,50,47,0.12)] bg-white/90 px-4 py-4 text-sm font-medium text-[#49423D] shadow-[0px_16px_36px_rgba(55,50,47,0.16)] backdrop-blur-sm">
                  {navLinks.map((link) => (
                    <a
                      key={`mobile-${link.href}`}
                      href={link.href}
                      onClick={() => setIsMobileNavOpen(false)}
                      className="rounded-[18px] px-3 py-2 text-left transition hover:bg-[#F7F5F3]/80"
                    >
                      {link.label}
                    </a>
                  ))}
                  <WorkWithMeModal
                    onOpenChange={(isOpen) => {
                      if (isOpen) {
                        setIsMobileNavOpen(false)
                      }
                    }}
                    trigger={
                      <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-full bg-[#37322F] px-4 py-2 text-sm font-medium text-white shadow-[0px_8px_20px_rgba(55,50,47,0.2)] transition hover:bg-[#37322F]/90"
                      >
                        Book a call
                      </button>
                    }
                  />
                </div>
              </div>
            </header>

            {/* Hero Section */}
            <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 pb-2 sm:pb-4 md:pb-6 flex flex-col items-center px-3 sm:px-4 md:px-8 lg:px-0 w-full">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-1 sm:gap-4 md:gap-5 lg:gap-6">
                  <div className="flex w-full max-w-[720px] flex-col items-center px-1 text-center font-serif text-3xl font-semibold leading-tight text-[#37322F] sm:max-w-[760px] sm:px-2 sm:text-4xl sm:leading-[1.15] md:text-5xl md:leading-[1.1] lg:text-[68px] lg:leading-[1.05]">
                    Built With Sense. By Senseis.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-3.5 lg:gap-4 mt-3 sm:mt-4 md:mt-5">
                {["Design", "Development", "AI", "Automation"].map((label) => (
                  <Badge
                    key={label}
                    icon={<span className="inline-block size-[10px] rounded-full bg-[#37322F]" />}
                    text={label}
                  />
                ))}
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-5 sm:gap-7 md:gap-8 lg:gap-8 relative z-10 mt-3 sm:mt-4 md:mt-5 lg:mt-6">
                <div className="backdrop-blur-[8.25px] flex justify-center items-center">
                  <WorkWithMeModal
                    trigger={
                      <button
                        type="button"
                        className="relative inline-flex h-10 sm:h-11 md:h-12 items-center justify-center rounded-full bg-[#37322F] px-6 sm:px-8 md:px-10 lg:px-12 text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition hover:bg-[#37322F]/90"
                      >
                        Book a Call
                      </button>
                    }
                  />
                </div>
              </div>

              <HeroBeam />

              <div className="pointer-events-none absolute left-1/2 top-[260px] z-0 hidden -translate-x-1/2 transform md:block lg:top-[320px]">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="h-auto w-[1400px] opacity-40 mix-blend-multiply lg:w-[2200px] lg:opacity-50"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <WorkCarousel />

              {/* Who We Are Section */}
              <section id="about" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col items-center bg-[#f7f5f3]">
                <div className="relative flex w-full max-w-[1060px] flex-col px-4 sm:px-6 md:px-8 py-16 space-y-12 text-center">
                  <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />
                  <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-[rgba(55,50,47,0.12)] sm:block" />
                  <div className="flex justify-center">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="4" height="6" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="8" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="2" y="4" width="1" height="1" fill="#37322F" />
                          <rect x="3.5" y="4" width="1" height="1" fill="#37322F" />
                          <rect x="2" y="5.5" width="1" height="1" fill="#37322F" />
                          <rect x="3.5" y="5.5" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="2" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="2" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="3.5" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="3.5" width="1" height="1" fill="#37322F" />
                          <rect x="8" y="5" width="1" height="1" fill="#37322F" />
                          <rect x="9.5" y="5" width="1" height="1" fill="#37322F" />
                        </svg>
                      }
                      text="ABOUT US"
                    />
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-[#37322F] text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight font-serif">
                      Senseibles is a tech-native product and automation studio that blends thoughtful design, functional development, and sharp AI into systems that just make sense. Think of us as your modern-day sensei — minus the robe, plus the roadmap.
                    </h2>
                    {/* <p className="text-[#605A57] text-sm sm:text-base md:text-lg leading-relaxed font-sans max-w-[640px] mx-auto">
                    Senseibles is a tech-native product and automation studio that blends thoughtful design, functional development, and sharp AI into systems that just make sense. Think of us as your modern-day sensei — minus the robe, plus the roadmap.
                    We don’t just promise innovation — we prove it in motion. Our builds deliver clarity, control, and measurable impact across every touchpoint.
                    </p> */}
                  </div>

                  <div className="grid grid-cols-1 gap-5 text-[#2F3037] sm:grid-cols-2 lg:grid-cols-4">
                    {[
                      { highlight: "20+", title: "digital products", sub: "launched & scaled" },
                      { highlight: "250+", title: "automation hours", sub: "saved every month" },
                      { highlight: "10x", title: "faster turnaround", sub: "from idea to launch" },
                      { highlight: "100%", title: "client retention", sub: "clarity builds trust" },
                    ].map((metric) => (
                      <div key={metric.highlight} className="rounded-3xl bg-white/80 px-6 py-8 text-left shadow-[0px_12px_24px_rgba(47,48,55,0.08)]">
                        <div className="text-3xl font-serif font-semibold text-[#2F3037]">{metric.highlight}</div>
                        <div className="text-lg font-semibold text-[#2F3037]">{metric.title}</div>
                        <div className="text-sm text-[#605A57]">{metric.sub}</div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full relative overflow-hidden border border-[#E0DEDB] rounded-[32px] bg-white/70 py-8">
                    <div className="logo-marquee flex items-center gap-16 px-10">
                      {[...carouselLogos, ...carouselLogos].map((logo, index) => (
                        <div key={`${logo}-${index}`} className="flex-shrink-0 opacity-70 hover:opacity-100 transition">
                          <img src={logo} alt={`Client logo ${index + 1}`} className="h-12 w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#f7f5f3] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#f7f5f3] to-transparent" />
                  </div>
                </div>
                <style jsx global>{`
                  @keyframes logo-marquee {
                    0% {
                      transform: translateX(0);
                    }
                    100% {
                      transform: translateX(-50%);
                    }
                  }
                  .logo-marquee {
                    animation: logo-marquee 16s linear infinite;
                  }
                `}</style>
              </section>

              {/* Bento Grid Section */}
              <div id="services" className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="#37322F" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="SERVICES"
                    />
                    <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      What We Do Best
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Whether it’s a no-code MVP, a custom platform, or an intelligent agent,
                      <br />
                      we design and build products that think, adapt, and scale with your business.
                    </div>
                  </div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start px-2 sm:px-4 md:px-0">
                  <div className="hidden md:block md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 gap-0 border border-[rgba(55,50,47,0.12)] md:grid-cols-2 md:border-x md:border-y-0 md:border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Smart. Simple. Brilliant. */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Design That Thinks
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          We don’t just design for looks. We design for logic — interfaces that feel natural, workflows that just make sense, and products that people love using.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="light"
                          className="origin-center scale-[0.65] sm:scale-[0.78] md:scale-[0.9] lg:scale-[0.98]"
                        />
                      </div>
                    </div>

                    {/* Top Right - Your work, in sync */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          Development That Scales
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          From Webflow and Framer to full-stack code, we build scalable digital systems that grow with you — fast, clean, and future-proof.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Bottom Left - Effortless integration */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Artificial Intelligence That Learns
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          We go beyond plug-and-play AI. From automation pipelines to custom-trained agents, we make intelligence an integral part of how your business operates.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="light"
                          className="origin-center scale-[0.75] sm:scale-[0.88] md:scale-[0.96]"
                        />
                      </div>
                    </div>

                    {/* Bottom Right - Numbers that speak */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Automation Workflows That Flow
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          We stitch your tools, data, and processes into seamless, automated systems — so your business runs smoother, faster, and smarter.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NumbersThatSpeak
                            width="100%"
                            height="100%"
                            theme="light"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        {/* Gradient mask for soft bottom edge */}
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7F5F3] to-transparent pointer-events-none"></div>
                        {/* Fallback content if component doesn't render */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 hidden">
                          <div className="flex flex-col items-center gap-2 p-4">
                            <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-sm text-green-600">Growth Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <DocumentationSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Comparison Section */}
              <ComparisonTable />

              {/* FAQ Section */}
              <FAQSection />

              <section className="w-full px-4 sm:px-6 md:px-8 lg:px-0 border-t border-b border-[rgba(55,50,47,0.12)]">
                <div className="relative mx-auto flex w-full max-w-[1060px] flex-col gap-10 px-4 py-16 sm:px-6 md:px-8 lg:flex-row lg:items-start lg:gap-16 lg:py-20">
                  <div className="absolute inset-0 hidden h-full w-full overflow-hidden sm:block">
                    <div className="w-full h-full relative">
                      {Array.from({ length: 300 }).map((_, i) => (
                        <div
                          key={i}
                          className="absolute h-4 w-full rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                          style={{
                            top: `${i * 16 - 120}px`,
                            left: "-100%",
                            width: "300%",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative z-20 flex-1 space-y-6 text-center sm:text-left">
                    <h2 className="text-[#2F3037] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                      Human by design.
                      <br />
                      Intelligent by build.
                      <br />
                      Senseible by nature.
                    </h2>
                    <p className="mx-auto max-w-[520px] text-sm leading-7 text-[#605A57] sm:mx-0 sm:text-base">
                      Your brand deserves tech that feels intuitive, looks stunning, and thinks for itself. We bring clarity to chaos — through thoughtful design, functional code, and a touch of AI magic.
                    </p>
                  </div>

                  <div className="relative z-20 w-full max-w-[460px] rounded-[24px] border border-white/70 bg-white/90 p-6 text-left sm:p-8 lg:p-10">
                    <div className="flex items-center gap-4">
                      <div className="flex size-14 items-center justify-center overflow-hidden rounded-full border border-white/70">
                        <img src="/profile-pic.jpeg" alt="Senseibles contact" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#9A938F]">Let’s talk</p>
                        <p className="text-xl font-semibold text-[#2F3037]">Book an intro call</p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm leading-6 text-[#605A57]">
                      Time to get introduced and explore how Senseibles can guide your launch, automation, and growth.
                    </p>
                    <WorkWithMeModal
                      trigger={
                        <button
                          type="button"
                          className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#2F3037] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2F3037]/90"
                        >
                          Book a Call →
                        </button>
                      }
                    />
                    <div className="mt-6 flex items-center gap-3 rounded-2xl border border-[#E6E3E0] bg-white p-4 text-sm text-[#2F3037]">
                      <div className="flex size-10 items-center justify-center rounded-full bg-[#2F3037]/10 text-[#2F3037]">
                        ✉️
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-[#9A938F]">Prefer email?</p>
                        <a href="mailto:sethiamehul14@gmail.com" className="font-medium">
                          sethiamehul14@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
