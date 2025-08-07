'use client'

import { Parallax } from 'react-scroll-parallax'
import { certificates } from '@/data/portfolio'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const Certificates = () => {
  // Scroll animations for different elements with delays
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const certificatesGridAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 700 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 900 });

  const getCategoryColor = (category: string) => {
    const colors = {
      development: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      cloud: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      design: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      management: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      other: 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      development: '💻',
      cloud: '☁️',
      design: '🎨',
      management: '📊',
      other: '📜'
    }
    return icons[category as keyof typeof icons] || '📜'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false
    return new Date(expiryDate) < new Date()
  }

  const isExpiringSoon = (expiryDate?: string) => {
    if (!expiryDate) return false
    const expiry = new Date(expiryDate)
    const now = new Date()
    const daysUntilExpiry = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    return daysUntilExpiry <= 30 && daysUntilExpiry > 0
  }

  return (
    <section id="certificates" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
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

      {/* Certificate-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-10} className="absolute top-1/2 left-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      </Parallax>

      <Parallax speed={-7} className="absolute top-1/3 right-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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
              Certifications & Achievements
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
              Professional certifications and achievements that demonstrate my commitment to continuous learning 
              and expertise in various technologies and methodologies.
            </p>
          </div>
        </Parallax>

        {/* Certificates Grid */}
        <Parallax speed={-2}>
          <div
            ref={certificatesGridAnimation.elementRef}
            className={`max-w-6xl mx-auto ${scrollAnimations.fadeInScale.initial} ${certificatesGridAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 group hover:scale-105 transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10">
                  {/* Certificate Icon */}
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-2xl">{getCategoryIcon(cert.category)}</span>
                  </div>

                  {/* Certificate Info */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-white line-clamp-2">
                        {cert.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                        {cert.category}
                      </span>
                    </div>

                    <p className="text-secondary-200 dark:text-secondary-100 text-sm font-medium">
                      {cert.issuer}
                    </p>

                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-200 dark:text-secondary-100">Issued:</span>
                        <span className="text-white font-medium">
                          {formatDate(cert.issueDate)}
                        </span>
                      </div>

                      {cert.expiryDate && (
                        <div className="flex justify-between text-sm">
                          <span className="text-secondary-500 dark:text-secondary-400">Expires:</span>
                          <span className={`font-medium ${
                            isExpired(cert.expiryDate) 
                              ? 'text-red-600 dark:text-red-400' 
                              : isExpiringSoon(cert.expiryDate)
                              ? 'text-yellow-600 dark:text-yellow-400'
                              : 'text-secondary-900 dark:text-white'
                          }`}>
                            {formatDate(cert.expiryDate)}
                          </span>
                        </div>
                      )}

                      {cert.credentialId && (
                        <div className="flex justify-between text-sm">
                          <span className="text-secondary-500 dark:text-secondary-400">ID:</span>
                          <span className="text-secondary-900 dark:text-white font-mono text-xs">
                            {cert.credentialId}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Status Badge */}
                    {cert.expiryDate && (
                      <div className="pt-2">
                        {isExpired(cert.expiryDate) ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                            ⚠️ Expired
                          </span>
                        ) : isExpiringSoon(cert.expiryDate) ? (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                            ⏰ Expiring Soon
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            ✅ Active
                          </span>
                        )}
                      </div>
                    )}

                    {/* View Certificate Link */}
                    {cert.url && (
                      <div className="pt-2">
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm font-medium"
                        >
                          View Certificate →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
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
              Continuously expanding my knowledge and skills through professional certifications.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Let&apos;s Discuss Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Parallax>
      </div>

      {/* Smooth Transition Zone to Awards Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Certificates 