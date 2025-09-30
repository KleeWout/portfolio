'use client'

import { cn } from '../../../lib/utils'
import {
  IconLayoutNavbarCollapse,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { useTheme } from 'next-themes'

export const FloatingHeader = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  desktopClassName?: string
  mobileClassName?: string
}) => {
  return (
    <>
      <FloatingHeaderDesktop items={items} className={desktopClassName} />
      <FloatingHeaderMobile items={items} className={mobileClassName} />
    </>
  )
}

const FloatingHeaderMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const [open, setOpen] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <div className={cn('relative block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#eeeeee] text-black"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </Link>
              </motion.div>
            ))}

            {/* theme switcher */}
            <motion.div
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-[#eeeeee]"
            >
              <AnimatePresence>
                {
                  <motion.div
                    initial={{ opacity: 0, y: 10, x: '-50%' }}
                    animate={{ opacity: 1, y: 0, x: '-50%' }}
                    exit={{ opacity: 0, y: 2, x: '-50%' }}
                    className="text:black absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border border-neutral-100 bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre"
                  >
                    {`${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
                  </motion.div>
                }
              </AnimatePresence>
              <motion.div className="flex items-center justify-center">
                <IconSun className="hidden text-white" />
                <IconMoon className="block text-black" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#33a3f4] bg-[#f8fafc] text-black"
        aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5" />
      </button>
    </div>
  )
}

const FloatingHeaderDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[]
  className?: string
}) => {
  const mouseX = useMotionValue(Infinity)
  return (
    <motion.div
      onMouseMove={e => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto hidden h-16 items-end gap-4 rounded-2xl border border-[#33a3f4] bg-[#f8fafc] p-2.5 px-4 pb-3 transition-colors duration-200 hover:border-[#33a4f494] md:flex',
        className,
      )}
    >
      {items.map(item => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      <ThemeSwitcher mouseX={mouseX} />
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue
  title: string
  icon: React.ReactNode
  href: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  )
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-[#eeeeee]"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border border-neutral-100 bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre text-black"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  )
}
function ThemeSwitcher({ mouseX }: { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, val => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  )
  const heightTransformIcon = useTransform(
    distance,
    [-150, 0, 150],
    [20, 40, 20],
  )

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const [hovered, setHovered] = useState(false)
  const { setTheme, theme } = useTheme()

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-[#eeeeee]"
    >
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 2, x: '-50%' }}
            className="text:black absolute -top-8 left-1/2 w-fit -translate-x-1/2 rounded-md border border-neutral-100 bg-neutral-200 px-2 py-0.5 text-xs whitespace-pre"
          >
            {`${theme === 'dark' ? 'Light' : 'Dark'} Theme`}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        style={{ width: widthIcon, height: heightIcon }}
        className="flex items-center justify-center"
      >
        <IconSun className="hidden text-white" />
        <IconMoon className="block text-black" />
      </motion.div>
    </motion.div>
  )
}
