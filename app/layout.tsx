import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import { AwesomeCursor } from '@/components/awesome-cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Ilmi - Frontend Developer',
    template: '%s | Ilmi'
  },
  description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web applications',
  keywords: ['frontend developer', 'react developer', 'next.js', 'typescript', 'web development'],
  authors: [{ name: 'Ilmi' }],
  creator: 'Ilmi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Ilmi - Frontend Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web applications',
    siteName: 'Ilmi Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ilmi - Frontend Developer',
    description: 'Experienced Frontend Developer specializing in React, Next.js, and modern web applications',
  },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
          <div className='flex min-h-screen flex-col'>
            <Navbar />
            {children}
          </div>
          <AwesomeCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
