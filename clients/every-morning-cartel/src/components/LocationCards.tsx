'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const locations = [
  {
    name: 'Borivali',
    address: 'Shop 7, Bhattad Tower, S V Road, Borivali West, Mumbai',
    phone: '+91 99671 15685',
    hours: 'Mon-Sun: 8:00 AM - 11:30 PM',
    image: '/every-morning-cartel-mumbai-coffee-shops-o4kciloqdf.avif',
    features: ['Home delivery', 'Takeaway', 'Wi-Fi', 'Work-friendly']
  }
]

export default function LocationCards() {
  return (
    <section className="py-20 bg-charcoal">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-inter text-3xl md:text-4xl font-bold mb-12 text-center text-cream"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Visit Us
        </motion.h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-cream rounded-xl overflow-hidden shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto">
                  <Image
                    src={location.image}
                    alt={`${location.name} location`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <h3 className="font-inter text-2xl font-bold mb-4 text-espresso">
                    {location.name}
                  </h3>
                  <div className="space-y-3 mb-6">
                    <p className="font-inter text-espresso flex items-start">
                      <span className="text-copper mr-2">📍</span>
                      {location.address}
                    </p>
                    <p className="font-inter text-espresso flex items-center">
                      <span className="text-copper mr-2">🕒</span>
                      {location.hours}
                    </p>
                    <p className="font-inter text-espresso flex items-center">
                      <span className="text-copper mr-2">📞</span>
                      {location.phone}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="font-inter text-sm text-espresso/70 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature) => (
                        <span
                          key={feature}
                          className="bg-espresso/10 text-espresso px-3 py-1 rounded-full text-xs font-inter"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={`tel:${location.phone}`}
                      className="bg-espresso hover:bg-copper text-cream font-space-grotesk px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-lg"
                    >
                      Call Now
                    </a>
                    <a
                      href="https://www.zomato.com/mumbai/every-morning-cartel-borivali-west"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream font-space-grotesk px-6 py-3 text-sm uppercase tracking-wider transition-all duration-300"
                    >
                      View on Zomato
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}