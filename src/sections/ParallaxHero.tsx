'use client'

import { Parallax } from 'react-scroll-parallax'
import { useEffect, useState } from 'react'
import { personalInfo } from '@/data/portfolio'

const ParallaxHero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multiple Parallax Background Layers */}
      <Parallax speed={-15} className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2306366f;stop-opacity:1" /><stop offset="50%" style="stop-color:%231e40af;stop-opacity:1" /><stop offset="100%" style="stop-color:%233b82f6;stop-opacity:1" /></linearGradient><pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M 60 0 L 0 0 0 60" fill="none" stroke="%23ffffff" stroke-width="1" opacity="0.08"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grad1)"/><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />
      </Parallax>

      {/* Floating Elements */}
      <Parallax speed={-8} className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-primary-400/15 rounded-full blur-xl"></div>
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Animated Greeting */}
          <Parallax speed={8} className="mb-8">
            <p 
              className={`text-primary-300 font-medium text-lg md:text-xl lg:text-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Welcome to my digital space
            </p>
          </Parallax>

          {/* Main Heading */}
          <Parallax speed={5} className="mb-8">
            <h1 
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {personalInfo.name}
            </h1>
          </Parallax>

          {/* Subheading */}
          <Parallax speed={3} className="mb-10">
            <h2 
              className={`text-xl md:text-2xl lg:text-3xl text-secondary-200 mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {personalInfo.title} & Full Stack Developer
            </h2>
          </Parallax>

          {/* PhD Badge */}
          <Parallax speed={2} className="mb-8">
            <div 
              className={`inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-lg font-semibold transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="mr-3 text-2xl">🎓</span>
              {personalInfo.education}
            </div>
          </Parallax>

          {/* Description */}
          <Parallax speed={2} className="mb-16">
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-secondary-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {personalInfo.about}
            </p>
          </Parallax>

          {/* CTA Buttons */}
          <Parallax speed={1} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className={`btn-primary transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className={`btn-secondary transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s Connect
            </button>
          </Parallax>

          {/* Stats */}
          <Parallax speed={0} className="mt-16">
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{personalInfo.experience}</div>
                <div className="text-secondary-300 text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">{personalInfo.location.split(',')[0]}</div>
                <div className="text-secondary-300 text-sm md:text-base">Based in</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">PhD</div>
                <div className="text-secondary-300 text-sm md:text-base">AI Research</div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Parallax speed={-3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-slow">
          <svg
            className="w-8 h-8 text-white/70 hover:text-primary-400 transition-colors duration-200 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </Parallax>
    </section>
  )
}

export default ParallaxHero 