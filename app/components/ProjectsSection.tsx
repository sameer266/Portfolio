"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Bus Ticket Booking & Reservation",
      description:
        "A web-based application that allows users to search for buses, view available seats, book tickets, and make reservations in real time. Admins can manage routes, schedules, and passenger details with secure booking and real-time updates using WebSockets.",
      tech: ["Django", "React", "WebSockets", "PostgreSQL", "Payment Gateway"],
      link: "https://gosewa.com.np/",
      github: "#",
      featured: true,
      date: "2024",
      status: "Live",
    },
    {
      id: 2,
      title: "Gaupalika Management System",
      description:
        "A centralized web app for Gaupalikas to manage wards, households, families, and health data. Each ward can log in to update local records, enabling accurate and real-time census tracking for better planning and public services.",
      tech: ["Django", "PostgreSQL", "Bootstrap", "Chart.js"],
      link: "https://gaupalika.alsamainternational.com/",
      github: "#",
      featured: true,
      date: "Feb 2024",
      status: "Live",
    },
    {
      id: 3,
      title: "Nepal Recycle Bank",
      description:
        "A digital platform revolutionizing waste management by enabling individuals to schedule pickups for recyclable materials. Users earn rewards for their recycling efforts, promoting eco-friendly behavior and sustainable practices.",
      tech: ["Django", "React", "Payment Integration", "Geolocation"],
      link: "https://nepalrecyclebank.com/",
      github: "#",
      featured: true,
      date: "2024",
      status: "Live",
    },
    {
      id: 4,
      title: "NepNeed - Multi-Service Marketplace",
      description:
        "A comprehensive marketplace platform connecting users with local vendors, freelancers, and ride-sharing providers. Features custom user roles with KYC verification and multiple payment methods including prepaid, COD, and digital payments.",
      tech: ["Django", "WebSockets", "REST API", "Payment Gateway", "KYC"],
      link: "https://ineed.alsamainternational.com/",
      github: "#",
      featured: true,
      date: "Feb 2023",
      status: "Live",
    },
    {
      id: 5,
      title: "School Management System",
      description:
        "A fully functional school management system deployed in a real school environment. Handles student records, attendance, fees, staff management, and reporting—streamlining daily administrative tasks.",
      tech: ["React", "Django REST Framework", "PostgreSQL", "Reports"],
      link: "#",
      github: "https://github.com/sameer266/school-management",
      featured: false,
      date: "2023",
      status: "Deployed",
    },
    {
      id: 6,
      title: "Bhaktapur Portal",
      description:
        "A local news website for Bhaktapur city with admin CRUD operations for managing news, food spots, culture, galleries, and public notices. Each ward can log in to post local updates with decentralized content management.",
      tech: ["Django", "HTML/CSS", "Bootstrap", "SQLite"],
      link: "https://bhaktapur-sameer.vercel.app/",
      github: "#",
      featured: false,
      date: "2023",
      status: "Live",
    },
  ]

  return (
    <section id="projects" className="py-32 px-8 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-none font-serif-display">
            Featured Projects
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white/40 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-white/60 max-w-3xl mx-auto font-light leading-relaxed font-sans-body">
            Real-world applications built with modern technologies, deployed in production environments.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 h-full">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      {project.featured && (
                        <Badge className="bg-white/10 text-white border-white/20 font-sans-body text-xs">
                          Featured
                        </Badge>
                      )}
                      <Badge
                        variant="outline"
                        className="text-xs border-white/20 text-white/60 bg-white/[0.02] font-sans-body"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-2 text-white/40 text-sm font-sans-body">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-medium text-white mb-4 font-sans-modern group-hover:text-white/90 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-white/60 font-light leading-relaxed mb-6 font-sans-body">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-white/20 text-white/50 bg-white/[0.02] font-sans-body"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.link !== "#" && (
                      <Button
                        size="sm"
                        className="bg-white/[0.05] hover:bg-white/10 backdrop-blur-sm border-white/20 text-white font-sans-modern text-xs"
                        asChild
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.github !== "#" && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 font-sans-modern text-xs bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
