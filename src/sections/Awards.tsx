'use client'

import { Parallax } from 'react-scroll-parallax'
import { awards } from '@/data/portfolio'
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

const Awards = () => {
  // Scroll animations for different elements with delays
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const pdfAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 700 });
  const awardsGridAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 900 });
  const statsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 1100 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 1300 });

  const getCategoryColor = (category: string) => {
    const colors = {
      hackathon: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      competition: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      recognition: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      achievement: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      hackathon: '🏆',
      competition: '🥇',
      recognition: '👑',
      achievement: '⭐'
    }
    return icons[category as keyof typeof icons] || '🏅'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <section id="awards" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
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

      {/* Award-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      <Parallax speed={-10} className="absolute top-1/2 left-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-7} className="absolute top-1/3 right-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
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
              Awards & Recognition
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
              Recognition for my work, achievements in competitions, and contributions to the tech community. 
              These awards represent milestones in my journey as a developer and innovator.
            </p>
          </div>
        </Parallax>

        {/* Two Column Layout: PDF on Left, Awards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - PDF Display */}
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
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      Recommendation Letter
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Professional endorsement with signature
                    </p>
                  </div>
                  
                  {/* PDF Viewer */}
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-4 border border-gray-200 dark:border-gray-700">
                    <PDFViewer
                      file="/awards/Amir Recomendation Letter.pdf"
                    />
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="text-center space-y-3">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="/awards/Amir Recomendation Letter.pdf"
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
                      href="/awards/Amir Recomendation Letter.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
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

          {/* Right Column - Awards Grid */}
          <Parallax speed={-2}>
            <div
              ref={awardsGridAnimation.elementRef}
              className={`${scrollAnimations.fadeInRight.initial} ${awardsGridAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
            >
              <div className="space-y-6">
                {awards.map((award) => (
                  <div key={award.id} className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 group hover:scale-105 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10">
                    {/* Award Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                          <span className="text-xl">{getCategoryIcon(award.category)}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {award.title}
                          </h3>
                          <p className="text-secondary-200 dark:text-secondary-100 text-sm">
                            {award.organization}
                          </p>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(award.category)}`}>
                        {award.category}
                      </span>
                    </div>

                    {/* Award Details */}
                    <div className="space-y-3">
                      <p className="text-secondary-200 dark:text-secondary-100 leading-relaxed">
                        {award.description}
                      </p>

                      <div className="flex items-center justify-between text-sm">
                        <span className="text-secondary-200 dark:text-secondary-100">Awarded:</span>
                        <span className="text-white font-medium">
                          {formatDate(award.date)}
                        </span>
                      </div>

                      {/* View Details Link */}
                      {award.url && (
                        <div className="pt-2">
                          <a
                            href={award.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm font-medium"
                          >
                            View Details →
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>
        </div>

        {/* Statistics */}
        <Parallax speed={-1}>
          <div
            ref={statsAnimation.elementRef}
            className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 ${scrollAnimations.fadeInUp.initial} ${statsAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <div className="text-center group transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Awards Won
              </p>
            </div>
            <div className="text-center group transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'hackathon').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Hackathons
              </p>
            </div>
            <div className="text-center group transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'competition').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Competitions
              </p>
            </div>
            <div className="text-center group transition-all duration-300 hover:scale-105">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'recognition').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Recognitions
              </p>
            </div>
          </div>
        </Parallax>

        {/* Call to Action */}
        <Parallax speed={0}>
          <div
            ref={ctaAnimation.elementRef}
            className={`text-center mt-12 ${scrollAnimations.fadeInUp.initial} ${ctaAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Always striving for excellence and pushing the boundaries of what&apos;s possible.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Work Together
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Parallax>
      </div>

      {/* Smooth Transition Zone to Contact Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Awards 