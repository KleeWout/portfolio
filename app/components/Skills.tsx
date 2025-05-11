'use client'

//Get data and sen this to TechCard component
import { techCardsItems } from '../../lib/constants'
import TechCard from './TechCard'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { headerLeftVariants } from './variants'


const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })

  return (
    <div
      ref={ref}
      className="relative z-10 mx-auto max-w-[80rem] px-4 py-16 sm:py-24 min-h-screen"
      id="about"
    >
      <div className="mb-10 w-fit space-y-4">
      <motion.h1
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={headerLeftVariants}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-3xl font-bold min-[430px]:text-4xl md:text-5xl dark:text-stone-200"
      >
        Current technologies
      </motion.h1>
      <motion.p
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        variants={headerLeftVariants}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="text-dark-200/70 max-w-lg text-sm min-[430px]:text-base md:max-w-3xl dark:text-stone-200/70"
      >
        I&apos;m proficient in a range of modern technologies that empower me
        to build highly functional solutions. These are some of my main
        technologies.
      </motion.p>
      </div>

      <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="-500 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
      {techCardsItems.map(cardItem => (
        <TechCard key={cardItem.name} cardInfo={cardItem} />
      ))}
      </motion.div>
    </div>
  )
}

export default Skills
