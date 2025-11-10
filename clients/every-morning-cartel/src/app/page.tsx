import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Products from '@/components/Products'
import LocationCards from '@/components/LocationCards'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Products />
      <LocationCards />
      <Contact />
      <Footer />
    </div>
  )
}
