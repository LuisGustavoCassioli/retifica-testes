import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Differentials from './components/Differentials'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <Loader />

  return (
    <div className="bg-black-deep text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Differentials />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
