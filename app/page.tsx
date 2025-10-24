'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import TechStack from '@/components/TechStack'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'
import DynamicBackground from '@/components/DynamicBackground'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Version Check - v1 */}
      <div style={{position: 'fixed', top: 0, right: 0, background: 'red', color: 'white', padding: '5px', zIndex: 9999}}>v1</div>
      <DynamicBackground />
      <Navbar />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Footer />
      </motion.div>
    </main>
  )
}