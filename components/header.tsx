import Image from "next/image"
import Link from "next/link"

import { WorkWithMeModal } from "@/components/work-with-me-modal"

export function Header() {
  return (
    <header className="w-full border-b border-[#37322f]/6 bg-[#f7f5f3]">
      <div className="max-w-[1060px] mx-auto px-4">
        <nav className="flex items-center gap-6 py-4">
          <Link href="/" className="relative flex items-center">
            <Image src="/logo/LOGO.png" alt="Senseibles" width={120} height={32} priority className="h-8 w-auto" />
          </Link>
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Products</button>
            <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Pricing</button>
            <button className="text-[#37322f] hover:text-[#37322f]/80 text-sm font-medium">Docs</button>
          </div>
          <WorkWithMeModal
            trigger={
              <button
                type="button"
                className="ml-auto inline-flex items-center rounded-full border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#37322f] transition hover:bg-[#37322f]/5"
              >
                Book a call
              </button>
            }
          />
        </nav>
      </div>
    </header>
  )
}
