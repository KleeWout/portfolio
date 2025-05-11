'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconWorldWww,
  IconMailSpark,
} from '@tabler/icons-react'
import Hero from './pages/Hero'
import { FloatingHeader } from './components/ui/floating-header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useTheme } from 'next-themes'

// import TechStack from "./pages/TechStack";
// import Footer from "./pages/Footer";
// import Hack from "./pages/Hack";
// import useCustomCursor from "./hooks/useCustomCursor";

export default function Page() {
  const { setTheme} = useTheme()
  // const { CURSOR_SIZE, setHovered, smoothMouse } = useCustomCursor();

  //see when the home and footer are in view --> animations
  const homeRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  //true when 75% of the element is in view
  const isHomeInView = useInView(homeRef, { amount: 0.75 })
  const isFooterInView = useInView(footerRef, { amount: 0.1 })

  //Animation states for Framer Motion component
  const variants = {
    hidden: { opacity: 0, scale: 0.5, y: 100, x: '-50%' },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: '-50%',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 15,
      },
    },
  }

  const links = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-black dark:text-white" />,
      href: '/',
    },
    {
      title: 'Projects',
      icon: (
        <IconWorldWww className="h-full w-full text-black dark:text-white" />
      ),
      href: '#projects', // scrolls to Projects section TODO: smooth scroll
    },
    {
      title: 'Contact',
      icon: (
        <IconMailSpark className="h-full w-full text-black dark:text-white" />
      ),
      href: 'mailto:wout.klee1@gmail.com',
    },
    //TODO: hide email
    {
      title: 'LinkedIn',
      icon: (
        <IconBrandLinkedin className="h-full w-full text-black dark:text-white" />
      ),
      href: '/',
    },

    {
      title: 'GitHub',
      icon: (
        <IconBrandGithub className="h-full w-full text-black dark:text-white" />
      ),
      href: '',
    },
  ]

  return (
    <div className="grid-background">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={!isHomeInView && !isFooterInView ? 'visible' : 'hidden'}
        className="fixed right-0 bottom-10 left-auto z-50 transform sm:right-auto sm:left-1/2"
      >
        <FloatingHeader items={links} />
      </motion.div>
      <div ref={homeRef}>
        <Hero />
      </div>

      <Projects />
      <Skills />
      <div className="flex gap-4 p-4">
        <button
          onClick={() => setTheme('light')}
          className="rounded-md bg-neutral-200 px-4 py-2 text-neutral-800 hover:bg-neutral-300"
        >
          Light
        </button>
        <button
          onClick={() => setTheme('dark')}
          className="rounded-md bg-neutral-800 px-4 py-2 text-neutral-200 hover:bg-neutral-700"
        >
          Dark
        </button>
      </div>

      {/* <TechStack /> */}
      {/* <Hack /> */}
      {/* <Footer ref={footerRef} /> */}
      {/* custom mouse */}
      {/* <motion.div initial={false} animate={{width: CURSOR_SIZE, height: CURSOR_SIZE, }} style={{top: smoothMouse.y, left: smoothMouse.x,}} transition={{type: "spring",damping: 20,stiffness: 300,}}className="hidden md:block bg-blue-500 rounded-full fixed pointer-events-none"></motion.div> */}

      {/* <Analytics /> */}
    </div>
  )
}
