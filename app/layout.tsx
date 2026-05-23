import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import SmoothScroll from '../src/components/providers/smooth-scroll'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Pravaaha Digital',
  description: 'Modern digital solutions for growing businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body
        className={`${inter.variable} font-sans antialiased bg-[#FAFAFC] text-[#1F2937]`}
      >
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}