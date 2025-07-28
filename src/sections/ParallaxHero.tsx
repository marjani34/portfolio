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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
        <div className="absolute top-20 left-10 w-16 h-16 md:w-32 md:h-32 bg-primary-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-12 h-12 md:w-24 md:h-24 bg-accent-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 md:w-40 md:h-40 bg-secondary-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 md:w-28 md:h-28 bg-primary-400/15 rounded-full blur-xl"></div>
      </Parallax>

      {/* AI-Themed Floating Images - Left Side */}
      <Parallax speed={-12} className="absolute left-2 md:left-8 top-1/4 z-5">
        <div className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-40 md:opacity-60 hover:opacity-80 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: 0.8}} />
                <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.6}} />
              </linearGradient>
            </defs>
            <path d="M50 20 C30 20 15 35 15 55 C15 75 30 90 50 90 C70 90 85 75 85 55 C85 35 70 20 50 20 Z" fill="url(#brainGradient)" />
            <circle cx="35" cy="45" r="3" fill="#ffffff" opacity="0.8" />
            <circle cx="65" cy="45" r="3" fill="#ffffff" opacity="0.8" />
            <path d="M40 60 Q50 70 60 60" stroke="#ffffff" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </div>
      </Parallax>

      <Parallax speed={-6} className="absolute left-4 md:left-16 bottom-1/3 z-5">
        <div className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 opacity-30 md:opacity-50 hover:opacity-70 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.7}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0.5}} />
              </linearGradient>
            </defs>
            <circle cx="30" cy="30" r="8" fill="url(#neuralGradient)" />
            <circle cx="70" cy="30" r="8" fill="url(#neuralGradient)" />
            <circle cx="30" cy="70" r="8" fill="url(#neuralGradient)" />
            <circle cx="70" cy="70" r="8" fill="url(#neuralGradient)" />
            <circle cx="50" cy="50" r="8" fill="url(#neuralGradient)" />
            <line x1="30" y1="30" x2="50" y2="50" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="30" x2="50" y2="50" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="30" y1="70" x2="50" y2="50" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
            <line x1="70" y1="70" x2="50" y2="50" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
      </Parallax>

      {/* AI-Themed Floating Images - Right Side */}
      <Parallax speed={-10} className="absolute right-3 md:right-12 top-1/3 z-5">
        <div className="w-18 h-18 md:w-28 md:h-28 lg:w-36 lg:h-36 opacity-35 md:opacity-55 hover:opacity-75 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.7}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0.5}} />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="60" height="60" rx="8" fill="url(#chipGradient)" />
            <rect x="25" y="25" width="50" height="50" rx="4" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.8" />
            <circle cx="35" cy="35" r="2" fill="#ffffff" opacity="0.9" />
            <circle cx="65" cy="35" r="2" fill="#ffffff" opacity="0.9" />
            <circle cx="35" cy="65" r="2" fill="#ffffff" opacity="0.9" />
            <circle cx="65" cy="65" r="2" fill="#ffffff" opacity="0.9" />
            <rect x="40" y="40" width="20" height="20" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.6" />
          </svg>
        </div>
      </Parallax>

      <Parallax speed={-4} className="absolute right-2 md:right-8 bottom-1/4 z-5">
        <div className="w-10 h-10 md:w-16 md:h-16 lg:w-24 lg:h-24 opacity-25 md:opacity-45 hover:opacity-65 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f59e0b', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#ef4444', stopOpacity: 0.4}} />
              </linearGradient>
            </defs>
            <rect x="15" y="80" width="8" height="20" fill="url(#dataGradient)" />
            <rect x="30" y="60" width="8" height="40" fill="url(#dataGradient)" />
            <rect x="45" y="40" width="8" height="60" fill="url(#dataGradient)" />
            <rect x="60" y="20" width="8" height="80" fill="url(#dataGradient)" />
            <rect x="75" y="30" width="8" height="70" fill="url(#dataGradient)" />
            <line x1="15" y1="80" x2="85" y2="80" stroke="#ffffff" strokeWidth="1" opacity="0.7" />
          </svg>
        </div>
      </Parallax>

      {/* Additional Floating Code Elements */}
      <Parallax speed={-7} className="absolute left-1/4 top-8 md:top-16 z-5">
        <div className="w-12 h-12 md:w-20 md:h-20 lg:w-28 lg:h-28 opacity-25 md:opacity-40 hover:opacity-60 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.5}} />
                <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 0.3}} />
              </linearGradient>
            </defs>
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="url(#codeGradient)" strokeWidth="2" />
            <text x="30" y="35" fill="#ffffff" fontSize="8" opacity="0.8">&lt;/&gt;</text>
            <text x="25" y="50" fill="#ffffff" fontSize="6" opacity="0.6">AI</text>
            <text x="25" y="65" fill="#ffffff" fontSize="6" opacity="0.6">ML</text>
          </svg>
        </div>
      </Parallax>

      <Parallax speed={-9} className="absolute right-1/4 bottom-12 md:bottom-20 z-5">
        <div className="w-14 h-14 md:w-24 md:h-24 lg:w-32 lg:h-32 opacity-30 md:opacity-50 hover:opacity-70 transition-opacity duration-300">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#06b6d4', stopOpacity: 0.6}} />
                <stop offset="100%" style={{stopColor: '#3b82f6', stopOpacity: 0.4}} />
              </linearGradient>
            </defs>
            <rect x="25" y="30" width="50" height="40" rx="8" fill="url(#robotGradient)" />
            <rect x="30" y="35" width="15" height="15" rx="3" fill="#ffffff" opacity="0.8" />
            <rect x="55" y="35" width="15" height="15" rx="3" fill="#ffffff" opacity="0.8" />
            <rect x="40" y="55" width="20" height="8" rx="4" fill="#ffffff" opacity="0.6" />
            <rect x="35" y="20" width="30" height="8" rx="4" fill="url(#robotGradient)" />
          </svg>
        </div>
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-5xl mx-auto">
          {/* Animated Greeting */}
          <Parallax speed={8} className="mb-4 md:mb-8">
            <p 
              className={`text-primary-300 font-medium text-base md:text-lg lg:text-xl xl:text-2xl transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Welcome to my digital space
            </p>
          </Parallax>

          {/* Main Heading */}
          <Parallax speed={5} className="mb-4 md:mb-8">
            <h1 
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-3 md:mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {personalInfo.name}
            </h1>
          </Parallax>

          {/* Subheading */}
          <Parallax speed={3} className="mb-6 md:mb-10">
            <h2 
              className={`text-lg sm:text-xl md:text-2xl lg:text-3xl text-secondary-200 mb-4 md:mb-8 transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {personalInfo.title} & Full Stack Developer
            </h2>
          </Parallax>

          {/* PhD Badge */}
          <Parallax speed={2} className="mb-6 md:mb-8">
            <div 
              className={`inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm md:text-lg font-semibold transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="mr-2 md:mr-3 text-lg md:text-2xl">🎓</span>
              <span className="hidden sm:inline">{personalInfo.education}</span>
              <span className="sm:hidden">PhD in AI</span>
            </div>
          </Parallax>

          {/* Description */}
          <Parallax speed={2} className="mb-12 md:mb-16">
            <p 
              className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-secondary-300 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {personalInfo.about}
            </p>
          </Parallax>

          {/* CTA Buttons */}
          <Parallax speed={1} className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <button 
              className={`btn-primary text-sm md:text-base py-2 px-4 md:py-3 md:px-6 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </button>
            <button 
              className={`btn-secondary text-sm md:text-base py-2 px-4 md:py-3 md:px-6 transition-all duration-1000 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let&apos;s Connect
            </button>
          </Parallax>

          {/* Stats */}
          <Parallax speed={0} className="mt-12 md:mt-16 pb-16 md:pb-20">
            <div 
              className={`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-1200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-1 md:mb-2">{personalInfo.experience}</div>
                <div className="text-secondary-300 text-xs sm:text-sm md:text-base">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-1 md:mb-2">{personalInfo.location.split(',')[0]}</div>
                <div className="text-secondary-300 text-xs sm:text-sm md:text-base">Based in</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 mb-1 md:mb-2">PhD</div>
                <div className="text-secondary-300 text-xs sm:text-sm md:text-base">AI Research</div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Parallax speed={-3} className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="animate-bounce-slow">
          <div className="relative group cursor-pointer" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            {/* Main Arrow */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white/80 group-hover:text-primary-400 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
            
            {/* Pulsing Ring Effect */}
            <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-white/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-12 h-12 md:w-16 md:h-16 border-2 border-primary-400/30 rounded-full animate-pulse"></div>
            
            {/* Text Label */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-white/70 font-medium whitespace-nowrap">Scroll Down</span>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default ParallaxHero 