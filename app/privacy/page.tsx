import type { Metadata } from "next"

import { Header } from "@/components/header"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Privacy Policy — Senseibles",
  description:
    "Learn how Senseibles collects, uses, and protects the information you share with us across our products and services.",
}

const privacySections = [
  {
    title: "1. Information We Collect",
    body: `We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, company information, and any other information you choose to provide.`,
  },
  {
    title: "2. How We Use Your Information",
    body: `We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features. We may also use your information to send you technical notices, updates, and support messages.`,
  },
  {
    title: "3. Information Sharing",
    body: `We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information with trusted third-party service providers who assist us in operating our website and providing our services.`,
  },
  {
    title: "4. Data Security",
    body: `We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.`,
  },
  {
    title: "5. Your Rights",
    body: `You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us. To exercise these rights, please contact us using the information provided below.`,
  },
  {
    title: "6. Contact Us",
    body: `If you have any questions about this Privacy Policy or our data practices, please contact us at support@senseibles.com.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 pb-24 pt-32 sm:px-10">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#605A57]">Last updated: October 2025</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="text-sm text-[#605A57] sm:text-base">
            This Privacy Policy explains how Senseibles collects, uses, and safeguards the information you share with us.
          </p>
        </div>

        <ol className="space-y-10 text-sm leading-relaxed sm:text-base">
          {privacySections.map((section) => (
            <li key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{section.title}</h2>
              <p className="text-[#605A57]">{section.body}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-3xl bg-white/70 p-6 text-center text-sm text-[#605A57] shadow-[0px_12px_24px_rgba(47,48,55,0.08)] sm:text-base">
          Need more help? Email us at
          {" "}
          <a className="font-medium text-[#2F3037] underline" href="mailto:support@senseibles.com">
            support@senseibles.com
          </a>
          .
        </div>
      </main>
      <FooterSection />
    </div>
  )
}

