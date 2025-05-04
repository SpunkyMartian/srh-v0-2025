import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SRH Playoff Qualification Tracker | IPL 2025",
  description:
    "Track Sunrisers Hyderabad's IPL 2025 playoff qualification scenarios, current standings, and what needs to happen for them to qualify.",
  keywords: "SRH, Sunrisers Hyderabad, IPL 2025, playoff qualification, cricket, IPL standings",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=G-P8XE2P0YXE`}></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P8XE2P0YXE');
            `,
          }}
        />
        <link rel="icon" href="/teams/srh.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
