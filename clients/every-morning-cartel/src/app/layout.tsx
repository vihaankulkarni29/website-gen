import type { Metadata } from 'next'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Every Morning Cartel | Premium Coffee in Mumbai',
  description: 'Experience specialty coffee crafted with passion in the heart of Mumbai',
  keywords: ['coffee', 'specialty coffee', 'Mumbai', 'cafe'],
  openGraph: {
    title: 'Every Morning Cartel',
    description: 'Premium specialty coffee in Mumbai',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-cream-white text-charcoal-black">
        {children}
      </body>
    </html>
  )
}
