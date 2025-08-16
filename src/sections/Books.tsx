"use client"

import { books } from '@/data/portfolio'
import { Parallax } from 'react-scroll-parallax'

const Books = () => {
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

      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Library
        </h2>
        
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
              A curated collection of books that have shaped my thinking, enhanced my skills, 
              and influenced my approach to technology and life.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-16 items-stretch">
            {books.map((book, index) => (
              <div key={book.id} className="group h-full">
                {/* Book Container */}
                <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 h-full">
                  {/* Book Shadow */}
                  <div className="absolute -bottom-4 left-2 right-2 h-6 bg-black/40 rounded-full blur-xl transform rotate-x-45"></div>
                  
                  {/* Book Body */}
                  <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10 h-full flex flex-col">
                    {/* Book Cover */}
                    <div className={`relative h-64 ${getBookCoverPattern(book.category)} p-6 flex flex-col justify-between flex-shrink-0`}>
                      {/* Cover Pattern Overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full bg-gradient-to-br from-white/30 to-transparent"></div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="relative z-10 flex justify-end">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCategoryAccentColor(book.category)} bg-opacity-90 backdrop-blur-sm shadow-lg`}>
                          {book.category}
                        </div>
                      </div>
                      
                      {/* Book Title and Author */}
                      <div className="relative z-10 text-white">
                        <div className="mb-2">
                          <span className="text-2xl drop-shadow-lg">{getCategoryIcon(book.category)}</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2 drop-shadow-lg">
                          {book.title}
                        </h3>
                        <p className="text-sm opacity-95 font-medium drop-shadow-md">
                          by {book.author}
                        </p>
                      </div>
                      
                      {/* Subtle Spine Effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>
                    
                    {/* Book Content */}
                    <div className="p-6 pb-8 bg-white/10 dark:bg-white/5 backdrop-blur-md flex-1 flex flex-col">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {renderStars(book.rating)}
                        </div>
                        <span className="text-xs text-secondary-200 dark:text-secondary-100 font-medium">
                          {book.rating}/5
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-secondary-200 dark:text-secondary-100 leading-relaxed line-clamp-3 mb-4 flex-1">
                        {book.description}
                      </p>

                      {/* Links */}
                      <div className="flex gap-3 pt-2 border-t border-white/20 dark:border-white/10 mt-auto">
                        {book.amazonUrl && (
                          <a
                            href={book.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 bg-white/20 dark:bg-white/10 text-white hover:bg-white/30 dark:hover:bg-white/20 rounded-md text-sm font-medium transition-colors duration-200 backdrop-blur-sm border border-white/20"
                          >
                            Amazon
                          </a>
                        )}
                        {book.goodreadsUrl && (
                          <a
                            href={book.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 bg-white/10 dark:bg-white/5 text-white hover:bg-white/20 dark:hover:bg-white/10 rounded-md text-sm font-medium transition-colors duration-200 backdrop-blur-sm border border-white/10"
                          >
                            Goodreads
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Glow Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Book Title Below */}
                <div className="mt-3 text-center">
                  <h4 className="text-sm font-semibold text-white line-clamp-1">
                    {book.title}
                  </h4>
                  <p className="text-xs text-secondary-200 dark:text-secondary-100 mt-1">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-white/20 dark:border-white/10">
              <div className="mb-6">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Always Learning
                </h3>
                <p className="text-secondary-200 dark:text-secondary-100">
                  Knowledge is power, and books are the gateway to endless possibilities.
                </p>
              </div>
              <a 
                href="https://goodreads.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-2">📖</span>
                Explore My Reading Journey
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Transition Zone to Certificates Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent-800 via-accent-800/80 to-transparent dark:from-accent-900 dark:via-accent-900/80"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Books 