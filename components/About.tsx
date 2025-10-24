'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Rocket, Users } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: "AI Research",
      description: "Keep up with the latest papers and actually implement the interesting stuff."
    },
    {
      icon: Code,
      title: "Full Stack",
      description: "Can build the whole thing - frontend, backend, whatever needs doing."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Make things fast. Slow software is just bad software."
    },
    {
      icon: Users,
      title: "Team Lead",
      description: "Leading a team on a project while still writing code myself."
    }
  ]

  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Started coding as a kid, now I'm building AI that actually does useful stuff. Leading a team while working on something pretty exciting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              How I Got Here
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Started with Roblox games when I was younger, then got into Python. Instead of 
              following tutorials, I just built whatever seemed cool and figured it out along the way. 
              Now I'm obsessed with AI and try to keep up with every new paper that comes out.
            </p>
            <p className="text-gray-300 leading-relaxed">
              These days I work on stuff that either solves annoying problems or explores ideas that 
              might not work but are worth trying. I also taught a bunch of friends how to code, which 
              is pretty fun. I mostly code solo but also lead a team on a project we're working on.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <div className="flex flex-wrap gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                    <span className="text-sm font-medium text-white">6+ Years Experience</span>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-emerald-500/30 shadow-lg shadow-emerald-500/20">
                    <span className="text-sm font-medium text-white">25+ Projects</span>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-lg px-4 py-2 border border-purple-500/30 shadow-lg shadow-purple-500/20">
                    <span className="text-sm font-medium text-white">Team Leader</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}