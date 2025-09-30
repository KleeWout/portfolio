// components/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show header at the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true)
        setLastScrollY(currentScrollY)
        return
      }

      // Show when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b border-gray-200 bg-[#f8f6f4]/98 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-main h-8 w-auto text-2xl font-bold transition-colors hover:text-gray-700"
          >
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 254.13 149.32"
              fill="currentColor"
              className="text-main h-8 w-auto dark:text-white"
            >
              <path d="M253.37,13.47c1.02,7.13-1.77,12.34-6.21,17.06-10.39,11.03-20.57,22.26-31.05,33.2-2.59,2.71-2.69,4.57-.59,7.63,11.89,17.28,23.59,34.7,35.31,52.1,3.98,5.91,4.55,12.05.71,18.27-3.63,5.88-9.21,7.98-15.8,7.5-6.18-.45-10.15-4.29-13.49-9.21-9.63-14.19-19.4-28.29-29.15-42.4-.92-1.33-1.57-2.98-3.92-3.81-6.98,7.38-14.13,14.93-21.09,22.29-2.49-.71-2.91-2.47-3.56-3.93-8.59-19.31-17.11-38.66-25.74-57.96-.98-2.18-.88-4.09-.03-6.21,4.99-12.52,9.78-25.13,14.92-37.59,3.65-8.86,12.55-12.44,21.42-9.05,8.42,3.22,12.56,11.92,9.28,20.89-5.53,15.15-11.49,30.15-17.72,46.39,8.34-7.5,14.65-15.28,21.42-22.61,12.09-13.09,23.92-26.41,36.01-39.5,10.14-10.98,24.53-7.71,29.29,6.95Z" />
              <path d="M42.39,36.78c6.37,16.58,12.62,32.8,18.88,49.02.46-.01.92-.03,1.38-.04,3.91-10.08,7.82-20.17,11.68-30.13,2.42.46,2.58,1.93,3.09,3.09,4.97,11.27,9.86,22.56,14.92,33.79,1.18,2.62,1.36,4.91.25,7.62-5.08,12.3-9.94,24.69-14.97,37.01-3.41,8.35-8.84,12.37-16.42,12.15-8.22-.24-12.95-4.99-15.79-12.34C30.86,99.24,16.2,61.57,1.66,23.85-2.37,13.37,1.09,4.83,10.44,1.35c9.28-3.46,18.56.96,22.49,10.85,3.2,8.04,6.23,16.14,9.46,24.58Z" />
              <path d="M83.14,41.87c-2.88-6.23-5.72-12.07-8.27-18.04-3.9-9.12-.74-18.12,7.5-21.94,9.02-4.18,18.69-.7,22.93,8.58,8.01,17.56,15.81,35.2,23.7,52.81,9.11,20.35,18.22,40.69,27.3,61.05,4.78,10.72.97,20.7-9.09,24.05-7.56,2.52-15.02-.11-18.75-7.2-3.63-6.91-6.78-14.09-10.01-21.21-11.74-25.91-23.43-51.84-35.31-78.11Z" />
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className="text-main font-semibold transition-colors hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              href="/#projects"
              className="text-main font-semibold transition-colors hover:text-gray-700"
            >
              Projects
            </Link>
            {
              //TODO: Add back in later
              /* <Link
              href="/about"
              className="text-main font-semibold transition-colors hover:text-gray-700"
            >
              About me
            </Link> */
            }
            <a
              href="mailto:wout.klee1@gmail.com"
              className="text-main font-semibold transition-colors hover:text-gray-700"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="p-2 text-gray-700 hover:text-gray-900 md:hidden">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
