'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CherryBlossomBackground() {
  const [petals, setPetals] = useState<Array<{
    id: number
    x: number
    delay: number
    duration: number
    size: number
    blur: number
  }>>([])

  useEffect(() => {
    // Generate random cherry blossom petals
    const newPetals = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 12,
      size: 6 + Math.random() * 10,
      blur: Math.random() * 2
    }))
    setPetals(newPetals)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated cherry blossom gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 40%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
            linear-gradient(135deg, 
              rgba(15, 23, 42, 1) 0%, 
              rgba(88, 28, 135, 0.8) 25%, 
              rgba(157, 23, 77, 0.6) 50%, 
              rgba(244, 63, 94, 0.4) 75%, 
              rgba(15, 23, 42, 1) 100%)
          `
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 40%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(88, 28, 135, 0.8) 25%, rgba(157, 23, 77, 0.6) 50%, rgba(244, 63, 94, 0.4) 75%, rgba(15, 23, 42, 1) 100%)`,
            
            `radial-gradient(circle at 30% 60%, rgba(244, 114, 182, 0.2) 0%, transparent 50%),
             radial-gradient(circle at 70% 20%, rgba(251, 113, 133, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 60% 70%, rgba(244, 63, 94, 0.1) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(88, 28, 135, 0.9) 25%, rgba(157, 23, 77, 0.7) 50%, rgba(244, 63, 94, 0.5) 75%, rgba(15, 23, 42, 1) 100%)`,
            
            `radial-gradient(circle at 20% 20%, rgba(244, 114, 182, 0.15) 0%, transparent 50%),
             radial-gradient(circle at 80% 40%, rgba(251, 113, 133, 0.1) 0%, transparent 50%),
             radial-gradient(circle at 40% 80%, rgba(244, 63, 94, 0.08) 0%, transparent 50%),
             linear-gradient(135deg, rgba(15, 23, 42, 1) 0%, rgba(88, 28, 135, 0.8) 25%, rgba(157, 23, 77, 0.6) 50%, rgba(244, 63, 94, 0.4) 75%, rgba(15, 23, 42, 1) 100%)`
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating orbs with glassmorphism */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-rose-500/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute top-2/3 right-1/4 w-60 h-60 bg-gradient-to-r from-purple-400/15 to-pink-500/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.7, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-rose-400/10 to-pink-600/10 rounded-full blur-3xl"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Animated cherry blossom petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute bg-gradient-to-br from-pink-300 to-rose-400 rounded-full opacity-60"
          style={{
            left: `${petal.x}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            filter: `blur(${petal.blur}px)`,
          }}
          initial={{ y: -20, rotate: 0, opacity: 0 }}
          animate={{
            y: window?.innerHeight ? window.innerHeight + 50 : 1000,
            rotate: 720,
            opacity: [0, 0.8, 0.6, 0],
            x: [0, 30, -20, 40, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle animated mesh overlay */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(244, 114, 182, 0.3) 1px, transparent 0)
          `,
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Atmospheric light rays */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, rgba(244, 114, 182, 0.1) 40%, transparent 50%),
            linear-gradient(-45deg, transparent 60%, rgba(251, 113, 133, 0.08) 70%, transparent 80%)
          `
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          background: [
            `linear-gradient(45deg, transparent 30%, rgba(244, 114, 182, 0.1) 40%, transparent 50%),
             linear-gradient(-45deg, transparent 60%, rgba(251, 113, 133, 0.08) 70%, transparent 80%)`,
            `linear-gradient(50deg, transparent 35%, rgba(244, 114, 182, 0.15) 45%, transparent 55%),
             linear-gradient(-40deg, transparent 55%, rgba(251, 113, 133, 0.1) 65%, transparent 75%)`,
            `linear-gradient(45deg, transparent 30%, rgba(244, 114, 182, 0.1) 40%, transparent 50%),
             linear-gradient(-45deg, transparent 60%, rgba(251, 113, 133, 0.08) 70%, transparent 80%)`
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Vignette effect */}
      <div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at center, transparent 20%, rgba(15, 23, 42, 0.3) 80%)`
        }}
      />
    </div>
  )
}