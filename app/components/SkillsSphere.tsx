"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Text, Float } from "@react-three/drei"
import { motion } from "framer-motion"
import { Suspense, useRef, useState } from "react"
import type * as THREE from "three"

interface SkillOrbProps {
  position: [number, number, number]
  skill: string
  color: string
  onHover: (skill: string | null) => void
}

function SkillOrb({ position, skill, color, onHover }: SkillOrbProps) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerEnter={() => {
          setHovered(true)
          onHover(skill)
        }}
        onPointerLeave={() => {
          setHovered(false)
          onHover(null)
        }}
        scale={hovered ? 1.2 : 1}
      >
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={hovered ? 1 : 0.8}
        />
        <Text
          position={[0, 0, 0.4]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Geist_Bold.json"
        >
          {skill}
        </Text>
      </mesh>
    </Float>
  )
}

export default function SkillsSphere() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    { name: "Python", position: [2, 1, 0] as [number, number, number], color: "#3776ab" },
    { name: "Django", position: [-2, 1, 1] as [number, number, number], color: "#092e20" },
    { name: "JavaScript", position: [0, 2, -1] as [number, number, number], color: "#f7df1e" },
    { name: "React", position: [1, -1, 2] as [number, number, number], color: "#61dafb" },
    { name: "Security", position: [-1, -2, 0] as [number, number, number], color: "#ff6b6b" },
    { name: "PostgreSQL", position: [2, -1, -1] as [number, number, number], color: "#336791" },
    { name: "Docker", position: [-2, 0, -2] as [number, number, number], color: "#2496ed" },
    { name: "AWS", position: [0, -1, 1] as [number, number, number], color: "#ff9900" },
  ]

  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-indigo-900/30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-white mb-6">
            Skills{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Universe</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Explore my technical expertise in an interactive 3D space
          </p>
          {hoveredSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3"
            >
              <span className="text-cyan-400 font-semibold text-lg">{hoveredSkill}</span>
            </motion.div>
          )}
        </motion.div>

        <div className="h-96 rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
          <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />

              {skills.map((skill, index) => (
                <SkillOrb
                  key={index}
                  position={skill.position}
                  skill={skill.name}
                  color={skill.color}
                  onHover={setHoveredSkill}
                />
              ))}

              <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
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
          <p className="text-white/60">🖱️ Drag to rotate • Hover over skills to learn more</p>
        </motion.div>
      </div>
    </section>
  )
}
