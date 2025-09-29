import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'
// import SmoothScrolling from './components/ui/SmoothScrolling'
import SmoothScroll from './components/ui/SmoothScrolling'
import { siteConfig } from './metadata'
import Header from './components/ui/Header'
import TransitionLayout from './components/TransitionLayout'
import PageTransition from './components/TransitionLayout'

// metadata for SEO
export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'portfolio',
    'web development',
    'front-end developer',
    'React',
    'Next.js',
    'Wout Klee',
    'MCT',
    'Howest',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#f8f6f4] antialiased">
        <SmoothScroll />
        <Header />
        {children}
      </body>
    </html>
  )
}
