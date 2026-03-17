import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Senseibles - Built with Sense. By Senseis",
  description:
    "We’re Senseibles — a tech-native product and automation studio that blends thoughtful design, functional development, and sharp AI into systems that just make sense. Think of us as your modern-day sensei — minus the robe, plus the roadmap.",
    generator: 'v0.app',
  icons: { icon: '/logo/ICON.png' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400&display=swap" />
        <script src="https://converc.vercel.app/widget.js" data-public-key="e8dd8b94-e767-431c-8f40-1673ba1aad55" defer></script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
