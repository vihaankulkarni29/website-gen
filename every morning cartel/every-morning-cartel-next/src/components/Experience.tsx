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
      className="relative py-20 bg-experience-pattern bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-charcoal-black bg-opacity-60"></div>
      <div className="container relative text-center text-white" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.6)' }}>
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          The Space
        </motion.h2>
        <motion.p
          className="font-inter text-lg leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Exposed concrete walls, warm lighting, minimalist furniture, and a neon "Cartel" sign define our creative lab. Here, pour-over rituals become meditative experiences, and every espresso shot tells a story of precision and passion.
        </motion.p>
      </div>
    </motion.section>
  )
}