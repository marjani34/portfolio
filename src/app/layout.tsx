import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { personalInfo } from '@/data/portfolio'
import ParallaxWrapper from '@/components/ParallaxWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://amirmarjani.com'),
  title: {
    default: `${personalInfo.name} - ${personalInfo.title} | Portfolio`,
    template: `%s | ${personalInfo.name}`
  },
  description: 'Front End Manager and Full Stack Developer specializing in Angular, React, and modern web technologies. View my portfolio of projects, skills, and professional experience.',
  keywords: [
    'Front End Manager',
    'Full Stack Developer',
    'Angular Developer',
    'React Developer',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'UI/UX Design',
    'Portfolio',
    'Software Engineer',
    'Frontend Development',
    'Backend Development'
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amirmarjani.com',
    siteName: `${personalInfo.name} Portfolio`,
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: 'Front End Manager and Full Stack Developer specializing in Angular, React, and modern web technologies.',
    images: [
      {
        url: '/images/profile.png',
        width: 1200,
        height: 630,
        alt: `${personalInfo.name} - ${personalInfo.title}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: 'Front End Manager and Full Stack Developer specializing in Angular, React, and modern web technologies.',
    images: ['/images/profile.png'],
    creator: '@amirmarjani',
  },
  alternates: {
    canonical: 'https://amirmarjani.com',
  },
  category: 'technology',
  classification: 'Portfolio',
  other: {
    'theme-color': '#3B82F6',
    'msapplication-TileColor': '#3B82F6',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': personalInfo.name,
    'application-name': personalInfo.name,
    'msapplication-TileImage': '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={personalInfo.name} />
        <meta name="application-name" content={personalInfo.name} />
        <meta name="msapplication-TileImage" content="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white scroll-smooth`}>
        <ParallaxWrapper>
          {children}
        </ParallaxWrapper>
      </body>
    </html>
  )
}
