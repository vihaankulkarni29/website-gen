import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Story() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-inter text-5xl md:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="font-inter text-xl opacity-90 max-w-2xl mx-auto">
            From a simple idea to Mumbai's premier coffee destination
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-3xl font-bold mb-6 text-espresso">
                The Beginning
              </h2>
              <p className="font-inter text-lg leading-relaxed mb-6 text-espresso">
                Every Morning Cartel started as a passion project in 2021. What began as a small roastery in Borivali has grown into Mumbai's most beloved coffee destination, known for our commitment to quality, community, and creativity.
              </p>
              <p className="font-inter text-lg leading-relaxed text-espresso">
                Our founder, driven by a love for exceptional coffee and a desire to create meaningful spaces, transformed a simple café concept into a cultural hub where specialty brews meet vinyl vibes.
              </p>
            </div>
            <div className="bg-espresso/10 p-8 rounded-lg">
              <blockquote className="font-space-grotesk text-xl italic text-espresso mb-4">
                "Coffee isn't just a drink—it's a ritual, a conversation, a moment of connection."
              </blockquote>
              <cite className="font-inter text-espresso/70">— Our Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Roaster Philosophy */}
      <section className="py-20 bg-charcoal text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-inter text-3xl font-bold mb-12">
            Our Multi-Roaster Philosophy
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream/10 p-6 rounded-lg">
              <div className="font-space-grotesk text-4xl mb-4">🌍</div>
              <h3 className="font-inter text-xl font-bold mb-3">Global Origins</h3>
              <p className="font-inter opacity-90">
                We source beans from the world's finest coffee-growing regions, from Ethiopia's highlands to Colombia's volcanic soils.
              </p>
            </div>

            <div className="bg-cream/10 p-6 rounded-lg">
              <div className="font-space-grotesk text-4xl mb-4">🔬</div>
              <h3 className="font-inter text-xl font-bold mb-3">Artisan Roasting</h3>
              <p className="font-inter opacity-90">
                Each bean is roasted to perfection by master roasters who understand that great coffee requires patience and precision.
              </p>
            </div>

            <div className="bg-cream/10 p-6 rounded-lg">
              <div className="font-space-grotesk text-4xl mb-4">🤝</div>
              <h3 className="font-inter text-xl font-bold mb-3">Local Partnerships</h3>
              <p className="font-inter opacity-90">
                We collaborate with local roasters and farmers, supporting sustainable practices and fair trade initiatives worldwide.
              </p>
            </div>
          </div>

          <div className="bg-espresso p-8 rounded-lg max-w-2xl mx-auto">
            <h3 className="font-inter text-2xl font-bold mb-4 text-cream">
              Why Multi-Roaster?
            </h3>
            <p className="font-inter text-cream opacity-90 leading-relaxed">
              By working with multiple roasters, we ensure diversity in our offerings and support a wider range of coffee communities. Each roast tells a different story, each origin brings unique flavors, and together they create an unparalleled coffee experience.
            </p>
          </div>
        </div>
      </section>

      {/* The Space Evolution */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-6 text-espresso">
              From Café to Cultural Hub
            </h2>
            <p className="font-inter text-lg text-espresso/80 max-w-2xl mx-auto">
              What started as a simple coffee shop has evolved into Mumbai's premier cultural destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">The First Pour</h3>
                  <p className="font-inter text-espresso/80">
                    Opened in Borivali with a focus on specialty coffee and warm hospitality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">Ceremonial Matcha</h3>
                  <p className="font-inter text-espresso/80">
                    Introduced traditional Japanese matcha preparation, elevating our offerings beyond coffee.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">Full Kitchen</h3>
                  <p className="font-inter text-espresso/80">
                    Expanded our menu to include artisanal food, creating complete dining experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">Vinyl Wall</h3>
                  <p className="font-inter text-espresso/80">
                    Added a curated vinyl collection, transforming our space into a music lover's paradise.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">Community Focus</h3>
                  <p className="font-inter text-espresso/80">
                    Became a hub for creatives, hosting events, workshops, and fostering meaningful connections.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-copper text-cream w-8 h-8 rounded-full flex items-center justify-center font-space-grotesk font-bold flex-shrink-0">
                  ∞
                </div>
                <div>
                  <h3 className="font-inter text-xl font-bold mb-2 text-espresso">The Future</h3>
                  <p className="font-inter text-espresso/80">
                    Continuing to innovate, connect, and serve exceptional experiences every morning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-espresso text-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-inter text-3xl font-bold mb-6">
            Experience the Cartel
          </h2>
          <p className="font-inter text-lg opacity-90 mb-8">
            Join us in Borivali and discover why Every Morning Cartel has become Mumbai's favorite coffee destination.
          </p>
          <a
            href="/"
            className="inline-block bg-copper text-espresso font-space-grotesk px-8 py-3 text-lg uppercase tracking-wider transition-all duration-300 hover:bg-cream"
          >
            Visit Us Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}