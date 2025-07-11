"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, Code, Database } from "lucide-react"
import { useState } from "react"

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "SecureCommerce",
      category: "Secure Web Application",
      year: "2024",
      description:
        "A security-first e-commerce platform with advanced threat protection and secure payment processing.",
      tech: ["Django", "React", "PostgreSQL", "Security Headers", "OWASP"],
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
      icon: Shield,
      color: "text-red-400",
    },
    {
      id: 2,
      title: "VulnScanner Pro",
      category: "Cybersecurity Tool",
      year: "2023",
      description: "Advanced vulnerability scanner with automated reporting and threat intelligence integration.",
      tech: ["Python", "FastAPI", "Nmap", "CVE Database", "Docker"],
      image: "/placeholder.svg?height=600&width=800",
      featured: true,
      icon: Database,
      color: "text-yellow-400",
    },
    {
      id: 3,
      title: "SecureTask Manager",
      category: "Enterprise SaaS",
      year: "2023",
      description: "Enterprise task management with end-to-end encryption and advanced access controls.",
      tech: ["Next.js", "Node.js", "MongoDB", "JWT", "Encryption"],
      image: "/placeholder.svg?height=600&width=800",
      featured: false,
      icon: Code,
      color: "text-blue-400",
    },
  ]

  return (
    <section id="work" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center space-x-8 mb-8">
            <h2 className="text-7xl md:text-8xl font-light text-white tracking-tight leading-none font-mono">
              Selected Work
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-red-500/30 to-transparent"></div>
          </div>
          <p className="text-lg text-white/50 max-w-2xl font-light leading-relaxed font-mono">
            A collection of projects showcasing secure development practices and cybersecurity solutions.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* Project Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.04] hover:border-red-500/20 transition-all duration-500 overflow-hidden group">
                    <div className="relative">
                      <motion.img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-80 object-cover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {project.featured && (
                        <div className="absolute top-6 right-6">
                          <Badge className="bg-red-500/20 text-red-400 border-red-500/30 font-mono text-xs backdrop-blur-sm">
                            Featured
                          </Badge>
                        </div>
                      )}

                      <div className="absolute bottom-6 left-6">
                        <project.icon className={`w-8 h-8 ${project.color} opacity-80`} />
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Project Info */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="space-y-3">
                    <p className="text-white/40 font-light tracking-wide text-sm font-mono">
                      {project.category} — {project.year}
                    </p>
                    <motion.h3
                      className="text-4xl font-light text-white tracking-tight font-mono leading-tight"
                      animate={{
                        color: hoveredProject === project.id ? "#ef4444" : "#ffffff",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.title}
                    </motion.h3>
                    <div className="w-16 h-px bg-gradient-to-r from-red-500/50 to-transparent"></div>
                  </div>

                  <p className="text-white/60 font-light leading-relaxed font-mono">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs font-light border-white/20 text-white/50 bg-white/[0.02] font-mono px-3 py-1 hover:border-red-500/30 hover:text-red-400/80 transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      size="sm"
                      className="bg-white/[0.05] hover:bg-red-500/10 hover:border-red-500/30 backdrop-blur-sm border-white/20 text-white font-mono text-xs tracking-wide transition-all duration-300"
                    >
                      <Github className="w-3 h-3 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-white/[0.05] hover:bg-red-500/10 hover:border-red-500/30 backdrop-blur-sm border-white/20 text-white font-mono text-xs tracking-wide transition-all duration-300"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
