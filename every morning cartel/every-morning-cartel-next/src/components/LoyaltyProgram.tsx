'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function LoyaltyProgram() {
  const [formData, setFormData] = useState({ name: '', email: '', instagram: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', instagram: '' })

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="loyalty-section bg-espresso-brown relative py-20 overflow-hidden"
    >
      {/* Steam swirl animation */}
      <motion.div
        className="absolute top-1/4 right-1/4 opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-32 h-32 bg-gradient-radial from-cream-white/30 to-transparent rounded-full blur-xl"></div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 opacity-15"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-24 h-24 bg-gradient-radial from-muted-copper/20 to-transparent rounded-full blur-lg"></div>
      </motion.div>
      <div className="container relative text-center text-cream-white z-10" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Brew Your Rebellion
        </motion.h2>
        <motion.p
          className="font-inter text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Join the underground movement of coffee revolutionaries. Unlock forbidden roasts, secret brewing techniques, and exclusive cartel gatherings. Your loyalty brews the perfect storm of flavor and rebellion.
        </motion.p>

        {!isSubmitted ? (
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-cream-white bg-opacity-10 border border-cream-white border-opacity-30 rounded-lg text-cream-white placeholder-cream-white placeholder-opacity-70 focus:outline-none focus:border-muted-copper focus:ring-2 focus:ring-muted-copper focus:ring-opacity-50 transition-all duration-300"
              style={{ textShadow: 'none' }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              pattern="[^@]+@[^@]+\.[a-zA-Z]{2,6}"
              className="w-full px-4 py-3 bg-cream-white bg-opacity-10 border border-cream-white border-opacity-30 rounded-lg text-cream-white placeholder-cream-white placeholder-opacity-70 focus:outline-none focus:border-muted-copper focus:ring-2 focus:ring-muted-copper focus:ring-opacity-50 transition-all duration-300"
              style={{ textShadow: 'none' }}
            />
            <input
              type="text"
              name="instagram"
              placeholder="Instagram Handle (optional)"
              value={formData.instagram || ''}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-cream-white bg-opacity-10 border border-cream-white border-opacity-30 rounded-lg text-cream-white placeholder-cream-white placeholder-opacity-70 focus:outline-none focus:border-muted-copper focus:ring-2 focus:ring-muted-copper focus:ring-opacity-50 transition-all duration-300"
              style={{ textShadow: 'none' }}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-muted-copper text-espresso-brown font-space-grotesk font-semibold rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-muted-copper focus:ring-opacity-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Brewing...' : 'Join the Rebellion'}
            </button>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto p-6 bg-cream-white bg-opacity-10 border border-cream-white border-opacity-30 rounded-lg"
          >
            <p className="font-space-grotesk text-xl font-semibold text-muted-copper mb-2">Welcome to the Cartel!</p>
            <p className="font-inter text-sm">Check your inbox for your loyalty perks.</p>
          </motion.div>
        )}

        <motion.p
          className="font-inter text-sm text-cream-white text-opacity-70 mt-6 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We respect your inbox. No spam, just sensory delight.
        </motion.p>
      </div>
    </motion.section>
  )
}