'use client'

import { useEffect, useState } from 'react'

export default function PageTransition() {
  const [isAnimating, setIsAnimating] = useState(true)

  useEffect(() => {
    // Prevent scrolling during animation
    document.body.style.overflow = 'hidden'

    // End animation after panel slides in
    const timer = setTimeout(() => {
      setIsAnimating(false)
      // Re-enable scrolling
      document.body.style.overflow = 'unset'
    }, 20)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <div
      className={`absolute top-0 right-0 left-0 h-[50vh] bg-[#d9d7cb] transition-transform duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] md:h-[70vh] lg:h-screen ${
        isAnimating ? 'z-10 translate-y-full' : '-z-10 translate-y-0'
      }`}
    />
  )
}
