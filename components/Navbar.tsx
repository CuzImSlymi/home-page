'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300"
    >
      <nav className={`px-8 py-4 rounded-3xl transition-all duration-300 ${
        scrolled 
          ? 'bg-white/8 backdrop-blur-2xl border border-white/15 shadow-2xl' 
          : 'bg-white/3 backdrop-blur-xl border border-white/8'
      }`}>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium text-sm"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

      </nav>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 py-6 px-8 bg-white/8 backdrop-blur-2xl border border-white/15 rounded-3xl"
        >
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-colors font-medium text-center"
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.div>
  )
}