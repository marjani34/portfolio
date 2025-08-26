import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Gallery from '@/sections/Gallery'
import Projects from '@/sections/Projects'
import Skills from '@/sections/Skills'
import LanguageExams from '@/sections/LanguageExams'
import Books from '@/sections/Books'
import Certificates from '@/sections/Certificates'
import Awards from '@/sections/Awards'
import Contact from '@/sections/Contact'
import { personalInfo } from '@/data/portfolio'

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": personalInfo.title,
    "email": personalInfo.email,
    "url": "https://amirmarjani.com",
    "sameAs": [
      "https://github.com/amir-marjani",
      "https://linkedin.com/in/amir-marjani"
    ],
    "knowsAbout": [
      "Front End Development",
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "Web Development",
      "UI/UX Design"
    ],
    "description": "Front End Manager and Full Stack Developer specializing in Angular, React, and modern web technologies."
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Skills />
        <LanguageExams />
        <Projects />
        <Books />
        <Certificates />
        <Awards />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
