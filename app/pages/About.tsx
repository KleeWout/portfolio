'use client'

import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const headingRef = useRef(null)
  const firstParaRef = useRef(null)
  const secondParaRef = useRef(null)
  const imageRef = useRef(null)

  const headingInView = useInView(headingRef, { once: true })
  const firstParaInView = useInView(firstParaRef, { once: true })
  const secondParaInView = useInView(secondParaRef, { once: true })
  const imageInView = useInView(imageRef, { once: true })

  return (
    <div className="sm-bg-image relative flex h-screen flex-col overflow-y-auto bg-black p-2 md:flex-row">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#000000a8] to-black md:hidden"></div>

      <div className="relative flex h-full w-full flex-col items-center justify-center p-5 text-center md:w-1/2">
        <motion.h1
          ref={headingRef}
          className="mistrully text-4xl text-white drop-shadow-md"
          initial={{ scale: 0 }}
          animate={headingInView ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        >
          Little About Me
        </motion.h1>

        <motion.p
          ref={firstParaRef}
          className="mt-5 text-balance text-white"
          initial={{ x: '-100%', opacity: 0 }}
          animate={firstParaInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          I am currently pursuing a BCA degree at Sikkim Manipal Institute of
          Technology. What started as a fun exploration into web technologies
          has now become a true passion for me.
          <br />
        </motion.p>

        <motion.p
          ref={secondParaRef}
          className="mt-2 text-balance text-white"
          initial={{ x: '-100%', opacity: 0 }}
          animate={secondParaInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Alongside my technical pursuits, I have a creative side—I enjoy
          writing poetry and stories, finding inspiration in both the digital
          and literary worlds.
        </motion.p>
      </div>

      <motion.div
        ref={imageRef}
        className="relative hidden w-full p-2 md:block md:w-1/2"
        initial={{ opacity: 0 }}
        animate={imageInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1713429237253-8d786de46f31?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={400}
          height={500}
          className="pointer-events-none h-full w-full rounded-xl object-cover"
          alt="Image Source: Unsplash"
        />
        <span className="absolute right-5 bottom-5 text-black">
          Image Source:{' '}
          <a
            href="https://unsplash.com/photos/a-large-body-of-water-surrounded-by-mountains-lGBBBXtdO1k"
            target="_blank"
            className="cursor-pointer underline"
          >
            Unsplash
          </a>
        </span>
      </motion.div>
    </div>
  )
}
