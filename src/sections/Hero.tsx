'use client'

import { Parallax } from 'react-scroll-parallax'
import { personalInfo } from '@/data/portfolio'
import { useEffect, useState, useMemo } from 'react'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = useMemo(() => [
    "AI Researcher & Software Engineer",
    "Artificial Intelligence Scientist & Full Stack Developer",
    "AI-Focused Frontend & Full Stack Developer",
    "Human-Centered AI Engineer & Web Creator"
  ], []);

  // Scroll animations for different elements with faster timing
  const nameAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 100 });
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 200 });
  const educationAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const aboutAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 400 });
  const statsAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 500 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 600 });
  const scrollIndicatorAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 700 });

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (!isDeleting) {
      // Typing
      if (currentText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [currentText, currentTitleIndex, isDeleting, titles]);

  return (
    <section id="hero" className="relative min-h-screen md:min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-16 md:pb-8 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
      {/* Parallax Background Layers */}
      <Parallax speed={-20} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/80 via-primary-900/60 to-accent-900/80 dark:from-secondary-800/80 dark:via-primary-800/60 dark:to-accent-800/80"></div>
      </Parallax>
      
      <Parallax speed={-10} className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-accent-900/20 to-secondary-900/30 dark:from-primary-800/30 dark:via-accent-800/20 dark:to-secondary-800/30 opacity-30"></div>
      </Parallax>

      {/* Floating Blur Circles */}
      <Parallax speed={-5} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-500/20 dark:bg-primary-400/20 rounded-full blur-3xl transition-all duration-1000 delay-200"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/20 dark:bg-accent-400/20 rounded-full blur-3xl transition-all duration-1000 delay-400"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary-500/20 dark:bg-secondary-400/20 rounded-full blur-3xl transition-all duration-1000 delay-600"></div>
      </Parallax>

      {/* AI-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Name */}
        <Parallax speed={-5}>
          <div
            ref={nameAnimation.elementRef}
            className={`mb-6 ${scrollAnimations.fadeInScale.initial} ${nameAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-secondary-400 dark:from-primary-300 dark:via-accent-300 dark:to-secondary-300 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
          </div>
        </Parallax>

        {/* Dynamic Title */}
        <Parallax speed={-3}>
          <div
            ref={titleAnimation.elementRef}
            className={`mb-6 ${scrollAnimations.fadeInUp.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
              <span className="bg-gradient-to-r from-accent-400 via-primary-400 to-secondary-400 dark:from-accent-300 dark:via-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>
        </Parallax>

        {/* Education */}
        <Parallax speed={-2}>
          <div
            ref={educationAnimation.elementRef}
            className={`mb-8 ${scrollAnimations.fadeInLeft.initial} ${educationAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
          >
                         <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 max-w-2xl mx-auto">
               <div className="flex items-center justify-center space-x-4 mb-4">
                 <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-full flex items-center justify-center">
                   <span className="text-xl">🎓</span>
                 </div>
                 <div className="text-center">
                   <h3 className="text-lg md:text-xl font-semibold text-white">
                     PhD in Artificial Intelligence
                   </h3>
                   <p className="text-primary-200 dark:text-primary-100">
                     Islamic Azad University
                   </p>
                 </div>
               </div>
               <p className="text-secondary-200 dark:text-secondary-100 text-sm md:text-base">
                 {personalInfo.education}
               </p>
             </div>
          </div>
        </Parallax>

        {/* About */}
        <Parallax speed={-1}>
          <div
            ref={aboutAnimation.elementRef}
            className={`mb-12 ${scrollAnimations.fadeInRight.initial} ${aboutAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
          >
            <p className="text-lg md:text-xl text-secondary-200 dark:text-secondary-100 leading-relaxed max-w-3xl mx-auto">
              {personalInfo.about}
            </p>
          </div>
        </Parallax>

        {/* Stats Section */}
        <Parallax speed={0}>
          <div
            ref={statsAnimation.elementRef}
            className={`mb-16 ${scrollAnimations.bounceIn.initial} ${statsAnimation.isVisible ? scrollAnimations.bounceIn.animate : ''} ${scrollAnimations.bounceIn.transition}`}
          >
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Years Experience */}
                <div className="text-center group transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 dark:from-primary-400 dark:to-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">⏱️</span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {personalInfo.experience}
                  </div>
                  <div className="text-primary-200 dark:text-primary-100 font-medium">Years Experience</div>
                </div>

                {/* Based in */}
                <div className="text-center group transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 dark:from-accent-400 dark:to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">
                    {personalInfo.location}
                  </div>
                  <div className="text-accent-200 dark:text-accent-100 font-medium">Based in</div>
                </div>

                {/* PhD AI Research */}
                <div className="text-center group transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-secondary-600 dark:from-secondary-400 dark:to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="text-xl md:text-2xl font-bold text-white mb-2">
                    PhD
                  </div>
                  <div className="text-secondary-200 dark:text-secondary-100 font-medium">AI Research</div>
                </div>
              </div>
              
              {/* Inspirational Quote */}
              <div className="mt-8 pt-8 border-t border-white/20 dark:border-white/10">
                <p className="text-secondary-200 dark:text-secondary-100 italic text-lg">
                  &ldquo;The future belongs to those who believe in the beauty of their dreams.&rdquo; - Eleanor Roosevelt
                </p>
              </div>
            </div>
          </div>
        </Parallax>

        {/* CTA Buttons */}
        <Parallax speed={1}>
          <div
            ref={ctaAnimation.elementRef}
            className={`flex flex-col sm:flex-row gap-4 justify-center ${scrollAnimations.slideInUp.initial} ${ctaAnimation.isVisible ? scrollAnimations.slideInUp.animate : ''} ${scrollAnimations.slideInUp.transition}`}
          >
            <a 
              href="#about" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Learn More About Me
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
        </Parallax>

        {/* Scroll Indicator */}
        <Parallax speed={2}>
          <div
            ref={scrollIndicatorAnimation.elementRef}
            className={`mt-16 ${scrollAnimations.quickFadeIn.initial} ${scrollIndicatorAnimation.isVisible ? scrollAnimations.quickFadeIn.animate : ''} ${scrollAnimations.quickFadeIn.transition}`}
          >
            <div className="flex flex-col items-center space-y-2 text-secondary-300 dark:text-secondary-400">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Smooth Transition Zone to About Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Hero
