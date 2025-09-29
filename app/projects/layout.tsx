import type { Metadata } from 'next'
import '../globals.css'
import { ThemeProvider } from '../components/ThemeProvider'
// import SmoothScrolling from './components/ui/SmoothScrolling'
import SmoothScroll from '../components/ui/SmoothScrolling'
import { siteConfig } from '../metadata'
import Header from '../components/ui/Header'
import TransitionLayout from '../components/TransitionLayout'
import PageTransition from '../components/TransitionLayout'

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
        <PageTransition />
        {children}
      </body>
    </html>
  )
}
