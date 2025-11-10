'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-cream"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-inter text-3xl md:text-4xl font-bold mb-8 text-espresso"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          @everymorningcartel
        </motion.h2>
        <motion.p
          className="font-inter text-lg mb-8 text-espresso max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Follow us for daily coffee inspiration, behind-the-scenes moments, and community stories. Aesthetic visuals of coffee, matcha, and plated dishes paired with moody lighting and vinyl culture.
        </motion.p>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Instagram-style grid - placeholder images */}
          <div className="aspect-square bg-espresso/10 rounded-lg flex items-center justify-center">
            <span className="text-espresso/50 text-sm">📸</span>
          </div>
          <div className="aspect-square bg-espresso/10 rounded-lg flex items-center justify-center">
            <span className="text-espresso/50 text-sm">☕</span>
          </div>
          <div className="aspect-square bg-espresso/10 rounded-lg flex items-center justify-center">
            <span className="text-espresso/50 text-sm">🎵</span>
          </div>
          <div className="aspect-square bg-espresso/10 rounded-lg flex items-center justify-center">
            <span className="text-espresso/50 text-sm">🏙️</span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.instagram.com/everymorningcartel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-espresso hover:bg-copper text-cream font-space-grotesk px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            Follow on Instagram
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}