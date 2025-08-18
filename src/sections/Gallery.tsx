"use client"

import Image from 'next/image'
import { Parallax } from 'react-scroll-parallax'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const Gallery = () => {
  // Scroll animations for different elements with faster timing
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 100 });
  const heroImagesAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 200 });
  const image1Animation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const image2Animation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 400 });
  const image3Animation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 600 });

  return (
    <section id="gallery" className="min-h-screen py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative overflow-hidden">
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

      <Parallax speed={-10} className="absolute top-1/2 left-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      <Parallax speed={-7} className="absolute top-1/3 right-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <div className="container-custom relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <Parallax speed={-5}>
            <div
              ref={titleAnimation.elementRef}
              className={`text-center mb-16 ${scrollAnimations.fadeInScale.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Gallery
              </h2>
            </div>
          </Parallax>
          
          {/* Hero Images Section */}
          <Parallax speed={-2}>
            <div
              ref={heroImagesAnimation.elementRef}
              className={`mb-16 ${scrollAnimations.fadeInUp.initial} ${heroImagesAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                {/* Image 1 - Main Portrait */}
                <div
                  ref={image1Animation.elementRef}
                  className={`relative group ${scrollAnimations.fadeInLeft.initial} ${image1Animation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/images/1.png"
                      alt="Amir Marjani - Professional Portrait"
                      width={400}
                      height={500}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">Professional</h3>
                      <p className="text-sm opacity-90">Leadership & Innovation</p>
                    </div>
                  </div>
                </div>

                {/* Image 2 - Tech Environment */}
                <div
                  ref={image2Animation.elementRef}
                  className={`relative group ${scrollAnimations.fadeInUp.initial} ${image2Animation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/images/2.png"
                      alt="Amir Marjani - Tech Environment"
                      width={400}
                      height={500}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">Innovation</h3>
                      <p className="text-sm opacity-90">Technology & Creativity</p>
                    </div>
                  </div>
                </div>

                {/* Image 3 - Creative Work */}
                <div
                  ref={image3Animation.elementRef}
                  className={`relative group ${scrollAnimations.fadeInRight.initial} ${image3Animation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                    <Image
                      src="/images/3.png"
                      alt="Amir Marjani - Creative Work"
                      width={400}
                      height={500}
                      className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-semibold">Creative</h3>
                      <p className="text-sm opacity-90">Design & Development</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Parallax>

          {/* Call to Action */}
          <Parallax speed={0}>
            <div
              ref={ctaAnimation.elementRef}
              className={`text-center ${scrollAnimations.bounceIn.initial} ${ctaAnimation.isVisible ? scrollAnimations.bounceIn.animate : ''} ${scrollAnimations.bounceIn.transition}`}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to See More?
                </h3>
                <p className="text-secondary-200 dark:text-secondary-100 mb-6">
                  Explore my projects and see how I bring ideas to life through technology and innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#projects" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    View Projects
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
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Smooth Transition Zone to Projects Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Gallery 