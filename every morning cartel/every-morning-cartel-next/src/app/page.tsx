import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import VideoHero from '@/components/VideoHero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Products from '@/components/Products'
import LoyaltyProgram from '@/components/LoyaltyProgram'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-charcoal-black">
      <Header />
      <Navigation />
      <main>
        <VideoHero />
        <About />
        <Experience />
        <Products />
        <LoyaltyProgram />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
