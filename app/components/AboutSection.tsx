"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Globe, Calendar, GraduationCap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-32 px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-12 gap-16 items-start"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          {/* Left Column */}
          <div className="lg:col-span-7">
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-7xl md:text-8xl font-light text-white mb-8 tracking-tight leading-none font-serif-display">
                About
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-white/40 to-transparent"></div>
            </motion.div>

            <motion.div
              className="space-y-8 text-white/70 font-light leading-relaxed text-lg font-sans-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-white/80 leading-relaxed">
                I'm a passionate <span className="text-white font-medium">full-stack developer</span> skilled in Django
                with DRF for backend and React JS with Tailwind for frontend. I build scalable, secure, and
                high-performing web applications with a strong focus on real-time features using WebSockets and Celery.
              </p>

              <p>
                Currently exploring <span className="text-white font-medium">machine learning</span> to integrate
                AI-driven features into web apps, focusing on data preprocessing, model training, and deployment using
                tools like LangChain, Scikit-Learn, and Pandas.
              </p>

              <p>
                I'm also diving deep into <span className="text-white font-medium">cybersecurity</span>, learning
                penetration testing and security assessment tools to build more secure applications from the ground up.
              </p>

              {/* Contact Info */}
              <motion.div
                className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">+977 9843019129</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">sameerbaiju792@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-white/60" />
                  <span className="text-white/60 text-sm">sammerbaiju.com.np</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Education & Skills */}
          <div className="lg:col-span-5 space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-white/60" />
                    <h3 className="text-xl font-light text-white font-sans-modern">Education</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="border-l-2 border-white/10 pl-6">
                      <div className="flex items-center space-x-3 mb-2">
                        <Calendar className="w-4 h-4 text-white/40" />
                        <span className="text-white/40 text-sm font-sans-modern">2022 - 2026</span>
                      </div>
                      <h4 className="text-white font-medium text-lg font-sans-modern mb-2">
                        Bachelor in Computer Application
                      </h4>
                      <p className="text-white/60 text-sm font-sans-body">Institute of Science and Technology (IOST)</p>
                      <p className="text-white/50 text-sm font-sans-body">Tribhuvan University</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light text-white font-sans-modern mb-6">Experience</h3>

                  <div className="border-l-2 border-white/10 pl-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <Calendar className="w-4 h-4 text-white/40" />
                      <span className="text-white/40 text-sm font-sans-modern">2023 - Present</span>
                    </div>
                    <h4 className="text-white font-medium text-lg font-sans-modern mb-2">Full Stack Developer</h4>
                    <p className="text-white/60 text-sm font-sans-body mb-2">Kitwosd - IT Service Solution Company</p>
                    <p className="text-white/50 text-sm font-sans-body">Kathmandu, Nepal</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Skills */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 hover:bg-white/[0.04] transition-all duration-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-light text-white font-sans-modern mb-6">Key Skills</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white/80 font-medium text-sm font-sans-modern mb-3">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["React JS", "Tailwind", "JavaScript ES6", "API Integration"].map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-white/20 text-white/60 bg-white/[0.02] font-sans-body"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white/80 font-medium text-sm font-sans-modern mb-3">Backend</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Django", "DRF", "REST APIs", "WebSockets", "JWT", "OAuth"].map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-white/20 text-white/60 bg-white/[0.02] font-sans-body"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white/80 font-medium text-sm font-sans-modern mb-3">Cybersecurity</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Nmap", "Burp Suite", "Metasploit", "Nessus", "Wireshark"].map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-white/20 text-white/60 bg-white/[0.02] font-sans-body"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white/80 font-medium text-sm font-sans-modern mb-3">Machine Learning</h4>
                      <div className="flex flex-wrap gap-2">
                        {["LangChain", "Pandas", "NumPy", "Scikit-Learn"].map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs border-white/20 text-white/60 bg-white/[0.02] font-sans-body"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        <span className="text-gray-400 font-semibold ml-1 text-base tracking-[0.25em] select-none [writing-mode:vertical-lr] [text-orientation:mixed] font-sans-modern antialiased">
          sameerbaiju792@gmail.com
        </span>
      </div>
    </section>
  )
}
