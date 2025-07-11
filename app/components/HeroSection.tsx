"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Code, Shield } from "lucide-react" // Ensure these are imported for skill icons
import FallingDotsBackground from "./FallingDotsBackground" // Import the FallingDotsBackground

export default function HeroSection() {
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    // This component mounts after the splash screen fades out.
    // We can use a small delay here if needed, but framer-motion handles fade-in.
    setAnimationComplete(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-8 overflow-hidden bg-black text-white"
    >
      {/* Falling Dots Background specific to HeroSection */}
      <FallingDotsBackground />

      {/* Subtle background glow from previous version, adapted for dark theme */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #ff6b35 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-5"
          style={{
            background: "radial-gradient(circle, #f7931e 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: 3,
          }}
        />
      </div>

      <div className="relative z-10 text-center md:text-left max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12">
        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold  leading-none mb-6">
            <span className="text-[#FF6B35]">FULL-STACK</span>
            <br />
            <span className="text-white">DEVELOPER</span>
          </h1>

          {/* Tagline/Description */}
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 max-w-lg">
            Hi! I'm <span className="text-white font-medium">Sameer Baiju</span>  , a Full-Stack Developer with hands-on experience through building high-performance,
            scalable, and responsive web solutions with a strong focus on AI integration and cybersecurity.
          </p>

          {/* Resume Button */}
          <motion.a
            href="/SameerBaijuOriginal.pdf"
            download
            className="group relative overflow-hidden px-10 py-4 bg-[#FF6B35] text-white font-bold tracking-wider uppercase transition-all duration-300 hover:bg-opacity-90 active:scale-95 inline-block cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ borderRadius: "2px" }}
          >
            <span className="relative z-10">RESUME</span>
          </motion.a>
        </motion.div>

        {/* Right Section for Skills/Quote, adapted to fit the minimalist style */}
        <motion.div
          className="hidden md:flex flex-col items-end text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.7 }}
        >
          <div className="flex flex-col items-center space-y-8 mt-auto mb-20 text-white/80">
            {/* Subtle skill icons */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col space-y-4"
            >
              <div className="flex items-center space-x-2 text-white/60">
                <Code className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm font-sans-body">Scalable Web Apps</span>
              </div>
              <div className="flex items-center space-x-2 text-white/60">
                <Shield className="w-5 h-5 text-[#FF6B35]" />
                <span className="text-sm font-sans-body">Cybersecurity Focus</span>
              </div>
            </motion.div>

            {/* Quoted text */}
            <motion.p
              className="text-white/60 text-lg font-light leading-relaxed max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <span className="text-[#FF6B35] text-xl">&lt;span&gt;</span>
              <br />
              Proficient in the latest web technologies and frameworks, continuously expanding my skill set to stay at
              the forefront of the industry.
              <br />
              <span className="text-[#FF6B35] text-xl">&lt;/span&gt;</span>
            </motion.p>
          </div>
        </motion.div>
      </div>



      {/* Subtle scroll indicator */}
      <motion.div
        className="absolute bottom-16 right-4 md:right-8 flex flex-col items-center space-y-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      >
        <span className="text-white/60 text-xs font-mono rotate-90 origin-bottom-left tracking-wider">SCROLL</span>
        <motion.div
          className="w-px h-16 bg-white/40"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  )
}
