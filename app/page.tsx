"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProjectsSection from "./components/ProjectsSection"
import ContactSection from "./components/ContactSection"
import Navigation from "./components/Navigation"
import CustomCursor from "./components/CustomCursor"
import SplashScreen from "./components/SplashScreen"
import FallingDotsBackground from "./components/FallingDotsBackground"
import SkillsShowcase from "./components/SkillsShowcase"
import SkillsSection from "./components/SkillsSection"

export default function Portfolio() {
  const [showSplash, setShowSplash] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Falling Dots Background */}
      <FallingDotsBackground />

      {/* Custom Cursor */}
      <CustomCursor />

      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10"
          >
            <Navigation currentSection={currentSection} />
            <HeroSection />
            <AboutSection />
            <SkillsShowcase />
          
            <ProjectsSection />
            <ContactSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
