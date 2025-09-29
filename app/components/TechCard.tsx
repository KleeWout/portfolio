import { div } from 'framer-motion/client'
import Image from 'next/image'
import {
  backendTechStack,
  cloudTechStack,
  frontendTechStack,
} from '../../lib/constants'
import { useState } from 'react'

const TechCard = ({
  cardInfo: { name, description, imageUrl, bgColor },
}: {
  cardInfo: {
    name: string
    description: string
    imageUrl: string
    bgColor: string
  }
}) => (
  <div className="flex min-h-[100px] items-center gap-5 rounded-xl border border-[#33a3f4] bg-[#FAFAFA] p-2.5 transition-colors duration-200 hover:border-[#689ec4] hover:bg-[#F4F4F7]/90 dark:border-[#7262a5] dark:bg-[#202023]/90 dark:hover:border-[#8978c5] dark:hover:bg-[#262626]">
    <div className={`p-3 ${bgColor} w-fit rounded-lg`}>
      <Image
        src={imageUrl}
        width={1000}
        height={1000}
        alt={`${name} logo`}
        className={`size-8 ${name === 'NextJS' ? 'dark:invert' : ''}`}
      />
    </div>
    <div>
      <h1 className="text-lg font-medium dark:text-stone-100">{name}</h1>
      <p className="text-dark-200/70 text-sm dark:text-[#d7dde4]">
        {description}
      </p>
    </div>
  </div>
)

const SkillCard = ({
  name,
  description,
  techStack,
}: {
  name: string
  description: string
  techStack: Array<{
    name: string
    imageUrl: string
    bgColor: string
  }>
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  return (
    <div className="fade-in glass-effect mt-0 flex w-full flex-col gap-8 rounded-md p-5">
      <div>
        <h1 className="text-xl font-semibold">{name}</h1>
        <h2 className="mt-2 w-full break-words whitespace-pre-line">
          {description}
        </h2>
      </div>
      <div className="flex flex-wrap gap-4">
        {techStack.map(item => (
          <div
            className={`p-3 ${item.bgColor} relative w-fit rounded-lg transition-transform duration-200 hover:scale-110`}
            key={item.name}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              src={item.imageUrl}
              width={1000}
              height={1000}
              alt={`${item.name} logo`}
              className={`size-8 ${item.name === 'NextJS' ? 'dark:invert' : ''} transition-transform duration-200 hover:scale-110`}
            />
            {hoveredItem === item.name && (
              <div className="absolute -top-12 left-1/2 z-10 -translate-x-1/2 transform">
                <div className="rounded-md bg-gray-800 px-3 py-2 text-sm whitespace-nowrap text-white">
                  {item.name}
                  <div className="absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-4 border-r-4 border-l-4 border-transparent border-t-gray-800"></div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export { TechCard, SkillCard }
