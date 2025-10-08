import Image from "next/image"
import Link from "next/link"

export default function FooterSection() {
  return (
    <div className="w-full pt-10 flex flex-col justify-start items-start">
      {/* Main Footer Content */}
      <div className="self-stretch flex flex-col gap-6 px-4 pb-6 pt-0 sm:px-6 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="space-y-3">
            <Link href="/" className="block">
              <Image src="/logo/LOGO.png" alt="Senseibles" width={140} height={36} className="h-9 w-auto" />
            </Link>
            <div className="text-[rgba(73,66,61,0.90)] text-sm font-medium leading-[18px] font-sans">Coding made effortless</div>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-[#49423D]">
            <Link href="#services" className="hover:text-[#2F3037] transition-colors">
              Services
            </Link>
            <Link href="#work" className="hover:text-[#2F3037] transition-colors">
              Work
            </Link>
            <Link href="#about" className="hover:text-[#2F3037] transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-[rgba(55,50,47,0.12)] pt-6 md:flex-row md:items-center">
          <div className="text-xs uppercase tracking-[0.25em] text-[#9A938F]">Follow us</div>
          <div className="flex items-center gap-4 text-[#49423D]">
            <Link href="https://twitter.com" className="transition hover:text-[#2F3037]" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" className="transition hover:text-[#2F3037]" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" fill="currentColor" />
              </svg>
            </Link>
            <Link href="https://github.com" className="transition hover:text-[#2F3037]" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.300 24 12c0-6.627-5.374-12-12-12z" fill="currentColor" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient Wordmark */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pt-12 pb-8 flex items-center justify-center">
        <div className="relative w-full max-w-[1060px] overflow-visible">
          <p className="text-center text-[clamp(5rem,18vw,15rem)] font-semibold tracking-[0.08em] uppercase bg-gradient-to-b from-[#8f8a86] via-[#c4c0bc] to-[#f7f5f3] bg-clip-text text-transparent leading-none">
            SENSEIBLES
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent via-[#f7f5f3]/65 to-[#f7f5f3]" />
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 pb-8">
        <div className="mx-auto flex w-full max-w-[1060px] flex-col gap-4 border-t border-[rgba(55,50,47,0.12)] pt-5 text-sm text-[#49423D] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2025 SENSEIBLES. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-[#2F3037] transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="hover:text-[#2F3037] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section with Pattern */}
      <div className="self-stretch h-12 relative overflow-hidden border-t border-b border-[rgba(55,50,47,0.12)]">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="w-full h-full relative">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[300px] h-16 border border-[rgba(3,7,18,0.08)]"
                style={{
                  left: `${i * 300 - 600}px`,
                  top: "-120px",
                  transform: "rotate(-45deg)",
                  transformOrigin: "top left",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
