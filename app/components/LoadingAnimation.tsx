"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center">
        <motion.div
          className="w-32 h-32 mx-auto mb-8 relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border border-white/20"></div>
          <div className="absolute inset-2 rounded-full border border-white/40"></div>
          <div className="absolute inset-4 rounded-full border border-white/60"></div>
          <motion.div
            className="absolute inset-6 rounded-full bg-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.h1
          className="text-4xl font-light text-white mb-4 tracking-wider"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Sameer Baiju
        </motion.h1>

        <motion.p
          className="text-white/60 mb-8 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Loading Portfolio
        </motion.p>

        <div className="w-64 h-px bg-white/20 mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          className="text-white/40 mt-4 font-light text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  )
}
