import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ParallaxHero from '@/sections/ParallaxHero'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import Books from '@/sections/Books'
import Certificates from '@/sections/Certificates'
import Awards from '@/sections/Awards'
import Contact from '@/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ParallaxHero />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Books />
      <Certificates />
      <Awards />
      <Contact />
      <Footer />
    </main>
  )
}
