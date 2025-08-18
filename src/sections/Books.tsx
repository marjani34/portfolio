"use client"

import { books } from '@/data/portfolio'
import { Parallax } from 'react-scroll-parallax'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const Books = () => {
  // Scroll animations for different elements with faster timing
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 100 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 200 });
  const booksGridAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const statsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 400 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });

  const getCategoryColor = (category: string) => {
    const colors = {
      technical: 'from-blue-500 to-blue-700',
      business: 'from-green-500 to-green-700',
      philosophy: 'from-purple-500 to-purple-700',
      fiction: 'from-pink-500 to-pink-700',
      biography: 'from-orange-500 to-orange-700'
    }
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-700'
  }

  const getCategoryAccentColor = (category: string) => {
    const colors = {
      technical: 'bg-blue-600',
      business: 'bg-green-600',
      philosophy: 'bg-purple-600',
      fiction: 'bg-pink-600',
      biography: 'bg-orange-600'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-600'
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-400 dark:text-gray-600'}`}
      >
        ★
      </span>
    ))
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      technical: '💻',
      business: '📈',
      philosophy: '🤔',
      fiction: '📚',
      biography: '👤'
    }
    return icons[category as keyof typeof icons] || '📖'
  }

  const getBookCoverPattern = (category: string) => {
    const patterns = {
      technical: 'bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600',
      business: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
      philosophy: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600',
      fiction: 'bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600',
      biography: 'bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600'
    }
    return patterns[category as keyof typeof patterns] || 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600'
  }

  return (
    <section id="books" className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative overflow-hidden">
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

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <Parallax speed={-5}>
            <div
              ref={titleAnimation.elementRef}
              className={`text-center mb-8 ${scrollAnimations.fadeInScale.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Books & Reading
              </h2>
            </div>
          </Parallax>

          {/* Section Description */}
          <Parallax speed={-3}>
            <div
              ref={descriptionAnimation.elementRef}
              className={`text-center mb-16 ${scrollAnimations.fadeInUp.initial} ${descriptionAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
            >
              <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
                A curated collection of books that have shaped my thinking, expanded my knowledge, 
                and influenced my approach to technology, business, and life.
              </p>
            </div>
          </Parallax>

          {/* Books Grid */}
          <Parallax speed={-2}>
            <div
              ref={booksGridAnimation.elementRef}
              className={`mb-16 ${scrollAnimations.slideInUp.initial} ${booksGridAnimation.isVisible ? scrollAnimations.slideInUp.animate : ''} ${scrollAnimations.slideInUp.transition}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book, index) => (
                  <div
                    key={book.id}
                    className={`h-full ${scrollAnimations.staggerItem.initial} ${booksGridAnimation.isVisible ? scrollAnimations.staggerItem.animate : ''} ${scrollAnimations.staggerItem.transition}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 hover:bg-white/15 dark:hover:bg-white/10 h-full flex flex-col">
                      {/* Book Cover */}
                      <div className={`h-48 ${getBookCoverPattern(book.category)} flex items-center justify-center relative overflow-hidden`}>
                        <div className="text-6xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                          {getCategoryIcon(book.category)}
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className={`px-2 py-1 ${getCategoryAccentColor(book.category)} text-white text-xs rounded-full font-medium`}>
                            {book.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center space-x-1">
                            {renderStars(book.rating)}
                          </div>
                        </div>
                      </div>

                      {/* Book Content */}
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                          {book.title}
                        </h3>
                        <p className="text-secondary-300 dark:text-secondary-200 text-sm mb-3">
                          by {book.author}
                        </p>
                        <p className="text-secondary-200 dark:text-secondary-100 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {book.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-2 mt-auto">
                          {book.amazonUrl && (
                            <a
                              href={book.amazonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white text-center py-2 px-3 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                            >
                              Amazon
                            </a>
                          )}
                          {book.goodreadsUrl && (
                            <a
                              href={book.goodreadsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-white/10 dark:bg-white/5 hover:bg-white/20 dark:hover:bg-white/10 text-white text-center py-2 px-3 rounded-lg text-sm font-medium border border-white/20 dark:border-white/10 transition-all duration-300 transform hover:scale-105"
                            >
                              Goodreads
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Parallax>

          {/* Reading Statistics */}
          <Parallax speed={-1}>
            <div
              ref={statsAnimation.elementRef}
              className={`mb-16 ${scrollAnimations.fadeInRight.initial} ${statsAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Reading Insights</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-primary-400 dark:text-primary-300 mb-2">
                      {books.length}
                    </div>
                    <p className="text-secondary-300 dark:text-secondary-200 text-sm">Books Read</p>
                  </div>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-accent-400 dark:text-accent-300 mb-2">
                      {books.filter(b => b.category === 'technical').length}
                    </div>
                    <p className="text-secondary-300 dark:text-secondary-200 text-sm">Technical</p>
                  </div>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-secondary-400 dark:text-secondary-300 mb-2">
                      {books.filter(b => b.category === 'business').length}
                    </div>
                    <p className="text-secondary-300 dark:text-secondary-200 text-sm">Business</p>
                  </div>
                  <div className="text-center h-full flex flex-col justify-center">
                    <div className="text-3xl font-bold text-primary-400 dark:text-primary-300 mb-2">
                      {(books.reduce((acc, book) => acc + book.rating, 0) / books.length).toFixed(1)}
                    </div>
                    <p className="text-secondary-300 dark:text-secondary-200 text-sm">Avg Rating</p>
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
              <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-primary-500/20 dark:to-accent-500/20 backdrop-blur-md p-8 rounded-2xl border border-primary-500/30 dark:border-primary-400/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Expand Your Knowledge
                </h3>
                <p className="text-secondary-200 dark:text-secondary-100 mb-6">
                  Reading is fundamental to growth. Let's discuss these books or share recommendations for continuous learning.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Discuss Books
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                  <a 
                    href="https://www.goodreads.com/user/show/your-profile" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    My Goodreads
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Parallax>
        </div>
      </div>

      {/* Smooth Transition Zone to Certificates Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Books 