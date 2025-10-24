'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Brain, Camera, MessageCircle, Zap, Code, Star, ArrowRight } from 'lucide-react'
import gsap from 'gsap'

// GSAP ScrollTrigger setup
let ScrollTrigger: any
if (typeof window !== 'undefined') {
  gsap.registerPlugin(require('gsap/ScrollTrigger').ScrollTrigger)
  ScrollTrigger = require('gsap/ScrollTrigger').ScrollTrigger
}

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentProject, setCurrentProject] = useState(0)

  const projects = [
    {
      title: "Apertis-LLM",
      subtitle: "Custom Language Model",
      description: "Built a hybrid LLM that combines Mamba-SSM with Transformer architecture. The goal was to get O(n) complexity while keeping the performance that makes Transformers so good.",
      highlights: [
        "Mamba-SSM + Transformer hybrid",
        "Linear time complexity",
        "Mixture-of-Experts routing",
        "Handles text, images, and more"
      ],
      tech: ["PyTorch", "Transformers", "Apache Spark"],
      icon: Brain,
      theme: {
        primary: "#8b5cf6",
        secondary: "#a855f7", 
        accent: "#c084fc",
        bg: "from-purple-900/20 via-violet-900/10 to-purple-800/20"
      },
      image: "/api/placeholder/600/400",
      github: "https://github.com/CuzImSlymi/Apertis-LLM",
      status: "Active Development",
      featured: true
    },
    {
      title: "CalorieAI",
      subtitle: "AI Nutrition Tracker",
      description: "Mobile app that uses computer vision to identify food from photos and track your nutrition. No more manual calorie counting - just snap a pic and get instant nutritional data.",
      highlights: [
        "Photo-based food recognition",
        "AI coaching that actually helps",
        "Tracks macros automatically",
        "Learns your eating patterns"
      ],
      tech: ["React Native", "Python", "Computer Vision"],
      icon: Camera,
      theme: {
        primary: "#10b981",
        secondary: "#059669",
        accent: "#34d399", 
        bg: "from-emerald-900/20 via-green-900/10 to-emerald-800/20"
      },
      image: "/api/placeholder/600/400",
      status: "Beta Testing",
      featured: true
    },
    {
      title: "WhisperLink", 
      subtitle: "Private P2P Messenger",
      description: "A messaging app where your conversations stay between you and the person you're talking to. No servers storing your messages, no companies reading your chats.",
      highlights: [
        "True end-to-end encryption",
        "Peer-to-peer connections", 
        "No message logging anywhere",
        "Source code is public"
      ],
      tech: ["Electron", "Python", "WebRTC", "Cryptography"],
      icon: MessageCircle,
      theme: {
        primary: "#3b82f6",
        secondary: "#2563eb",
        accent: "#60a5fa",
        bg: "from-blue-900/20 via-sky-900/10 to-blue-800/20"
      },
      image: "/api/placeholder/600/400",
      github: "https://github.com/CuzImSlymi/whisperlink",
      status: "Production Ready",
      featured: true
    },
    {
      title: "BSS-AI",
      subtitle: "YOLO Object Detection",
      description: "Trained custom YOLO models on 20,000+ images to detect game objects in real-time. Works surprisingly well compared to old hardcoded macros that would break constantly.",
      highlights: [
        "20K custom training dataset",
        "Trained on H100 hardware",
        "Optimized inference speed",
        "Open source models"
      ],
      tech: ["YOLO", "Computer Vision", "Model Training"],
      icon: Zap,
      theme: {
        primary: "#f59e0b",
        secondary: "#d97706",
        accent: "#fbbf24",
        bg: "from-amber-900/20 via-yellow-900/10 to-orange-800/20"
      },
      image: "/api/placeholder/600/400",
      github: "https://github.com/BSS-AI/BSS-AI",
      status: "Live",
      featured: false
    },
    {
      title: "Puter Python SDK",
      subtitle: "Better Python SDK", 
      description: "The official Puter Python SDK had issues with several models and lacked proper testing. So I built a more reliable version with better docs and a solid test suite.",
      highlights: [
        "Actually works with all models",
        "Proper test coverage",
        "Documentation that makes sense",
        "Community contributions welcome"
      ],
      tech: ["Python", "API Design", "Testing"],
      icon: Code,
      theme: {
        primary: "#6366f1",
        secondary: "#4f46e5", 
        accent: "#818cf8",
        bg: "from-indigo-900/20 via-blue-900/10 to-indigo-800/20"
      },
      image: "/api/placeholder/600/400",
      github: "https://github.com/CuzImSlymi/puter-python-sdk",
      status: "Stable",
      featured: false
    }
  ]

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const sections = Array.from(container.querySelectorAll('.project-section'))

    // Keyboard navigation function
    const navigateToProject = (index: number) => {
      if (index < 0 || index >= projects.length) return
      
      setCurrentProject(index)
      const progress = index / (projects.length - 1)
      
      // Smoothly animate to the target project
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1) * progress,
        duration: 0.8,
        ease: "power2.out"
      })
    }

    // Keyboard event handler
    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle keyboard when projects section is in view
      const rect = container.getBoundingClientRect()
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0
      
      if (!isInView) return

      // Check both event.key and event.code for better compatibility
      const isLeftArrow = event.key === 'ArrowLeft' || event.code === 'ArrowLeft' || event.keyCode === 37
      const isRightArrow = event.key === 'ArrowRight' || event.code === 'ArrowRight' || event.keyCode === 39
      const isUpArrow = event.key === 'ArrowUp' || event.code === 'ArrowUp' || event.keyCode === 38
      const isDownArrow = event.key === 'ArrowDown' || event.code === 'ArrowDown' || event.keyCode === 40

      if (isLeftArrow || isUpArrow) {
        event.preventDefault()
        event.stopPropagation()
        navigateToProject(currentProject - 1)
      } else if (isRightArrow || isDownArrow) {
        event.preventDefault()
        event.stopPropagation()
        navigateToProject(currentProject + 1)
      } else {
        switch (event.key) {
          case 'Home':
            event.preventDefault()
            navigateToProject(0)
            break
          case 'End':
            event.preventDefault()
            navigateToProject(projects.length - 1)
            break
          case '1':
          case '2':
          case '3':
          case '4':
            event.preventDefault()
            const projectIndex = parseInt(event.key) - 1
            navigateToProject(projectIndex)
            break
        }
      }
    }

    // Add keyboard event listener
    window.addEventListener('keydown', handleKeyDown)
    
    if (ScrollTrigger && sections.length > 0) {
      // Determine initial position based on scroll direction and page load
      const getInitialProgress = () => {
        const containerTop = container.offsetTop
        const containerHeight = container.offsetHeight
        const currentScroll = window.scrollY
        
        // If loading at bottom of page or scrolling up from below
        if (currentScroll > containerTop + containerHeight) {
          return 1 // Start at last project
        }
        // If at top or scrolling down from above
        else if (currentScroll < containerTop) {
          return 0 // Start at first project
        }
        // If in middle, calculate based on position
        else {
          const progress = (currentScroll - containerTop) / containerHeight
          return Math.max(0, Math.min(1, progress))
        }
      }

      let initialProgress = getInitialProgress()
      
      // Set initial position based on calculated progress
      gsap.set(sections, { xPercent: -100 * (sections.length - 1) * initialProgress })

      // Official GSAP horizontal scrolling pattern with smart initialization
      const tl = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 0.5,
            delay: 0.1
          },
          end: () => `+=${sections.length * window.innerHeight}`,
          onRefresh: () => {
            // Recalculate on refresh/resize
            initialProgress = getInitialProgress()
            gsap.set(sections, { xPercent: -100 * (sections.length - 1) * initialProgress })
          },
          onToggle: (self) => {
            // Handle entering from different directions
            if (self.isActive) {
              const newProgress = getInitialProgress()
              if (Math.abs(newProgress - initialProgress) > 0.1) {
                gsap.set(sections, { xPercent: -100 * (sections.length - 1) * newProgress })
                initialProgress = newProgress
              }
            }
          }
        }
      })
    }

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const ProjectSection = ({ project, index }: { project: typeof projects[0], index: number }) => {
    const IconComponent = project.icon
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const imageRef = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!imageRef.current) return
      
      const rect = imageRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      
      setMousePosition({ x, y })
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
    }

    return (
      <div className="project-section h-screen w-screen flex-shrink-0 relative overflow-hidden">
        {/* Animated Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${project.theme.bg}`}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center h-full">
            
            {/* Project Visual */}
            <motion.div 
              className={`lg:col-span-7 relative ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.title === "CalorieAI" ? (
                // CalorieAI - Phone IS the container
                <div 
                  className="relative group flex items-center justify-center h-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  ref={imageRef}
                >
                  <div className="relative max-w-xs mx-auto">
                    {/* Phone with realistic bezel - THIS IS THE MAIN CONTAINER */}
                    <div 
                      className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl transition-all duration-300 ease-out"
                      style={{
                        transform: `perspective(1000px) rotateX(${-mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) translateZ(${Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 0 ? '20px' : '0px'})`,
                        boxShadow: `
                          ${mousePosition.x * 20}px ${-mousePosition.y * 20}px 40px rgba(0,0,0,0.3),
                          0 0 0 1px ${project.theme.primary}40,
                          0 0 20px ${project.theme.primary}20
                        `
                      }}
                    >
                      <img 
                        src="/calorieai-mobile-app.png" 
                        alt="CalorieAI Mobile App Interface"
                        className="w-full h-auto object-cover rounded-[2rem]"
                      />
                    </div>
                  </div>
                  
                </div>
              ) : (
                // Other projects - No container, direct content
                <div 
                  className="relative group flex items-center justify-center h-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  ref={imageRef}
                >
                  {project.title === "WhisperLink" ? (
                    // Desktop App Screenshot
                    <div className="relative max-w-4xl mx-auto">
                      <img 
                        src="/whisperlink-desktop-app.png" 
                        alt="WhisperLink Desktop Application"
                        className="w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-300 ease-out"
                        style={{
                          transform: `perspective(1000px) rotateX(${-mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) translateZ(${Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 0 ? '20px' : '0px'})`,
                          boxShadow: `
                            ${mousePosition.x * 20}px ${-mousePosition.y * 20}px 40px rgba(0,0,0,0.3),
                            0 0 0 1px ${project.theme.primary}40,
                            0 0 20px ${project.theme.primary}20
                          `
                        }}
                      />
                    </div>
                  ) : project.title === "BSS-AI" ? (
                    // Gaming Analytics Video
                    <div className="relative max-w-4xl mx-auto">
                      <video 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-auto object-cover rounded-xl shadow-2xl transition-all duration-300 ease-out"
                        style={{
                          transform: `perspective(1000px) rotateX(${-mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) translateZ(${Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 0 ? '20px' : '0px'})`,
                          boxShadow: `
                            ${mousePosition.x * 20}px ${-mousePosition.y * 20}px 40px rgba(0,0,0,0.3),
                            0 0 0 1px ${project.theme.primary}40,
                            0 0 20px ${project.theme.primary}20
                          `
                        }}
                      >
                        <source src="/bss-ai-demo-compressed.mp4" type="video/mp4" />
                        {/* Fallback */}
                        <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-800 to-gray-900">
                          <div className="text-center space-y-4">
                            <IconComponent 
                              className="w-24 h-24 mx-auto opacity-50"
                              style={{ color: project.theme.primary }}
                            />
                            <div className="text-gray-400 text-sm">
                              Gaming Analytics Demo
                            </div>
                          </div>
                        </div>
                      </video>
                    </div>
                  ) : (
                    // Placeholder for projects without images yet
                    <div className="relative max-w-lg mx-auto">
                      <div 
                        className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center rounded-xl shadow-2xl transition-all duration-300 ease-out"
                        style={{
                          transform: `perspective(1000px) rotateX(${-mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg) translateZ(${Math.abs(mousePosition.x) + Math.abs(mousePosition.y) > 0 ? '20px' : '0px'})`,
                          boxShadow: `
                            ${mousePosition.x * 20}px ${-mousePosition.y * 20}px 40px rgba(0,0,0,0.3),
                            0 0 0 1px ${project.theme.primary}40,
                            0 0 20px ${project.theme.primary}20
                          `
                        }}
                      >
                        <div className="text-center space-y-4">
                          <IconComponent 
                            className="w-24 h-24 mx-auto opacity-50"
                            style={{ color: project.theme.primary }}
                          />
                          <div className="text-gray-400 text-sm">
                            {project.title === "Apertis-LLM" ? "AI Architecture Visualization" : "Project Interface"}
                          </div>
                          <div className="text-xs text-gray-500 px-4">
                            {project.title === "Apertis-LLM" ? "Neural network diagram coming soon" : "Screenshot coming soon"}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>

            {/* Project Info */}
            <motion.div 
              className={`lg:col-span-5 space-y-4 lg:space-y-6 ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Header */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                    style={{ color: project.theme.primary }}
                  >
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-lg md:text-xl text-gray-300 font-medium">
                      {project.subtitle}
                    </h3>
                    <div 
                      className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border shadow-lg"
                      style={{ 
                        backgroundColor: `${project.theme.primary}20`,
                        borderColor: `${project.theme.primary}40`,
                        color: project.theme.accent
                      }}
                    >
                      ● {project.status}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div className="space-y-3">
                <h4 
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ color: project.theme.secondary }}
                >
                  Key Highlights
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.highlights.map((highlight, idx) => (
                    <motion.div 
                      key={idx}
                      className="flex items-center space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + idx * 0.1 }}
                    >
                      <ArrowRight 
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: project.theme.accent }}
                      />
                      <span className="text-sm">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 
                  className="text-sm font-semibold uppercase tracking-wide"
                  style={{ color: project.theme.secondary }}
                >
                  Built With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-sm font-medium border backdrop-blur-sm"
                      style={{
                        backgroundColor: `${project.theme.primary}15`,
                        borderColor: `${project.theme.primary}30`,
                        color: project.theme.accent
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 group w-full sm:w-auto"
                    style={{ 
                      backgroundColor: project.theme.primary,
                      color: 'white'
                    }}
                  >
                    <Github className="w-5 h-5" />
                    <span>View Code</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Projects Header */}
      <section className="h-screen flex items-center justify-center bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions pushing the boundaries of AI and technology
          </p>
          <div className="flex justify-center">
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-400 flex items-center space-x-2"
            >
              <span className="text-sm">Use arrow keys or scroll to navigate projects</span>
              <div className="w-4 h-4 border-r-2 border-b-2 border-gray-400 transform rotate-45"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Horizontal Projects Section */}
      <section id="projects" ref={containerRef} className="relative overflow-hidden">
        <div className="flex h-screen w-max">
          {projects.map((project, index) => (
            <ProjectSection key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  )
}