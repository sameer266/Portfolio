"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Globe, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight leading-none font-serif-display">
            Let's Connect
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-white/40 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-light leading-relaxed font-sans-body">
            Open to work opportunities, collaborations, and discussions related to software development, AI integration,
            and cybersecurity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-white mb-8 font-sans-modern">Get In Touch</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/[0.05] rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-sans-body">Email</p>
                      <p className="text-white font-sans-body">sameerbaiju792@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/[0.05] rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-sans-body">Phone</p>
                      <p className="text-white font-sans-body">+977 9843019129</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/[0.05] rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-sans-body">Location</p>
                      <p className="text-white font-sans-body">Kathmandu, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/[0.05] rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white/60" />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm font-sans-body">Website</p>
                      <p className="text-white font-sans-body">sammerbaiju.com.np</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/[0.02] backdrop-blur-sm border-white/10 h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-light text-white mb-8 font-sans-modern">Find Me Online</h3>

                <div className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/5 font-sans-body bg-transparent"
                    asChild
                  >
                    <a
                      href="https://np.linkedin.com/in/sameer-baiju-7a3054240"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn Profile
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/5 font-sans-body bg-transparent"
                    asChild
                  >
                    <a href="https://github.com/sameer266" target="_blank" rel="noopener noreferrer">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub Repository
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/5 font-sans-body bg-transparent"
                    asChild
                  >
                    <a href="mailto:sameerbaiju792@gmail.com">
                      <Mail className="w-5 h-5 mr-3" />
                      Send Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/20 text-white hover:bg-white/5 font-sans-body bg-transparent"
                    asChild
                  >
                    <a href="https://sammerbaiju.com.np" target="_blank" rel="noopener noreferrer">
                      <Globe className="w-5 h-5 mr-3" />
                      Personal Website
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-6 bg-white/[0.02] rounded-lg border border-white/10">
                  <h4 className="text-white font-medium mb-3 font-sans-modern">What I Do</h4>
                  <ul className="space-y-2 text-white/60 text-sm font-sans-body">
                    <li>• Build and optimize full-stack applications</li>
                    <li>• Implement real-time communication using WebSockets</li>
                    <li>• Secure applications using JWT and OAuth protocols</li>
                    <li>• Optimize databases for scalability and performance</li>
                    <li>• Explore and integrate AI/ML capabilities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 pt-8 border-t border-white/10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-white/30 font-light font-sans-body">
            © 2024 Sameer Baiju. Building the future with secure, scalable solutions.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
