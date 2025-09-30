'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { IconArrowLeft, IconHome } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { AuroraText } from '@/components/magicui/aurora-text'

export default function NotFound() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Define theme-based colors (same as in Hero.tsx)
  const getLightColors = () => ['#0475f3', '#27a5f6'] // Blue for light mode
  const getDarkColors = () => ['#8b5cf6', '#a78bfa'] // Purple for dark mode

  // Use the appropriate colors based on the current theme
  const getColors = () => {
    if (!mounted) return getLightColors() // Default to light colors before mounting
    return theme === 'dark' || resolvedTheme === 'dark'
      ? getDarkColors()
      : getLightColors()
  }

  return (
    <div className="grid-background flex h-screen flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AuroraText colors={getColors()} className="text-8xl font-bold">
          404
        </AuroraText>
      </motion.div>

      <motion.h2
        className="mt-6 text-2xl font-semibold md:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Page Not Found
      </motion.h2>

      <motion.p
        className="mt-4 max-w-md text-lg text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="/"
          className="flex items-center justify-center rounded-lg border border-[#33a3f4] bg-[#f8fafc] px-5 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-[#e8f4fd]"
        >
          <IconHome className="mr-2 h-5 w-5" />
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="flex items-center justify-center rounded-lg border border-[#33a3f4] bg-transparent px-5 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-[#f8fafc]"
        >
          <IconArrowLeft className="mr-2 h-5 w-5" />
          Go Back
        </button>
      </motion.div>
    </div>
  )
}
