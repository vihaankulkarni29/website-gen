'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function VideoHero() {
  const [videoLoaded, setVideoLoaded] = useState(false)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="video-hero relative w-full h-screen overflow-hidden bg-charcoal-black"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className="background-video absolute top-0 left-0 w-full h-full object-cover z-0"
        style={{ filter: videoLoaded ? 'none' : 'blur(10px)' }}
      >
        <source src="/assets/cooking with me _ honey milk, ramen, cozy dinner.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* Fallback background while video loads */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-espresso-brown to-charcoal-black z-0"></div>
      )}

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-espresso-brown bg-opacity-60 z-10"></div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        <motion.h1
          className="font-playfair text-hero-clamp font-light leading-tight mb-heading-mb text-cream-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Morning cartel, eternal mood.
        </motion.h1>
        <motion.p
          className="font-inter text-responsive-p leading-relaxed text-cream-white max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Experimental coffee. Sensory rebellion. Join our community of flavor explorers.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#about"
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