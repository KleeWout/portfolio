'use client'

//Get data and sen this to TechCard component
import {
  backendTechStack,
  cloudTechStack,
  frontendTechStack,
  techCardsItems,
} from '../../lib/constants'
import { TechCard, SkillCard } from './TechCard'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

import { headerLeftVariants } from './variants'

const Skills = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.4 })

  return (
    <div
      ref={ref}
      className="relative z-10 mx-auto min-h-screen max-w-[80rem] px-6 py-16 sm:px-8 sm:py-24 md:px-12 lg:px-16"
      id="about"
    >
      <div className="mx-2 mb-10 w-fit space-y-4 sm:mx-4 md:mx-6 lg:mx-8">
        <motion.h1
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-3xl font-bold min-[430px]:text-4xl md:text-5xl dark:text-stone-200"
        >
          My Current Skills
        </motion.h1>
        <motion.p
          initial="initial"
          animate={isInView ? 'animate' : 'initial'}
          variants={headerLeftVariants}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-dark-200/70 max-w-lg text-sm min-[430px]:text-base md:max-w-3xl dark:text-stone-200/70"
        >
          As a student, I&apos;ve been learning and experimenting with various
          tech stacks that help me bring my project ideas to life. Here are the
          technologies I&apos;ve mastered during my studies.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="mx-2 mt-16 flex flex-col gap-8 sm:mx-4 md:mx-6 lg:mx-8"
      >
        {/* First row: Backend and Frontend cards side by side on medium+ screens */}
        <div className="flex flex-col gap-8 sm:flex-col md:flex-row">
          <SkillCard
            name="Backend"
            description="I design and build scalable backend systems that power reliable applications. My focus is on creating secure, maintainable, and high-performance APIs and data models while ensuring smooth integration with other services."
            techStack={backendTechStack}
          />
          <SkillCard
            name="Frontend & Design"
            description="I create responsive and user-friendly web interfaces using modern frameworks and tools. Focused on writing clean, maintainable code."
            techStack={frontendTechStack}
          />
        </div>

        <div className="w-full">
          <SkillCard
            name="Cloud & DevOps"
            description="I focus on deploying and managing applications in the cloud with an emphasis on reliability, scalability, and performance. I ensure efficient delivery and smooth operation of modern applications."
            techStack={cloudTechStack}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
