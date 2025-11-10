'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen flex items-center justify-center bg-charcoal text-cream overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      >
        <source src="/assets/cooking with me _ honey milk, ramen, cozy dinner.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-inter text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Every Pour<br />Tells a Story
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-inter text-xl md:text-2xl mb-8 opacity-90"
        >
          Step into our experimental coffee bar — a creative lab where boundary-pushing brews meet urban sophistication.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#experience"
            className="inline-block bg-espresso hover:bg-copper text-cream font-space-grotesk px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
          >
            Enter the Cartel
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}