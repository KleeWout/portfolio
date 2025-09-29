// import { useScroll } from 'framer-motion'
// import { useRef } from 'react'
// import { projects } from '../data'
// import Card from './Card'

// export default function Projects() {
//   const container = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start start', 'end end'],
//   })

//   const Cards = () => (
//     <>
//       {projects.map((data, i) => {
//         const startRange = 100 / projects.length / 100
//         const targetScale = 1 - (projects.length - i) * 0.05
//         return (
//           <Card
//             index={i}
//             key={i}
//             data={data}
//             range={[startRange, 1]}
//             targetScale={targetScale}
//             globalProgress={scrollYProgress}
//           />
//         )
//       })}
//     </>
//   )
//   // #211e1f - dark background
//   return (
//     <div
//       ref={container}
//       id="projects"
//       className="cursor-auto border-y border-gray-800 bg-[#d9d7cb] px-6 pt-16 pb-8"
//     >
//       <h1 className="mt-5 mb-10 text-center text-3xl font-bold tracking-widest break-words text-[#211e1f] uppercase sm:text-4xl md:text-5xl lg:text-6xl">
//         Projects
//       </h1>
//       <div className="flex flex-col items-center">
//         <Cards />
//       </div>
//     </div>
//   )
// }

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { projects } from '../data'

export default function HorizontalScrollProjects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const scroller = scrollerRef.current

    if (!container || !scroller) return

    const handleScroll = () => {
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const scrollerWidth = scroller.scrollWidth
      const viewportWidth = window.innerWidth
      const scrollableWidth = scrollerWidth - viewportWidth

      // Calculate how far we've scrolled from the top of the page
      const scrollY = window.scrollY

      // Calculate the start and end points for the horizontal scroll
      const scrollStart = containerTop
      const scrollEnd = containerTop + containerHeight - window.innerHeight

      // Check if we're in the scrolling zone
      if (scrollY >= scrollStart && scrollY <= scrollEnd) {
        // Calculate progress through the horizontal scroll (0 to 1)
        const progress = (scrollY - scrollStart) / (scrollEnd - scrollStart)

        // Apply horizontal translation
        const translateX = progress * scrollableWidth
        scroller.style.transform = `translateX(-${translateX}px)`
      }
    }

    // Initial check
    handleScroll()

    // Add scroll listener
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative bg-[#d9d7cb]"
      style={{
        height: `${400}vh`, // Adjust this to control scroll duration
      }}
      id="projects"
    >
      <div className="sticky top-10 h-screen overflow-hidden">
        <h1 className="pointer-events-none absolute top-8 left-1/2 z-10 -translate-x-1/2 text-center text-3xl font-bold tracking-widest text-[#211e1f] uppercase mix-blend-difference sm:text-4xl md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <div
          ref={scrollerRef}
          className="flex h-full items-center gap-8 px-8 transition-transform duration-100 ease-out will-change-transform"
        >
          {projects.map(project => (
            <a
              key={project.id}
              href={project.link}
              className="relative h-[600px] w-[900px] flex-shrink-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg">
                <Image
                  src={project.imagePath}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-300" />
                <div className="absolute right-0 bottom-0 left-0 translate-y-0 transform p-6 text-white transition-transform duration-300">
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span
                        key={tech}
                        className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-4 inline-block text-sm">
                    View Project →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
