'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-20 bg-charcoal"
    >
      <div className="container relative text-center text-cream">
        <motion.h2
          className="font-inter text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Experience
        </motion.h2>
        <motion.p
          className="font-inter text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A concept turned into reality. Specialty coffee, ceremonial-grade matcha, and now a full kitchen and a vinyl wall! We're here to fuel your day with bold flavors, good music, and zero pretension. Whether you're stopping in for a quick coffee, staying for a full meal, or just want to listen to some good records, we keep it simple: quality first.
        </motion.p>
      </div>
    </motion.section>
  )
}