"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setShowSplash(false), 800) // match fade duration
    }, 2500) // Show splash for 2.5 seconds
    return () => clearTimeout(timer)
  }, [])

  if (!showSplash) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Elliptical Red Fade Background Element */}
      <motion.div
        className="absolute w-[150vw] h-[150vw] rounded-full" // Large circle, covers screen diagonally
        style={{
          background: "#8B0000", // Deep red color
          filter: "blur(100px)", // Blur to make it a soft glow/fade
        }}
        initial={{
          top: "-50%", // Start off-screen top-right
          right: "-50%",
          opacity: 0,
        }}
        animate={{
          top: "50%", // Move to bottom-left
          right: "50%",
          opacity: [0, 0.6, 0.8, 0.6, 0], // Fade in and out
        }}
        transition={{
          duration: 3, // Duration of the fade effect
          ease: "easeInOut",
          delay: 0.1,
          times: [0, 0.2, 0.5, 0.8, 1], // Control opacity keyframes
        }}
      />
      <div className="text-center">
        {/* Main Logo - SB with subtle animation */}
        <motion.h1
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white tracking-[0.05em] leading-none relative font-serif-display"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: !fadeOut ? 1 : 0, scale: !fadeOut ? 1 : 0.8 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        >
          <motion.span
            className="inline-block"
            animate={{
              textShadow: [
                "0 0 40px rgba(255, 255, 255, 0.1)",
                "0 0 80px rgba(255, 255, 255, 0.2)",
                "0 0 40px rgba(255, 255, 255, 0.1)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 0.7,
            }}
          >
            SB
          </motion.span>
        </motion.h1>

        {/* Professional title appearing after SB */}
        <motion.p
          className="text-xl md:text-2xl text-white/80 font-extrabold tracking-[0.1em] mt-8 font-sans-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: !fadeOut ? 1 : 0, y: !fadeOut ? 0 : 20 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          SOFTWARE & AI | CYBERSECURITY
        </motion.p>
      </div>
    </motion.div>
  )
}
