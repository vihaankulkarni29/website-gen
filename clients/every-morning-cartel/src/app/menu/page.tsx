'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const menuCategories = [
  {
    id: 'coffee',
    name: 'Specialty Coffee',
    icon: '☕',
    items: [
      {
        name: 'Ethiopia Guji',
        description: 'Floral, juicy, wild. Bright acidity with berry notes.',
        price: '₹280',
        featured: true
      },
      {
        name: 'Colombia Excelso',
        description: 'Rich chocolate notes with hints of caramel and nuts.',
        price: '₹320',
        featured: false
      },
      {
        name: 'Guatemala Antigua',
        description: 'Spicy and smoky with dark chocolate undertones.',
        price: '₹300',
        featured: false
      },
      {
        name: 'House Blend',
        description: 'Our signature multi-roaster blend, perfectly balanced.',
        price: '₹250',
        featured: false
      }
    ]
  },
  {
    id: 'matcha',
    name: 'Ceremonial Matcha',
    icon: '🍵',
    items: [
      {
        name: 'Traditional Matcha',
        description: 'Authentic Japanese ceremonial grade matcha, whisked to perfection.',
        price: '₹350',
        featured: true
      },
      {
        name: 'Matcha Latte',
        description: 'Creamy steamed milk with premium matcha and honey.',
        price: '₹280',
        featured: false
      },
      {
        name: 'Iced Matcha',
        description: 'Chilled matcha with coconut milk and agave syrup.',
        price: '₹320',
        featured: false
      }
    ]
  },
  {
    id: 'food',
    name: 'Artisan Kitchen',
    icon: '🍽️',
    items: [
      {
        name: 'Avocado Toast',
        description: 'Sourdough with smashed avocado, poached egg, and microgreens.',
        price: '₹280',
        featured: true
      },
      {
        name: 'Shakshuka',
        description: 'North African spiced eggs in tomato sauce with feta and herbs.',
        price: '₹320',
        featured: false
      },
      {
        name: 'Pancakes',
        description: 'Fluffy buttermilk pancakes with maple syrup and fresh berries.',
        price: '₹260',
        featured: false
      },
      {
        name: 'Salads',
        description: 'Seasonal mixed greens with house vinaigrette and artisanal cheeses.',
        price: '₹240',
        featured: false
      },
      {
        name: 'Sandwiches',
        description: 'Freshly baked bread with premium fillings and house-made spreads.',
        price: '₹290',
        featured: false
      }
    ]
  },
  {
    id: 'desserts',
    name: 'Sweet Endings',
    icon: '🍰',
    items: [
      {
        name: 'Tiramisu',
        description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone.',
        price: '₹220',
        featured: true
      },
      {
        name: 'Chocolate Brownie',
        description: 'Warm, fudgy brownie with vanilla ice cream.',
        price: '₹180',
        featured: false
      },
      {
        name: 'Cheesecake',
        description: 'New York style cheesecake with berry compote.',
        price: '₹200',
        featured: false
      },
      {
        name: 'Macarons',
        description: 'French macarons in assorted flavors.',
        price: '₹150',
        featured: false
      }
    ]
  }
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('coffee')

  const activeItems = menuCategories.find(cat => cat.id === activeCategory)?.items || []

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-inter text-5xl md:text-6xl font-bold mb-6">
            Our Menu
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            From specialty brews to artisanal dishes, every item is crafted with care and served with passion.
          </p>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="py-8 bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-space-grotesk text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-espresso text-cream shadow-lg'
                    : 'bg-cream text-espresso border border-espresso hover:bg-espresso/10'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4 text-espresso">
              {menuCategories.find(cat => cat.id === activeCategory)?.name}
            </h2>
            <p className="font-inter text-espresso/70">
              Discover our carefully curated selection
            </p>
          </div>

          <div className="space-y-6">
            {activeItems.map((item, index) => (
              <div
                key={item.name}
                className={`flex flex-col md:flex-row md:items-center justify-between p-6 rounded-lg border transition-all duration-300 hover:shadow-lg ${
                  item.featured
                    ? 'border-copper bg-copper/5'
                    : 'border-border bg-cream'
                }`}
              >
                <div className="flex-1 mb-4 md:mb-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-inter text-xl font-bold text-espresso">
                      {item.name}
                    </h3>
                    {item.featured && (
                      <span className="bg-copper text-cream px-2 py-1 rounded-full text-xs font-space-grotesk uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="font-inter text-espresso/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="md:text-right">
                  <span className="font-space-grotesk text-2xl font-bold text-copper">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-espresso text-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-inter text-3xl font-bold mb-6">
            Ready to Experience?
          </h2>
          <p className="font-inter text-lg opacity-90 mb-8">
            Visit us in Borivali and discover why our menu has become a local favorite.
          </p>
          <a
            href="/"
            className="inline-block bg-copper text-espresso font-space-grotesk px-8 py-3 text-lg uppercase tracking-wider transition-all duration-300 hover:bg-cream"
          >
            Find Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}