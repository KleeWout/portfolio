'use client'

import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { AuroraText } from '@/components/magicui/aurora-text'

export default function LoadingScreen() {
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
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <AuroraText
          colors={getColors()}
          className="text-4xl font-bold md:text-5xl"
        >
          Loading...
        </AuroraText>

        <div className="mt-8">
          <motion.div className="h-1.5 w-52 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className="h-full rounded-full bg-[#33a3f4]"
              initial={{ width: '0%' }}
              animate={{
                width: '100%',
                transition: {
                  duration: 1.5,
                  ease: 'easeInOut',
                  repeat: Infinity,
                },
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
