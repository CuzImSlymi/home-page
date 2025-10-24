'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export default function TechStack() {
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  const languages = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776ab' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f7df1e' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178c6' },
    { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', color: '#777bb4' },
    { name: 'Luau', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg', color: '#2c2d72' },
    { name: 'AutoHotkey v2', logo: 'https://store-images.s-microsoft.com/image/apps.48886.14308665483973753.abd12bec-94a0-435a-8058-4c7f82a16c2b.40957c32-e740-484d-b3da-191afd885735?h=115', color: '#334155' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34f26' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg', color: '#1572b6' },
    { name: 'PowerShell', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg', color: '#5391FE' },
  ]

  const frameworks = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#000000' },
    { name: 'Laravel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png', color: '#FF2D20' },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', color: '#000000' },
    { name: 'Electron', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg', color: '#47848F' },
    { name: 'GSAP', logo: 'https://gsap.com/apple-touch-icon.png', color: '#88CE02' },
    { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png', color: '#06B6D4' },
    { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png', color: '#7952B3' },
    { name: 'Framer Motion', logo: 'https://cdn.worldvectorlogo.com/logos/framer-motion.svg', color: '#BB4B96' },
    { name: 'PyTorch', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', color: '#ee4c2c' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', color: '#ff6f00' },
    { name: 'YOLOv11', logo: 'https://cdn.prod.website-files.com/680a070c3b99253410dd3dcf/680a070c3b99253410dd3e8d_UltralyticsYOLO_mark_blue.svg', color: '#00D4FF' },
    { name: 'RF-DETR', logo: 'https://avatars.githubusercontent.com/u/53104118?s=280&v=4', color: '#FF6B35' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', color: '#47a248' },
    { name: 'SQLite', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', color: '#003B57' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', color: '#4479A1' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ed' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg', color: '#ff9900' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
  ]

  useEffect(() => {
    if (!topRowRef.current || !bottomRowRef.current) return

    const topRow = topRowRef.current
    const bottomRow = bottomRowRef.current

    // Set initial positions for seamless loop
    gsap.set(topRow, { x: '0%' })
    gsap.set(bottomRow, { x: '-50%' })

    // Create continuous scrolling animations with seamless looping
    const topAnimation = gsap.to(topRow, {
      x: '-50%',
      duration: 40, // Slower for languages
      ease: 'none',
      repeat: -1,
      immediateRender: false
    })

    const bottomAnimation = gsap.to(bottomRow, {
      x: '0%',
      duration: 25, // Faster for frameworks
      ease: 'none',
      repeat: -1,
      immediateRender: false
    })

    // Pause animations on hover - but only for the specific row
    const pauseTop = () => topAnimation.pause()
    const resumeTop = () => topAnimation.resume()
    const pauseBottom = () => bottomAnimation.pause()
    const resumeBottom = () => bottomAnimation.resume()

    topRow.addEventListener('mouseenter', pauseTop)
    topRow.addEventListener('mouseleave', resumeTop)
    bottomRow.addEventListener('mouseenter', pauseBottom)
    bottomRow.addEventListener('mouseleave', resumeBottom)

    return () => {
      topRow.removeEventListener('mouseenter', pauseTop)
      topRow.removeEventListener('mouseleave', resumeTop)
      bottomRow.removeEventListener('mouseenter', pauseBottom)
      bottomRow.removeEventListener('mouseleave', resumeBottom)
      topAnimation.kill()
      bottomAnimation.kill()
    }
  }, [])

  const TechItem = ({ tech }: { tech: typeof languages[0] }) => (
    <motion.div
      whileHover={{ 
        scale: 1.1, 
        y: -8,
        boxShadow: `0 10px 30px ${tech.color}40`,
        borderColor: tech.color + '60'
      }}
      className="flex-shrink-0 mx-4 bg-white/5 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/10 transition-all duration-300 cursor-pointer group hover:bg-white/10"
    >
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img 
            src={tech.logo} 
            alt={tech.name} 
            className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
            style={{ filter: 'brightness(1) contrast(1)' }}
          />
          <div 
            className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            style={{ backgroundColor: tech.color }}
          />
        </div>
        <span className="text-white font-medium whitespace-nowrap group-hover:text-white transition-colors duration-300">
          {tech.name}
        </span>
      </div>
    </motion.div>
  )

  return (
    <section className="py-16 overflow-hidden">
      <div className="space-y-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Technology Stack
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tools and languages I use to build stuff that actually works
          </p>
        </motion.div>

        {/* Top Row - Languages (Left to Right) */}
        <div className="relative py-6 overflow-hidden">
          <div ref={topRowRef} className="flex whitespace-nowrap">
            {/* First set */}
            {languages.map((tech, index) => (
              <TechItem key={`lang-1-${index}`} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {languages.map((tech, index) => (
              <TechItem key={`lang-2-${index}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Bottom Row - Frameworks (Right to Left) */}
        <div className="relative py-6 overflow-hidden">
          <div ref={bottomRowRef} className="flex whitespace-nowrap">
            {/* First set */}
            {frameworks.map((tech, index) => (
              <TechItem key={`frame-1-${index}`} tech={tech} />
            ))}
            {/* Duplicate for seamless loop */}
            {frameworks.map((tech, index) => (
              <TechItem key={`frame-2-${index}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}