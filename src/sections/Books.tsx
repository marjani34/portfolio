import { books } from '@/data/portfolio'

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
    <section id="books" className="section-padding bg-gradient-to-bl from-secondary-800 via-primary-800 to-accent-800 dark:from-secondary-900 dark:via-primary-900 dark:to-accent-900">
      <div className="container-custom">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {books.map((book, index) => (
              <div key={book.id} className="group">
                {/* Book Container */}
                <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                  {/* Book Shadow */}
                  <div className="absolute -bottom-4 left-2 right-2 h-6 bg-black/40 rounded-full blur-xl transform rotate-x-45"></div>
                  
                  {/* Book Body */}
                  <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20 dark:border-white/10">
                    {/* Book Cover */}
                    <div className={`relative h-64 ${getBookCoverPattern(book.category)} p-6 flex flex-col justify-between`}>
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
                    <div className="p-6 bg-white/10 dark:bg-white/5 backdrop-blur-md">
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
                      <p className="text-sm text-secondary-200 dark:text-secondary-100 leading-relaxed line-clamp-3 mb-4">
                        {book.description}
                      </p>

                      {/* Links */}
                      <div className="flex gap-3 pt-2 border-t border-white/20 dark:border-white/10">
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
                <div className="mt-4 text-center">
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
          <div className="text-center mt-16">
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
    </section>
  )
}

export default Books 