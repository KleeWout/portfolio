'use client'
import { headerLeftVariants } from '../components/variants'
import { motion, useInView } from 'framer-motion'
import Typewriter from '../components/Typewriter'
import { AuroraText } from '@/components/magicui/aurora-text'
import { forwardRef, useRef } from 'react'



const Hero = forwardRef<HTMLDivElement, {}>((props, forwardedRef) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })
  return (
   
    <div ref={ref} className="flex h-screen items-center gap-0.5 lg:px-12">
      {/* Image */}
      {/* Text */}
      <div className="hero-img flex"></div>
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
          , I'm{' '}
          <AuroraText colors={['#0475f3', '#27a5f6']}>Wout Klee</AuroraText>
        </motion.h1>

        <motion.h2
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          className="mb-3 text-left text-xl font-semibold text-[#171717] md:text-2xl xl:text-3xl dark:text-white"
        >
          Junior{' '}
          <AuroraText colors={['#0475f3', '#27a5f6']}>
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
          className="dark:text-foreground max-w-xl text-xl md:text-lg xl:text-xl"
        >
          I'm a 20 year old Belgian web developer, currently studying{' '}
          <a
            href="https://mct.be/"
            className="text-own-primary-500 hover:text-own-primary-600 dark:text-own-primary-400 dark:ring-own-neutral-200 dark:hover:text-own-primary-500"
            target="_blank"
          >
            MCT
          </a>{' '}
          (Multimedia & Creative Technologies) at Howest.
        </motion.p>
      </div>
    </div>
    // </motion.div>
  )
})

export default Hero
