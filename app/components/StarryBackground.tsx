"use client"

import { useEffect, useRef } from "react"

export default function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Star properties
    class Star {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      twinkleSpeed: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.speed = Math.random() * 0.2 + 0.05
        this.opacity = Math.random()
        this.twinkleSpeed = Math.random() * 0.02 + 0.01

        // Random star colors
        const colors = ["#ffffff", "#ffe9c4", "#d4e6ff", "#f9d9ff", "#e6f3ff"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        // Slow movement
        this.y += this.speed
        if (this.y > canvas.height) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }

        // Twinkling effect
        this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01
        this.opacity = Math.max(0.1, Math.min(1, this.opacity))
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.shadowBlur = this.size * 2
        ctx.shadowColor = this.color

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()

        // Add cross sparkle for larger stars
        if (this.size > 1.5) {
          ctx.strokeStyle = this.color
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(this.x - this.size * 2, this.y)
          ctx.lineTo(this.x + this.size * 2, this.y)
          ctx.moveTo(this.x, this.y - this.size * 2)
          ctx.lineTo(this.x, this.y + this.size * 2)
          ctx.stroke()
        }

        ctx.restore()
      }
    }

    // Create stars
    const stars: Star[] = []
    const numStars = 200

    for (let i = 0; i < numStars; i++) {
      stars.push(new Star())
    }

    // Nebula particles
    class NebulaParticle {
      x: number
      y: number
      size: number
      speed: number
      opacity: number
      color: string
      angle: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 30 + 10
        this.speed = Math.random() * 0.1 + 0.02
        this.opacity = Math.random() * 0.1 + 0.02
        this.angle = Math.random() * Math.PI * 2

        const colors = ["#7209b7", "#2d1b69", "#11998e", "#38ef7d"]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed
        this.angle += 0.001

        if (this.x > canvas.width + this.size) this.x = -this.size
        if (this.x < -this.size) this.x = canvas.width + this.size
        if (this.y > canvas.height + this.size) this.y = -this.size
        if (this.y < -this.size) this.y = canvas.height + this.size
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.opacity

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, "transparent")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }
    }

    // Create nebula particles
    const nebulaParticles: NebulaParticle[] = []
    const numNebula = 15

    for (let i = 0; i < numNebula; i++) {
      nebulaParticles.push(new NebulaParticle())
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with space background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#0a0a0a")
      gradient.addColorStop(0.5, "#1a1a2e")
      gradient.addColorStop(1, "#16213e")

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw nebula particles
      nebulaParticles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      // Draw stars
      stars.forEach((star) => {
        star.update()
        star.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" style={{ background: "transparent" }} />
  )
}
