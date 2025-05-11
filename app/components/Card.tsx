import { motion, MotionValue, useScroll, useTransform } from 'framer-motion'
import { IconLink } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import ProjectTechnologieItem from './ui/ProjectTechnologieItem'
import { useTheme } from 'next-themes'

type Project = {
  id: number
  name: string
  subtitle?: string
  technologies: string[]
  description: string
  link?: string
  liveAppLink?: string
  imagePath: string,
  imagePathDark?: string
}

type Props = {
  data: Project
  index: number
  range: [number, number]
  targetScale: number
  globalProgress: MotionValue<number>
}

const Card: React.FC<Props> = ({
  data,
  range,
  index,
  targetScale,
  globalProgress,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [currentImage, setCurrentImage] = useState<string>(data.imagePath)
  
  // Set mounted to true after component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return;
    
    // Use resolvedTheme which is more reliable than theme
    const currentTheme = resolvedTheme || theme;
    
    if (currentTheme === 'dark' && data.imagePathDark) {
      setCurrentImage(data.imagePathDark);
    } else {
      setCurrentImage(data.imagePath);
    }
  }, [theme, resolvedTheme, data.imagePath, data.imagePathDark, mounted])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const variants = {
    initial: { translateY: 30, opacity: 0 },
    enter: { translateY: 0, opacity: 1 },
  }

  const imageOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

  const cardScale = useTransform(globalProgress, range, [1, targetScale])

  const {
    id,
    description,
    link,
    name,
    subtitle,
    technologies,
  } = data

  return (
    <motion.div
      ref={containerRef}
      style={{
        top: `calc(10% + ${index * 25}px)`,
      }}
      className="sticky h-[100vh] cursor-auto font-sans"
      key={id}
      variants={variants}
      initial="initial"
      animate="enter"
    >
      <motion.div
        style={{
          scale: cardScale,
        }}
        className={`h-auto w-[300px] gap-4 overflow-hidden rounded-xl p-10 text-black sm:w-[500px] md:flex md:w-[1000px] md:justify-between dark:text-white ${index % 2 === 0 ? 'bg-[#eff1f4] dark:bg-[#262626]' : 'bg-[#d9dbdd] dark:bg-[#353535]'} `}
      >
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale }}
          className="flex items-center justify-center md:w-[400px]"
        >
          <Image
            className="h-auto w-full rounded-xl object-cover"
            width={0}
            height={0}
            src={currentImage}
            alt="project-1"
            sizes="100vw"
          />
        </motion.div>
        <div className="md:w-[500px]">
          <h1 className="mt-2 text-2xl font-bold tracking-widest uppercase md:text-4xl">
            {name}
          </h1>
          <p className="my-2 text-xl tracking-widest">{subtitle}</p>
          <div className="mb-1 flex flex-wrap gap-2">
            {technologies.map((tech, i) => (
              <ProjectTechnologieItem key={i} title={tech} />
            ))}
          </div>
          <p>{description}</p>

          <div className="mt-2 flex justify-between">
            {link ? (
              <div className="flex gap-1">
                <IconLink />
                <Link target="_blank" href={link}>
                  Link
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Card
