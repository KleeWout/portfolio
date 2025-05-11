import { SpringOptions, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function useCustomCursor(options?: { offsetX?: number; offsetY?: number }) {
  const [hovered, setHovered] = useState(false);
  const CURSOR_SIZE = hovered ? 50 : 30;
  
  // Default offsets to 0 if not provided
  const offsetX = options?.offsetX || 10;
  const offsetY = options?.offsetY || 10;

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouseOptions: SpringOptions = {
    damping: 90,
    stiffness: 300,
    mass: 0.5,
  };

  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothMouseOptions),
    y: useSpring(mousePosition.y, smoothMouseOptions),
  };

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    // Apply the offsets here
    mousePosition.x.set(clientX - CURSOR_SIZE / 2 + offsetX);
    mousePosition.y.set(clientY - CURSOR_SIZE / 2 + offsetY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return {
    hovered,
    setHovered,
    CURSOR_SIZE,
    smoothMouse,
  };
}
