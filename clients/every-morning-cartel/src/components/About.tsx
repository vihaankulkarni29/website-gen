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
      className="py-20 bg-cream"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-inter text-3xl md:text-4xl font-bold mb-8 text-espresso"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          More Than Coffee
        </motion.h2>
        <motion.p
          className="font-inter text-lg leading-relaxed text-espresso max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Every Morning Cartel isn't just a café — it's a concept space for coffee rebels and flavor explorers. We curate experimental brews from diverse roasters, creating intimate moments of craftsmanship in our industrial-chic sanctuary.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="font-space-grotesk text-3xl font-bold text-copper mb-2">2</div>
            <div className="font-inter text-espresso">Locations</div>
          </div>
          <div className="text-center">
            <div className="font-space-grotesk text-3xl font-bold text-copper mb-2">50+</div>
            <div className="font-inter text-espresso">Coffee Origins</div>
          </div>
          <div className="text-center">
            <div className="font-space-grotesk text-3xl font-bold text-copper mb-2">∞</div>
            <div className="font-inter text-espresso">Experiments</div>
          </div>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="#experience"
            className="inline-block bg-espresso text-cream font-space-grotesk px-8 py-3 text-lg transition-all duration-300 hover:bg-copper"
          >
            Our Story
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}