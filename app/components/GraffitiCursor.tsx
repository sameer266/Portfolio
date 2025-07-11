"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function GraffitiCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClicking, setIsClicking] = useState(false)
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add to trail
      setTrail((prev) => [...prev.slice(-10), { x: e.clientX, y: e.clientY, id: Date.now() }])
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-50 w-2 h-2 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            background: `hsl(${(index * 30) % 360}, 70%, 60%)`,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-6 h-6 border-2 border-orange-500 rounded-full bg-orange-500/20 backdrop-blur-sm" />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="w-10 h-10 border-2 border-orange-400/50 rounded-full" />
      </motion.div>
    </>
  )
}
