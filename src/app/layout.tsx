import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senseibles — Spatial Experience Agency",
  description:
    "Senseibles crafts immersive 3D web, XR, and retail experiences that merge procedural art direction with conversion-focused storytelling.",
  generator: "Next.js",
  applicationName: "Senseibles",
  keywords: [
    "Senseibles",
    "3D web agency",
    "immersive experiences",
    "react-three-fiber",
    "spatial design",
  ],
  openGraph: {
    title: "Senseibles — Spatial Experience Agency",
    description:
      "Immersive brand universes for the spatial web. Interactive product demos, experiential commerce, and realtime storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
