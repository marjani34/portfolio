'use client'

import { Parallax } from 'react-scroll-parallax'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'
import dynamic from 'next/dynamic'

// Dynamically import react-pdf components to avoid SSR issues
const PDFViewer = dynamic(() => import('@/components/PDFViewer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400 mx-auto mb-2"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading PDF viewer...</p>
      </div>
    </div>
  )
})

const LanguageExams = () => {
  // Scroll animations for different elements with delays
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const pdfAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 700 });
  const languagesAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 900 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 1100 });

  const languages = [
    {
      name: 'Persian',
      level: 'Native',
      proficiency: 100,
      icon: '🇮🇷',
      description: 'Fluent speaker with native-level understanding of Persian literature and culture.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'English',
      level: 'Advanced',
      proficiency: 85,
      icon: '🇺🇸',
      description: 'Professional working proficiency with experience in international business and technical communication.',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Turkish',
      level: 'Intermediate',
      proficiency: 65,
      icon: '🇹🇷',
      description: 'Conversational level with ability to handle daily interactions and basic business conversations.',
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'French',
      level: 'Beginner',
      proficiency: 35,
      icon: '🇫🇷',
      description: 'Basic understanding with foundation for future learning and cultural appreciation.',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="language-exams" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
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

      {/* Language-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.01-4.65 1.02-6.94C10.54 2.95 8.39 2 6 2 3.24 2 1 4.24 1 7c0 1.74.77 3.45 2.23 4.66.02.02.03.03.03.03l2.54 2.51c.39.39 1.02.39 1.41 0l2.54-2.51c.39-.39.39-1.02 0-1.41zM6 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      {/* Main Content */}
      <div className="relative z-10 container-custom">
        {/* Section Title */}
        <Parallax speed={-5}>
          <div
            ref={titleAnimation.elementRef}
            className={`text-center mb-12 ${scrollAnimations.fadeInUp.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Language & Exams
            </h2>
          </div>
        </Parallax>
        
        {/* Section Description */}
        <Parallax speed={-3}>
          <div
            ref={descriptionAnimation.elementRef}
            className={`text-center mb-12 ${scrollAnimations.fadeInUp.initial} ${descriptionAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
              Multilingual capabilities and language proficiency certifications that enable effective communication 
              across diverse international teams and global projects.
            </p>
          </div>
        </Parallax>

        {/* Two Column Layout: PDF on Left, Languages on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Duolingo PDF Display */}
          <Parallax speed={-2}>
            <div
              ref={pdfAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${pdfAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
                {/* PDF Content Display */}
                <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 mb-4">
                  <div className="text-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <span className="text-2xl">🦉</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Duolingo English Test
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Official English proficiency certification
                    </p>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-4 border border-gray-200 dark:border-gray-700">
                                         <PDFViewer
                       file="/awards/DET.pdf"
                     />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="text-center space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                         <a
                       href="/awards/DET.pdf"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                     >
                       <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                       </svg>
                       Open PDF in New Tab
                     </a>
                     
                     <a
                       href="/awards/duolingo/Duolingo English test.pdf"
                       download
                       className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent-600 to-secondary-600 hover:from-accent-700 hover:to-secondary-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                     >
                       <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                       </svg>
                       Download PDF
                     </a>
                  </div>
                  
                  <p className="text-secondary-300 dark:text-secondary-400 text-xs">
                    Use the buttons above to open or download the full PDF document.
                  </p>
                </div>
              </div>
            </div>
          </Parallax>

          {/* Right Column - Languages Grid */}
          <Parallax speed={-2}>
            <div
              ref={languagesAnimation.elementRef}
              className={`${scrollAnimations.fadeInRight.initial} ${languagesAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {languages.map((language, index) => (
                  <div 
                    key={language.name} 
                    className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 group hover:scale-105 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Language Header */}
                    <div className="text-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${language.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{language.icon}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {language.name}
                      </h3>
                      <span className="text-lg font-medium text-primary-300 dark:text-primary-200">
                        {language.level}
                      </span>
                    </div>

                    {/* Proficiency Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-secondary-200 dark:text-secondary-100 mb-2">
                        <span>Proficiency</span>
                        <span>{language.proficiency}%</span>
                      </div>
                      <div className="w-full bg-white/10 dark:bg-white/5 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${language.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${language.proficiency}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-secondary-200 dark:text-secondary-100 text-sm leading-relaxed text-center">
                      {language.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </div>

        {/* Call to Action */}
        <Parallax speed={0}>
          <div
            ref={ctaAnimation.elementRef}
            className={`text-center mt-16 ${scrollAnimations.fadeInUp.initial} ${ctaAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Language skills that bridge cultural gaps and enable global collaboration.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Connect
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Parallax>
      </div>

      {/* Smooth Transition Zone to Projects Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default LanguageExams
