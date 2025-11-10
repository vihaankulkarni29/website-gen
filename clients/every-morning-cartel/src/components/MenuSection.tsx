'use client'

import { motion } from 'framer-motion'

export default function MenuSection() {
  const menuItems = [
    {
      category: 'Espresso Based',
      items: [
        { name: 'Espresso', price: '₹120', description: 'Single shot of perfection' },
        { name: 'Americano', price: '₹140', description: 'Espresso with hot water' },
        { name: 'Cappuccino', price: '₹180', description: 'Espresso with steamed milk foam' },
        { name: 'Latte', price: '₹200', description: 'Espresso with steamed milk' }
      ]
    },
    {
      category: 'Pour Over',
      items: [
        { name: 'Single Origin Ethiopia', price: '₹220', description: 'Floral and juicy notes' },
        { name: 'House Blend', price: '₹200', description: 'Balanced and smooth' },
        { name: 'Guest Roaster Special', price: '₹250', description: 'Weekly changing selection' }
      ]
    },
    {
      category: 'Cold Brew',
      items: [
        { name: 'Classic Cold Brew', price: '₹180', description: '16-hour extraction' },
        { name: 'Nitro Cold Brew', price: '₹220', description: 'Creamy nitrogen-infused' }
      ]
    }
  ]

  return (
    <section className="py-20 bg-cream-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl mb-4">Our Menu</h2>
          <p className="font-inter text-lg text-espresso-brown max-w-2xl mx-auto">
            Carefully curated selection of premium coffees from around the world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="font-space-grotesk text-2xl mb-6 text-espresso-brown">
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                    className="flex justify-between items-start py-2 border-b border-concrete-gray/30 last:border-b-0"
                  >
                    <div>
                      <h4 className="font-inter font-semibold text-charcoal-black">
                        {item.name}
                      </h4>
                      <p className="font-inter text-sm text-concrete-gray mt-1">
                        {item.description}
                      </p>
                    </div>
                    <span className="font-space-grotesk text-muted-copper font-bold">
                      {item.price}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}