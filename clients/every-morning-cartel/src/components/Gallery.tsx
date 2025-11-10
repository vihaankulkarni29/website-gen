'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const galleryImages = [
  {
    src: '/8ac904d6a0a3c92aaadfce6bacb78495_o2_featured_v2.avif',
    alt: 'Premium coffee beans and brewing equipment',
    caption: 'Artisanal bean selection'
  },
  {
    src: '/every-morning-cartel-mumbai-coffee-shops-j6htnp59s5.avif',
    alt: 'Every Morning Cartel café interior with concrete walls and warm lighting',
    caption: 'The Cartel space'
  },
  {
    src: '/every-morning-cartel-mumbai-coffee-shops-o4kciloqdf.avif',
    alt: 'Coffee brewing ritual in progress',
    caption: 'Pour-over mastery'
  }
]

export default function Gallery() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-concrete-gray bg-opacity-20"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-playfair text-3xl md:text-4xl mb-12 text-center text-espresso-brown"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Moments from the Cartel
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-cream-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-space-grotesk text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}