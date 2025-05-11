'use client'
import { headerLeftVariants } from '../components/variants'
import { motion, useInView } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import { AuroraText } from '@/components/magicui/aurora-text'
import { forwardRef, useRef, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Hero = forwardRef<HTMLDivElement, object>(() => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set mounted to true after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])

  // Define theme-based colors
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
    <div
      ref={ref}
      className="flex h-screen max-w-7xl flex-col items-center gap-0.5 md:flex-row lg:px-12"
    >
      <div className="relative m-auto h-[300px] w-[300px] sm:m-32 sm:h-[400px] sm:w-[400px]">
        <Image
          src="/assets/pfp.jpg" 
          alt="Wout Klee portrait"
          fill
          sizes="(max-width: 640px) 300px, 400px"
          priority //  loads the image immediately 
          className="hero-img object-cover"
          quality={80} // Adjust quality to balance between performance and appearance
        />
      </div>
      <div className="text-center md:max-w-2xl lg:text-left">
        <motion.h1
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          className="dark:text-foreground text-3xl font-bold md:mb-1 md:text-5xl xl:text-6xl"
        >
          Hi{' '}
          <span className="wave-animation img waving hand mx-2 mr-0 ml-0 sm:-ml-2 md:-ml-4">
            👋
          </span>
          , I&apos;m <AuroraText colors={getColors()}>Wout Klee</AuroraText>
        </motion.h1>
        <motion.h2
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          className="mb-3 text-center text-xl font-semibold text-[#171717] md:text-left md:text-2xl xl:text-3xl dark:text-white"
        >
          Junior{' '}
          <AuroraText colors={getColors()} className="font-bold">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Frontend Developer',
                'Backend Developer',
                'Smart App Developer',
              ]}
            />
          </AuroraText>
        </motion.h2>

        <motion.p
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          className="mb-16 max-w-xl text-xl md:mb-0 md:text-lg xl:text-xl"
        >
          I&apos;m a 20 year old Belgian web developer, currently studying{' '}
          <a
            href="https://mct.be/"
            className="font-bold text-[#33a3f4] hover:underline dark:text-[#a78bfa]"
            target="_blank"
          >
            MCT
          </a>{' '}
          (Multimedia &amp; Creative Technologies) at Howest.
        </motion.p>
      </div>
    </div>
  )
})

Hero.displayName = 'Hero'

export default Hero
