import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-[216px] pb-16">
      <div className="max-w-[1060px] mx-auto px-4">
        <div className="flex flex-col items-center gap-12">
          {/* Hero Content */}
          <div className="max-w-[937px] flex flex-col items-center gap-3">
            <div className="flex flex-col items-center gap-6">
              <h1 className="max-w-[748px] text-center text-[#37322f] text-5xl md:text-[80px] font-normal leading-tight md:leading-[96px] font-serif">
                Built with Sense.
                By Senseis.
              </h1>
              <p className="max-w-[760px] text-center text-[#37322f]/80 text-lg font-medium leading-[1.65]">
                Streamline your billing process with seamless automation for every custom contract, tailored by
                Brillance.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              asChild
              className="h-10 px-12 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
            >
              <Link href="https://cal.com/sethiamehul14" target="_blank" rel="noopener noreferrer">
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
