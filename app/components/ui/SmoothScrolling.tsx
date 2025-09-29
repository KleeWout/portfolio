'use client'
import { ReactLenis } from 'lenis/react'
import { useEffect } from 'react'
import Lenis from 'lenis'

// function SmoothScrolling({ children }: { children: React.ReactNode }) {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
//       {children}
//     </ReactLenis>
//   )
// }

// export default SmoothScrolling

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Cleanup
    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
