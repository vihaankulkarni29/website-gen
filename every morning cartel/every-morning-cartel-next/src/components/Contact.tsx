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
      className="py-20 bg-cream-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-8 text-espresso-brown"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join the Community
        </motion.h2>
        <motion.p
          className="font-inter text-lg mb-8 text-espresso-brown max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to become part of the coffee cartel? Connect with us for events, merch, and exclusive experiences. Let's craft your perfect brew together.
        </motion.p>
        <motion.blockquote
          className="font-space-grotesk italic text-espresso-brown mb-8 max-w-2xl mx-auto p-6 bg-concrete-gray bg-opacity-10 border-l-4 border-muted-copper"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          "Every pour tells a story — and this place knows how to tell it right."
          <cite className="block mt-4 font-bold text-muted-copper not-italic">- Regular Visitor</cite>
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:info@everymorningcartel.com"
            className="inline-flex items-center bg-espresso-brown hover:bg-muted-copper text-cream-white font-space-grotesk px-8 py-4 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
          >
            Start the Conversation
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