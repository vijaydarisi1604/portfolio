import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Providers from './providers'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Bhanu Venkata Sai Vijay Darisi - AI/ML Engineer',
  description: 'Personal portfolio of Bhanu Venkata Sai Vijay Darisi, an AI/ML Engineer specializing in intelligent systems and automation.',
  openGraph: {
    title: 'Bhanu Venkata Sai Vijay Darisi - AI/ML Engineer',
    description: 'Personal portfolio of Bhanu Venkata Sai Vijay Darisi, an AI/ML Engineer specializing in intelligent systems and automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhanu Venkata Sai Vijay Darisi - AI/ML Engineer',
    description: 'Personal portfolio of Bhanu Venkata Sai Vijay Darisi, an AI/ML Engineer.',
  },
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} dark:bg-background dark:text-foreground`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
