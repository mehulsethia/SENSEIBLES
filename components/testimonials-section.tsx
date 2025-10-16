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

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const testimonials = [
    {
      quote:
        "Excellent freelance resource for Bubble.io development. He had become a key member of our team and we can always count on him to find a way to get what we want, to work!",
      name: "David Deal",
      company: "Founder, ICONIC Awards",
      image:
        "/testimonials/david-deal-iconic-awards.avif",
    },
    {
      quote:
        "Mehul was very responsive, willing to work with us through revisions, and we were impressed by the speed of his work through the project. We'll be happy to work with him again in the future.",
      name: "Rustin Cavel",
      company: "CEO, Coast.io",
      image:
        "/testimonials/rustin-cavel-coast.avif",
    },
    {
      quote:
        "Mehul was excellent to work with throughout out project. The communication skills and attention to detail allowed us to successfully complete the project with no issues. Would absolutely hire again!",
      name: "Vic Hill",
      company: "Founder and CEO, The Eighty-Three K Group",
      image:
        "/testimonials/vic-hill-myruck.avif",
    },
    {
      quote:
        "Mehul is great. top notch communication and skills. really enjoyed working with him and the result was great! Highly recommend.",
      name: "David Cohen",
      company: "Founder, Canvix",
      image:
        "/testimonials/david-cohen-canvix.avif",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
        setTimeout(() => {
          setIsTransitioning(false)
        }, 100)
      }, 300)
    }, 12000) // increased from 6000ms to 12000ms for longer testimonial display

    return () => clearInterval(interval)
  }, [testimonials.length])

  const handleNavigationClick = (index: number) => {
    setIsTransitioning(true)
    setTimeout(() => {
      setActiveTestimonial(index)
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }, 300)
  }

  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header Section */}

      {/* Testimonial Content */}
      <div className="self-stretch px-3 sm:px-4 overflow-hidden flex justify-center items-center bg-background border border-b border-l-0 border-r-0 border-t-0">
        <div className="flex w-full max-w-[960px] flex-col items-center gap-6 py-14 text-center sm:gap-8 sm:py-16 md:text-left">
          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
            <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-6">
              <div className="flex items-center justify-center">
                <div className="flex size-20 items-center justify-center rounded-full border border-[rgba(0,0,0,0.12)] bg-white/85 p-1.5 shadow-[0px_4px_14px_rgba(73,66,61,0.14)] transition-all duration-700 ease-in-out sm:size-24 sm:p-2.5">
                  <img
                    className="size-full rounded-full object-cover"
                    style={{
                      opacity: isTransitioning ? 0.6 : 1,
                      transform: isTransitioning ? "scale(0.95)" : "scale(1)",
                      transition: "opacity 0.7s ease-in-out, transform 0.7s ease-in-out",
                    }}
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                  />
                </div>
              </div>
              <div className="flex max-w-[540px] flex-col items-center gap-5 px-3 py-4 sm:px-6 sm:py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] md:items-start md:shadow-none">
                <div
                  className="w-full text-[#49423D] text-base font-medium leading-7 tracking-tight transition-all duration-700 ease-in-out sm:text-[19px] sm:leading-8 md:text-[28px] md:leading-[38px]"
                  style={{
                    filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                    transition: "filter 0.7s ease-in-out",
                  }}
                >
                  “{testimonials[activeTestimonial].quote}”
                </div>
                <div
                  className="flex w-full flex-col items-center gap-1 text-center transition-all duration-700 ease-in-out md:items-start md:text-left"
                  style={{
                    filter: isTransitioning ? "blur(4px)" : "blur(0px)",
                    transition: "filter 0.7s ease-in-out",
                  }}
                >
                  <div className="text-[rgba(73,66,61,0.90)] text-base font-semibold uppercase tracking-[0.18em]">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-[rgba(73,66,61,0.70)] text-xs font-medium sm:text-sm">
                    {testimonials[activeTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden h-full w-px bg-[rgba(55,50,47,0.12)] md:block" />
            <div className="flex items-center gap-3 md:self-end">
              <button
                onClick={() => handleNavigationClick((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                className="flex size-9 items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-gray-50"
              >
                <div className="relative flex size-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="#46413E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
              <button
                onClick={() => handleNavigationClick((activeTestimonial + 1) % testimonials.length)}
                className="flex size-9 items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.08)] transition-colors hover:bg-gray-50"
              >
                <div className="relative flex size-6 items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#46413E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
