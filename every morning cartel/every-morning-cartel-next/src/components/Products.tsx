'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const products = [
  {
    name: 'Ethiopia Guji',
    description: 'Floral, juicy, wild. This week\'s guest roast brings the vibrant highlands to your cup — a sensory journey of bright acidity and berry notes.',
    featured: true,
  },
  {
    name: 'Experimental Blend',
    description: 'Our signature multi-roaster creation: boundary-pushing combinations that challenge conventions and delight the palate.',
    featured: false,
  },
  {
    name: 'Single Origin Series',
    description: 'Weekly rotations featuring unique terroirs. This month: precision-roasted beans highlighting regional character and craftsmanship.',
    featured: false,
  },
]

export default function Products() {
  return (
    <motion.section
      id="products"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-charcoal-black text-cream-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Roasts
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className={`bg-cream-white border border-concrete-gray rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                product.featured ? 'ring-2 ring-muted-copper bg-amber-50' : ''
              }`}
            >
              {product.featured && (
                <div className="bg-muted-copper text-cream-white px-3 py-1 rounded-full text-xs font-space-grotesk uppercase tracking-wider mb-4 inline-block">
                  Featured
                </div>
              )}
              <div className="p-6 text-center">
                <h3 className="font-playfair text-xl mb-4 text-espresso-brown">{product.name}</h3>
                <p className="font-inter text-espresso-brown leading-relaxed">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}