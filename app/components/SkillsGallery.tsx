"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Float, Box } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

function SkillCube({ position, skill, color, onHover }: any) {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box
        position={position}
        args={[1, 1, 1]}
        onPointerEnter={() => onHover(skill)}
        onPointerLeave={() => onHover(null)}
      >
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} roughness={0.2} metalness={0.8} />
      </Box>
      <Text
        position={[position[0], position[1] + 1.5, position[2]]}
        fontSize={0.3}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {skill.name}
      </Text>
    </Float>
  )
}

function GraffitiWall() {
  return (
    <mesh position={[0, 0, -8]} rotation={[0, 0, 0]}>
      <planeGeometry args={[20, 12]} />
      <meshStandardMaterial color="#2d2d2d" roughness={0.8} transparent opacity={0.3} />
    </mesh>
  )
}

export default function SkillsGallery() {
  const [hoveredSkill, setHoveredSkill] = useState<any>(null)

  const skills = [
    {
      name: "Python",
      position: [3, 2, 0],
      color: "#3776ab",
      level: "Expert",
      projects: 25,
      description: "Backend development, automation, data analysis",
    },
    {
      name: "Django",
      position: [-3, 1, 1],
      color: "#092e20",
      level: "Expert",
      projects: 18,
      description: "Web framework, REST APIs, database management",
    },
    {
      name: "JavaScript",
      position: [0, 3, -1],
      color: "#f7df1e",
      level: "Advanced",
      projects: 32,
      description: "Frontend development, interactive experiences",
    },
    {
      name: "Three.js",
      position: [2, -1, 2],
      color: "#000000",
      level: "Advanced",
      projects: 12,
      description: "3D graphics, WebGL, immersive experiences",
    },
    {
      name: "React",
      position: [-2, -2, 0],
      color: "#61dafb",
      level: "Advanced",
      projects: 28,
      description: "Component-based UI, state management",
    },
    {
      name: "UI/UX",
      position: [1, 0, -2],
      color: "#ff6b35",
      level: "Intermediate",
      projects: 15,
      description: "User interface design, user experience",
    },
    {
      name: "Security",
      position: [-1, 2, 2],
      color: "#e74c3c",
      level: "Intermediate",
      projects: 8,
      description: "Web security, penetration testing",
    },
    {
      name: "Docker",
      position: [0, -3, 1],
      color: "#2496ed",
      level: "Intermediate",
      projects: 14,
      description: "Containerization, deployment, DevOps",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Graffiti Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b35' fillOpacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fillRule='evenodd'/%3E%3C/g%3E%3C/svg%3E")`,
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
          <motion.h2 className="text-6xl font-black mb-6 text-white text-graffiti-bold">SKILLS GALLERY</motion.h2>
          <p className="text-xl text-orange-300 max-w-3xl mx-auto font-semibold">
            Interactive 3D showcase of my technical expertise and creative tools
          </p>

          {hoveredSkill && (
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="mt-8">
              <Card className="inline-block bg-gray-900/90 border-orange-500/50 text-white backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">{hoveredSkill.name}</h3>
                  <div className="flex items-center space-x-4 mb-3">
                    <Badge className="bg-orange-500 text-black font-bold">{hoveredSkill.level}</Badge>
                    <span className="text-gray-300">{hoveredSkill.projects} Projects</span>
                  </div>
                  <p className="text-gray-300">{hoveredSkill.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </motion.div>

        <div className="h-[600px] rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border-4 border-orange-500/30">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff6b35" />
              <pointLight position={[-10, -10, -10]} intensity={1} color="#f7931e" />
              <pointLight position={[0, 10, -5]} intensity={0.8} color="#ffcd3c" />

              <GraffitiWall />

              {skills.map((skill, index) => (
                <SkillCube
                  key={index}
                  position={skill.position}
                  skill={skill}
                  color={skill.color}
                  onHover={setHoveredSkill}
                />
              ))}

              <OrbitControls
                enableZoom={true}
                enablePan={true}
                autoRotate={true}
                autoRotateSpeed={0.5}
                minDistance={6}
                maxDistance={15}
              />
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
          <p className="text-orange-300 font-semibold">🎯 Hover over cubes to learn more • 🔄 Auto-rotating gallery</p>
        </motion.div>
      </div>
    </section>
  )
}
