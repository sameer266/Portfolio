"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

interface SkillCardProps {
  skill: {
    name: string
    level: number
    category: string
    projects: number
    color: string
    description: string
  }
  index: number
}

function SkillCard({ skill, index }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.05] hover:border-red-500/20 transition-all duration-500 h-full">
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-light text-white font-mono">{skill.name}</h3>
            <Badge className={`${skill.color} bg-opacity-20 border-opacity-30`}>{skill.category}</Badge>
          </div>

          <p className="text-white/60 font-light text-sm mb-6 font-mono leading-relaxed">{skill.description}</p>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-white/50 text-sm font-mono">Proficiency</span>
              <span className={`text-sm font-mono font-medium ${skill.color}`}>{skill.level}%</span>
            </div>

            <div className="relative">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full rounded-full ${skill.color.replace("text-", "bg-")} relative`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`absolute inset-0 ${skill.color.replace("text-", "bg-")} opacity-50 blur-sm`}
                    animate={{ opacity: isHovered ? [0.3, 0.8, 0.3] : 0.3 }}
                    transition={{ duration: 1.5, repeat: isHovered ? Number.POSITIVE_INFINITY : 0 }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-white/40 text-xs font-mono">{skill.projects} projects</span>
              <motion.div
                className={`w-2 h-2 rounded-full ${skill.color.replace("text-", "bg-")}`}
                animate={{ scale: isHovered ? [1, 1.3, 1] : 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function SkillsShowcase() {
  const skills = [
    {
      name: "React Development",
      level: 92,
      category: "Frontend",
      projects: 25,
      color: "text-blue-400",
      description: "Building modern, responsive user interfaces with React and its ecosystem.",
    },
    {
      name: "Python & Django",
      level: 95,
      category: "Backend",
      projects: 30,
      color: "text-green-400",
      description: "Full-stack web development with Python, Django, and REST APIs.",
    },
    {
      name: "Cybersecurity",
      level: 88,
      category: "Security",
      projects: 15,
      color: "text-red-400",
      description: "Penetration testing, vulnerability assessment, and security auditing.",
    },
    {
      name: "Cloud Infrastructure",
      level: 82,
      category: "DevOps",
      projects: 20,
      color: "text-purple-400",
      description: "AWS, Docker, and cloud-native application deployment.",
    },
    {
      name: "Database Design",
      level: 88,
      category: "Backend",
      projects: 28,
      color: "text-yellow-400",
      description: "PostgreSQL, Redis, and database optimization for scalable applications.",
    },
    {
      name: "Security Tools",
      level: 85,
      category: "Security",
      projects: 12,
      color: "text-orange-400",
      description: "Burp Suite, Nmap, Wireshark, and automated security testing.",
    },
  ]

  return (
    <section className="py-32 px-8 relative bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-none font-mono">
            Skills Overview
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500/60 to-red-500/30"></div>
            <div className="w-2 h-2 bg-red-500/60 rotate-45"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-red-500/60 to-red-500/30"></div>
          </div>
          <p className="text-lg text-white/50 max-w-2xl mx-auto font-light leading-relaxed font-mono">
            A detailed breakdown of my technical proficiencies and project experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}