'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-cream-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-8 text-espresso-brown"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          The Cartel Concept
        </motion.h2>
        <motion.p
          className="font-inter text-responsive-p leading-relaxed text-espresso-brown max-w-readable mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Every Morning Cartel isn't just a café — it's a concept space for coffee rebels and flavor explorers. We curate experimental brews from diverse roasters, creating intimate moments of craftsmanship in our industrial-chic sanctuary. Join our community of creatives who value authenticity, design, and sensory immersion.
        </motion.p>
      </div>
    </motion.section>
  )
}