'use client'

import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full bg-charcoal text-cream py-8 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h1
          className="font-inter text-4xl md:text-6xl font-bold mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Every Morning Cartel
        </motion.h1>
        <motion.div
          className="font-inter text-lg opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Morning cartel, eternal mood.
        </motion.div>
      </div>
    </motion.header>
  )
}