'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-charcoal-black text-muted-copper py-8"
    >
      <div className="container text-center">
        <p className="font-inter text-sm">
          &copy; 2023 Every Morning Cartel. All rights reserved.
        </p>
      </div>
    </motion.footer>
  )
}