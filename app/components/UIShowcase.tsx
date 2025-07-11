"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Html } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Eye, Heart, Smartphone, Monitor, Tablet } from "lucide-react"

function UICard({ position, rotation, project }: any) {
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <mesh position={position} rotation={rotation}>
        <boxGeometry args={[4, 3, 0.1]} />
        <meshStandardMaterial color="#1a1a1a" transparent opacity={0.9} />
        <Html distanceFactor={8} position={[0, 0, 0.1]}>
          <Card className="w-80 bg-gray-900/95 border-orange-500/30 text-white backdrop-blur-sm">
            <div className="relative overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover" />
              <div className="absolute top-4 right-4">
                <Badge className="bg-orange-500 text-black font-bold">{project.category}</Badge>
              </div>
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {project.devices.map((device: string, index: number) => (
                  <div key={index} className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center">
                    {device === "mobile" && <Smartphone className="w-4 h-4 text-orange-400" />}
                    {device === "desktop" && <Monitor className="w-4 h-4 text-orange-400" />}
                    {device === "tablet" && <Tablet className="w-4 h-4 text-orange-400" />}
                  </div>
                ))}
              </div>
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech: string, index: number) => (
                  <Badge key={index} variant="outline" className="text-xs border-orange-500/50 text-orange-300">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{project.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{project.likes}</span>
                  </div>
                </div>
                <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        </Html>
      </mesh>
    </Float>
  )
}

export default function UIShowcase() {
  const [activeCategory, setActiveCategory] = useState("All")

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with real-time analytics and graffiti-inspired design elements.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React", "D3.js", "Tailwind", "Node.js"],
      category: "Web App",
      devices: ["desktop", "tablet"],
      views: "2.3k",
      likes: "156",
    },
    {
      id: 2,
      title: "Street Art Gallery",
      description: "Mobile-first gallery app showcasing urban art with immersive 3D transitions.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["React Native", "Three.js", "Firebase"],
      category: "Mobile App",
      devices: ["mobile", "tablet"],
      views: "4.1k",
      likes: "289",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description: "Interactive portfolio website with particle systems and dynamic animations.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Next.js", "Three.js", "Framer Motion"],
      category: "Website",
      devices: ["desktop", "mobile", "tablet"],
      views: "1.8k",
      likes: "203",
    },
    {
      id: 4,
      title: "Music Visualizer",
      description: "Real-time audio visualization with graffiti aesthetics and WebGL effects.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["WebGL", "Web Audio API", "Canvas"],
      category: "Web App",
      devices: ["desktop"],
      views: "3.2k",
      likes: "412",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "Analytics dashboard with street art inspired data visualization.",
      image: "/placeholder.svg?height=300&width=400",
      tech: ["Vue.js", "Chart.js", "Express"],
      category: "Dashboard",
      devices: ["desktop", "tablet"],
      views: "2.7k",
      likes: "178",
    },
  ]

  const categories = ["All", "Web App", "Mobile App", "Website", "Dashboard"]

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="showcase" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fillOpacity='0.3'%3E%3Cpolygon points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-6xl font-black mb-6 text-white text-graffiti-bold">UI/UX SHOWCASE</motion.h2>
          <p className="text-xl text-orange-300 max-w-3xl mx-auto font-semibold">
            Digital interfaces that blend street art aesthetics with modern functionality
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 font-bold border-2 transition-all duration-300 transform ${
                activeCategory === category
                  ? "bg-orange-500 border-orange-500 text-black shadow-lg -skew-x-12"
                  : "bg-transparent border-orange-500 text-orange-400 hover:bg-orange-500/20 skew-x-12"
              }`}
              style={{
                textShadow: activeCategory === category ? "1px 1px 0px rgba(0,0,0,0.5)" : "none",
                boxShadow: activeCategory === category ? "4px 4px 0px #000000" : "none",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* 3D Showcase */}
        <div className="h-[600px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border-4 border-orange-500/30">
          <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
              <pointLight position={[-10, -10, -10]} intensity={0.8} color="#f7931e" />

              {filteredProjects.map((project, index) => (
                <UICard
                  key={project.id}
                  position={[((index % 3) - 1) * 5, Math.floor(index / 3) * -4, (index % 2) * -2]}
                  rotation={[0, (index % 2) * 0.2, 0]}
                  project={project}
                />
              ))}

              <OrbitControls enableZoom={true} enablePan={true} autoRotate={false} minDistance={8} maxDistance={20} />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-orange-300 font-semibold">
            🖱️ Drag to explore • 🔍 Scroll to zoom • Click cards to interact
          </p>
        </motion.div>
      </div>
    </section>
  )
}
