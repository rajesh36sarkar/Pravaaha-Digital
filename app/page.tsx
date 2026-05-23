import Navbar from '../src/components/Navbar'
import Hero from '../src/components/Hero'
import Services from '../src/components/Services'
import Projects from '../src/components/Projects'
import About from '../src/components/About'
import Testimonials from '../src/components/Testimonials'
import CTA from '../src/components/CTA'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FAFAFC]">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}