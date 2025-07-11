"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1.5
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center">
        {/* Enhanced Animated Logo */}
        <motion.div
          className="mb-20"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <motion.div
            className="text-[8rem] md:text-[12rem] font-light text-white tracking-[0.1em] font-mono relative"
            animate={{
              textShadow: [
                "0 0 40px rgba(239, 68, 68, 0.3)",
                "0 0 80px rgba(239, 68, 68, 0.6)",
                "0 0 40px rgba(239, 68, 68, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            SB
            {/* Geometric accent */}
            <motion.div
              className="absolute -top-4 -right-4 w-3 h-3 border border-red-500/40"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />
          </motion.div>
        </motion.div>

        {/* Enhanced Progress Bar */}
        <motion.div
          className="w-96 h-px bg-white/10 mx-auto overflow-hidden relative"
          initial={{ width: 0 }}
          animate={{ width: 384 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-red-500 to-red-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />

          {/* Progress glow effect */}
          <motion.div
            className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-red-400/60 to-transparent"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-white/60 mt-12 font-light text-sm tracking-[0.4em] font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          LOADING PORTFOLIO
        </motion.p>

        {/* Enhanced Progress Percentage */}
        <motion.div
          className="mt-8 flex items-center justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-8 h-px bg-red-500/30" />
          <p className="text-red-400/80 font-light text-lg font-mono min-w-[3rem] text-center">
            {Math.round(progress)}%
          </p>
          <div className="w-8 h-px bg-red-500/30" />
        </motion.div>
      </div>
    </motion.div>
  )
}
