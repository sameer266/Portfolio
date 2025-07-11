"use client"

import { useEffect, useRef } from "react"

export default function FallingDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let scrollY = 0

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Track scroll position
    const handleScroll = () => {
      scrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    // Dot properties
    class Dot {
      x: number
      y: number
      size: number
      baseY: number
      speed: number
      opacity: number
      shape: "square" | "triangle"

      constructor() {
        this.x = Math.random() * canvas.width
        this.baseY = Math.random() * canvas.height * 2
        this.y = this.baseY
        this.size = Math.random() * 3 + 1 // Smaller size: 1-4px
        this.speed = Math.random() * 0.2 + 0.05
        this.opacity = Math.random() * 0.4 + 0.1 // Lower opacity for subtlety
        this.shape = Math.random() > 0.8 ? "triangle" : "square"
      }

      update() {
        // Move based on scroll and natural fall
        this.y = this.baseY + scrollY * this.speed + ((Date.now() * 0.001 * this.speed * 8) % canvas.height)

        // Reset position when off screen
        if (this.y > canvas.height + this.size) {
          this.baseY = -this.size - Math.random() * canvas.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = "#ffffff" // White color

        if (this.shape === "square") {
          ctx.fillRect(this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
        } else {
          // Draw small triangle
          ctx.beginPath()
          ctx.moveTo(this.x, this.y - this.size / 2)
          ctx.lineTo(this.x - this.size / 2, this.y + this.size / 2)
          ctx.lineTo(this.x + this.size / 2, this.y + this.size / 2)
          ctx.closePath()
          ctx.fill()
        }

        ctx.restore()
      }
    }

    // Create more dots but smaller
    const dots: Dot[] = []
    const numDots = 150 // Increased number for better coverage (from 80 to 150)

    for (let i = 0; i < numDots; i++) {
      dots.push(new Dot())
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with pure black
      ctx.fillStyle = "#000000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw dots
      dots.forEach((dot) => {
        dot.update()
        dot.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}
