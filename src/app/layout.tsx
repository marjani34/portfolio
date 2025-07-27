import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio | Your Name',
  description: 'Professional portfolio showcasing my work, skills, and experience in web development and design.',
  keywords: ['portfolio', 'web development', 'design', 'frontend', 'react', 'next.js'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    title: 'Portfolio | Your Name',
    description: 'Professional portfolio showcasing my work, skills, and experience in web development and design.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Your Name',
    description: 'Professional portfolio showcasing my work, skills, and experience in web development and design.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${inter.className} bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white`}>
        {children}
      </body>
    </html>
  )
}
