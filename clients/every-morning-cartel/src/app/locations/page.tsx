import Header from '@/components/Header'
import Footer from '@/components/Footer'

const locations = [
  {
    id: 'borivali',
    name: 'Borivali',
    fullAddress: 'Shop 7, Bhattad Tower, S V Road, Borivali West, Mumbai - 400092',
    phone: '+91 99671 15685',
    hours: 'Monday - Sunday: 8:00 AM - 11:30 PM',
    features: [
      'Home delivery',
      'Takeaway',
      'Vegetarian-friendly',
      'Wheelchair accessible',
      'Kid-friendly',
      'Work-friendly',
      'Wi-Fi enabled'
    ],
    averageCost: '₹700 for two people',
    cuisine: 'Café, Coffee, Desserts',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.84!3d19.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEzJzQ4LjAiTiA3MsKwNTAnMjQuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin',
    image: '/every-morning-cartel-mumbai-coffee-shops-o4kciloqdf.avif'
  },
  {
    id: 'kandivali',
    name: 'Kandivali',
    fullAddress: 'Mahavir Nagar, near RTO Office, Kandivali West, Mumbai',
    phone: '+91 XXXXX XXXXX',
    hours: 'Monday - Sunday: 8:00 AM - 11:30 PM',
    features: [
      'Home delivery',
      'Takeaway',
      'Vegetarian-friendly',
      'Wheelchair accessible',
      'Kid-friendly',
      'Work-friendly',
      'Wi-Fi enabled'
    ],
    averageCost: '₹700 for two people',
    cuisine: 'Café, Coffee, Desserts',
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5!2d72.85!3d19.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEyJzAwLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin',
    image: '/every-morning-cartel-mumbai-coffee-shops-j6htnp59s5.avif'
  }
]

export default function Locations() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-inter text-5xl md:text-6xl font-bold mb-6">
            Visit Us
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            Two locations in Mumbai, ready to serve your perfect coffee experience.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          <div className="space-y-16">
            {locations.map((location, index) => (
              <div
                key={location.id}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={location.image}
                      alt={`${location.name} location`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div>
                    <h2 className="font-inter text-3xl font-bold mb-4 text-espresso">
                      {location.name}
                    </h2>
                    <div className="space-y-3 text-espresso/80">
                      <p className="flex items-start">
                        <span className="text-copper mr-3 mt-1">📍</span>
                        <span>{location.fullAddress}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-copper mr-3">🕒</span>
                        <span>{location.hours}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-copper mr-3">📞</span>
                        <span>{location.phone}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-copper mr-3">💰</span>
                        <span>{location.averageCost}</span>
                      </p>
                      <p className="flex items-center">
                        <span className="text-copper mr-3">🍽️</span>
                        <span>{location.cuisine}</span>
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="font-inter text-xl font-semibold mb-3 text-espresso">Features</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature) => (
                        <div key={feature} className="flex items-center text-sm text-espresso/70">
                          <span className="w-2 h-2 bg-copper rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={`tel:${location.phone}`}
                      className="bg-espresso text-cream font-space-grotesk px-6 py-3 text-center uppercase tracking-wider transition-all duration-300 hover:bg-copper"
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/${location.phone.replace(/\s+/g, '').replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream font-space-grotesk px-6 py-3 text-center uppercase tracking-wider transition-all duration-300"
                    >
                      WhatsApp Order
                    </a>
                    <a
                      href="https://www.zomato.com/mumbai/every-morning-cartel-borivali-west"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-copper text-espresso font-space-grotesk px-6 py-3 text-center uppercase tracking-wider transition-all duration-300 hover:bg-espresso hover:text-cream"
                    >
                      View on Zomato
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className={`md:col-span-2 mt-8 ${index % 2 === 1 ? 'md:col-start-1 md:col-span-2' : ''}`}>
                  <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-xl">
                    <iframe
                      src={location.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.name} location`}
                    ></iframe>
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
            Ready for Your Coffee Ritual?
          </h2>
          <p className="font-inter text-lg opacity-90 mb-8">
            Visit either of our locations and experience the Every Morning Cartel difference.
          </p>
          <a
            href="/menu"
            className="inline-block bg-copper text-espresso font-space-grotesk px-8 py-3 text-lg uppercase tracking-wider transition-all duration-300 hover:bg-cream"
          >
            View Menu
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}