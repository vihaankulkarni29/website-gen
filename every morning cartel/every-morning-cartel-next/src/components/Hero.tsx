'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-charcoal-black text-cream-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Steam Effect Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-96 h-96 bg-gradient-radial from-cream-white/20 to-transparent rounded-full blur-3xl"></div>
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 opacity-15"
          animate={{
            y: [-20, 20, -20],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <div className="w-64 h-64 bg-gradient-radial from-muted-copper/15 to-transparent rounded-full blur-2xl"></div>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="font-playfair text-hero-clamp font-light leading-tight mb-heading-mb"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Every Pour Tells a Story
        </motion.h2>
        <motion.p
          className="font-inter text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Step into our experimental coffee bar — a creative lab where boundary-pushing brews meet urban sophistication. Discover multi-roaster diversity and sensory experiences that redefine your morning ritual.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="inline-flex items-center bg-espresso-brown hover:bg-muted-copper text-cream-white font-space-grotesk px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg group"
          >
            <span className="relative z-10">Enter the Cartel</span>
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-muted-copper/20 to-espresso-brown/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}