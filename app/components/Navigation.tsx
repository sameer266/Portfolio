"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface NavigationProps {
  currentSection: number
}

export default function Navigation({ currentSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 200); // 200ms delay to allow menu to close
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-40 p- md:p-3 bg-black/60  md:mb-20 backdrop-blur-md shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo/Initials */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-[#FF6B35] font-serif-display tracking-tight select-none">SB</span>
          </div>
          {/* Desktop Navigation (visible on md and larger screens) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-lg font-light tracking-[0.1em] py-2 px-1 transition-colors interactive font-sans-modern focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] ${
                  currentSection === index ? "text-[#FF6B35]" : "text-white/60 hover:text-white"
                }`}
                whileHover={{ y: -2 }}
                aria-current={currentSection === index ? "page" : undefined}
              >
                <span className="relative">
                  {item.name}
                  {currentSection === index && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF6B35] rounded"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger Menu Button (hidden on md and larger screens) */}
          <motion.button
            className="text-white interactive md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35]"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            <div className="w-7 h-7 flex flex-col justify-center items-end space-y-1.5">
              <motion.div
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 4.5 : 0 }}
              />
              <motion.div className="w-[80%] h-0.5 bg-white" animate={{ opacity: isOpen ? 0 : 1 }} />
              <motion.div
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -4.5 : 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
        )}
        {/* Mobile Navigation Dropdown (only visible on small screens) */}
        <motion.div
          className="md:hidden mt-8 space-y-6 bg-black/80 backdrop-blur-md rounded-lg p-6 border border-white/10 relative z-40"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: "hidden" }}
          aria-label="Mobile navigation menu"
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left text-lg font-light tracking-[0.1em] py-2 transition-colors interactive font-sans-modern focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B35] ${
                currentSection === index ? "text-[#FF6B35]" : "text-white/60 hover:text-white"
              }`}
              whileHover={{ x: 8 }}
              aria-current={currentSection === index ? "page" : undefined}
            >
              <span className="relative">
                {item.name}
                {currentSection === index && (
                  <motion.span
                    layoutId="nav-underline-mobile"
                    className="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FF6B35] rounded"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  )
}
