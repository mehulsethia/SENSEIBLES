import { WorkWithMeModal } from "@/components/work-with-me-modal"

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
            <WorkWithMeModal
              trigger={
                <button
                  type="button"
                  className="h-10 px-12 rounded-full bg-[#37322f] text-sm font-medium text-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] transition hover:bg-[#37322f]/90"
                >
                  Book a Call
                </button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
