'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconMailSpark,
  IconFolders,
} from '@tabler/icons-react'
import Hero from './pages/Hero'
import { FloatingHeader } from './components/ui/floating-header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import useCustomCursor from './hooks/useCustomCursor'
import Footer from './components/Footer'

export default function Page() {
  // const { CURSOR_SIZE, smoothMouse } = useCustomCursor()

  // //see when the home and footer are in view --> animations
  // const homeRef = useRef<HTMLDivElement>(null)
  // const footerRef = useRef<HTMLDivElement>(null)
  // const projectsRef = useRef<HTMLDivElement>(null)

  //true when 75% of the element is in view
  // const isHomeInView = useInView(homeRef, { amount: 0.75 })
  // const isFooterInView = useInView(footerRef, { amount: 0.2 })

  //Animation states for Framer Motion component
  // const links = [
  //   {
  //     title: 'Home',
  //     icon: <IconHome className="h-full w-full text-black dark:text-white" />,
  //     href: '/',
  //   },
  //   {
  //     title: 'Projects',
  //     icon: (
  //       <IconFolders className="h-full w-full text-black dark:text-white" />
  //     ),
  //     href: '#projects',
  //     onClick: (e: React.MouseEvent) => {
  //       e.preventDefault()
  //       projectsRef.current?.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  //       })
  //     },
  //   },
  //   {
  //     title: 'Contact',
  //     icon: (
  //       <IconMailSpark className="h-full w-full text-black dark:text-white" />
  //     ),
  //     href: 'mailto:wout.klee1@gmail.com',
  //   },
  //   //TODO: hide email
  //   {
  //     title: 'LinkedIn',
  //     icon: (
  //       <IconBrandLinkedin className="h-full w-full text-black dark:text-white" />
  //     ),
  //     href: 'https://www.linkedin.com/in/wout-klee-454513365/',
  //   },

  //   {
  //     title: 'GitHub',
  //     icon: (
  //       <IconBrandGithub className="h-full w-full text-black dark:text-white" />
  //     ),
  //     href: 'https://github.com/KleeWout',
  //   },
  // ]

  return (
    // <div className="">
    //   <Hero />
    //   <Projects />
    //   <Skills />
    // </div>
    <div className="">
      <div className="m-auto max-w-7xl">
        <Hero />
      </div>

      <div>
        <Projects />
      </div>
      <Skills />
      <Footer />
    </div>
  )
}
