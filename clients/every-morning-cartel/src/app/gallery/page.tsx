'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const galleryImages = [
  {
    id: 1,
    src: '/8ac904d6a0a3c92aaadfce6bacb78495_o2_featured_v2.avif',
    alt: 'Coffee brewing setup with professional equipment',
    category: 'coffee',
    instagram: true
  },
  {
    id: 2,
    src: '/every-morning-cartel-mumbai-coffee-shops-j6htnp59s5.avif',
    alt: 'Cozy café interior with warm lighting',
    category: 'ambiance',
    instagram: true
  },
  {
    id: 3,
    src: '/every-morning-cartel-mumbai-coffee-shops-o4kciloqdf.avif',
    alt: 'Freshly brewed coffee with latte art',
    category: 'coffee',
    instagram: true
  },
  // Placeholder images for gallery
  {
    id: 4,
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGMEVCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMyQjE4MTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db2ZmZWUgQXJ0PC90ZXh0Pgo8L3N2Zz4K',
    alt: 'Beautiful latte art creation',
    category: 'coffee',
    instagram: false
  },
  {
    id: 5,
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGMEVCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMyQjE4MTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5NYXRjaGEgU2V0dXA8L3RleHQ+Cjwvc3ZnPgoK',
    alt: 'Traditional matcha preparation',
    category: 'matcha',
    instagram: false
  },
  {
    id: 6,
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGMEVCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMyQjE4MTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DYXBlIENvb2tpbmc8L3RleHQ+Cjwvc3ZnPgoK',
    alt: 'Artisanal food preparation',
    category: 'food',
    instagram: false
  },
  {
    id: 7,
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjVGMEVCIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMyQjE4MTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5WaW55bCBXYWxsPC90ZXh0Pgo8L3N2Zz4K',
    alt: 'Vinyl record collection',
    category: 'ambiance',
    instagram: false
  },
  {
    id: 8,
    src: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHg9IjIwMCIgeT0iMjAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMyQjE4MTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Db21tdW5pdHkgTW9tZW50PC90ZXh0Pgo8L3N2Zz4K',
    alt: 'Customers enjoying coffee together',
    category: 'people',
    instagram: false
  }
]

const categories = [
  { id: 'all', name: 'All', icon: '📸' },
  { id: 'coffee', name: 'Coffee', icon: '☕' },
  { id: 'matcha', name: 'Matcha', icon: '🍵' },
  { id: 'food', name: 'Food', icon: '🍽️' },
  { id: 'ambiance', name: 'Ambiance', icon: '🏠' },
  { id: 'people', name: 'People', icon: '👥' }
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-inter text-5xl md:text-6xl font-bold mb-6">
            Our Gallery
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            A visual journey through our coffee experiments, community moments, and creative space.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-cream border-b border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category) => (
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

      {/* Gallery Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Instagram Badge */}
                {image.instagram && (
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-cream text-center p-4">
                    <p className="text-sm font-inter">{image.alt}</p>
                  </div>
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
            Follow Our Journey
          </h2>
          <p className="font-inter text-lg opacity-90 mb-8">
            Stay updated with our latest coffee experiments and community moments.
          </p>
          <a
            href="https://www.instagram.com/everymorningcartel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-copper text-espresso font-space-grotesk px-8 py-3 text-lg uppercase tracking-wider transition-all duration-300 hover:bg-cream"
          >
            @everymorningcartel
          </a>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 text-white text-2xl hover:text-copper transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm opacity-90">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}