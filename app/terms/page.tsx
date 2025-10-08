import type { Metadata } from "next"

import { Header } from "@/components/header"
import FooterSection from "@/components/footer-section"

export const metadata: Metadata = {
  title: "Terms & Conditions — Senseibles",
  description: "Review the terms that govern your use of Senseibles' services, products, and digital experiences.",
}

const termSections = [
  {
    title: "1. Acceptance of Terms",
    body: `By accessing and using the services provided by Senseibles ("we," "us," or "our"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.`,
  },
  {
    title: "2. Description of Services",
    body: `Senseibles provides software solutions, design solutions, consulting, AI integrations, automation system solutions, and support services designed to enhance digital visibility, launch products, reduce manual work and speed decision-making processes.`,
  },
  {
    title: "3. User Responsibilities",
    body: `You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to use our services only for lawful purposes and in accordance with these terms.`,
  },
  {
    title: "4. Intellectual Property",
    body: `All content, features, and functionality of our services, including but not limited to text, graphics, logos, and software, are owned by Overdrive and are protected by copyright, trademark, and other intellectual property laws.`,
  },
  {
    title: "5. Limitation of Liability",
    body: `In no event shall Senseibles be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services, including but not limited to loss of profits, data, or business opportunities.`,
  },
  {
    title: "6. Termination",
    body: `We may terminate or suspend your access to our services at any time, with or without cause, with or without notice. Upon termination, your right to use our services will cease immediately.`,
  },
  {
    title: "7. Governing Law",
    body: `These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Senseibles operates, without regard to its conflict of law provisions.`,
  },
  {
    title: "8. Contact Information",
    body: `If you have any questions about these Terms and Conditions, please contact us at support@senseibles.com.`,
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F3] text-[#2F3037]">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-12 px-6 pb-24 pt-32 sm:px-10">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#605A57]">Last updated: October 2025</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="text-sm text-[#605A57] sm:text-base">
            These Terms &amp; Conditions govern how you use Senseibles' products and services. Please read them carefully.
          </p>
        </div>

        <ol className="space-y-10 text-sm leading-relaxed sm:text-base">
          {termSections.map((section) => (
            <li key={section.title} className="space-y-3">
              <h2 className="text-lg font-semibold tracking-tight sm:text-xl">{section.title}</h2>
              <p className="text-[#605A57]">{section.body}</p>
            </li>
          ))}
        </ol>

        <div className="rounded-3xl bg-white/70 p-6 text-center text-sm text-[#605A57] shadow-[0px_12px_24px_rgba(47,48,55,0.08)] sm:text-base">
          Questions about these terms? Email us at
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

