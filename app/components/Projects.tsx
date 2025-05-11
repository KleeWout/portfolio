import { useScroll } from 'framer-motion'
import { useRef } from 'react'
import { projects } from '../data'
import Card from './Card'

export default function Projects() {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const Cards = () => (
    <>
      {projects.map((data, i) => {
        const startRange = 100 / projects.length / 100
        const targetScale = 1 - (projects.length - i) * 0.05
        return (
          <Card
            index={i}
            key={i}
            data={data}
            range={[startRange, 1]}
            targetScale={targetScale}
            globalProgress={scrollYProgress}
          />
        )
      })}
    </>
  )

  return (
    <div
      ref={container}
      id="projects"
      className="cursor-auto border-y border-gray-800 bg-slate-50 px-6 pt-16 pb-8 md:cursor-none dark:border-gray-200 dark:bg-neutral-900"
    >
      <h1 className="mt-5 mb-10 text-center text-3xl font-bold tracking-widest break-words text-white uppercase mix-blend-difference sm:text-4xl md:text-5xl lg:text-6xl">
        Projects
      </h1>
      <div className="flex flex-col items-center">
        <Cards />
      </div>
    </div>
  )
}
