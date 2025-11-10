'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#products', label: 'Roasts' },
    { href: '#contact', label: 'Connect' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="bg-espresso-brown py-4"
    >
      <div className="max-w-6xl mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <a
                href={item.href}
                className="text-cream-white hover:text-muted-copper transition-colors duration-300 font-space-grotesk text-sm uppercase tracking-wider"
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}