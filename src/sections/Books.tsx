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
        className={`text-sm ${i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
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
    <section id="books" className="section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-secondary-900 dark:to-secondary-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Library
        </h2>
        
        <div className="max-w-7xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              A curated collection of books that have shaped my thinking, enhanced my skills, 
              and influenced my approach to technology and life.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12">
            {books.map((book, index) => (
              <div key={book.id} className="group perspective-1000">
                {/* Book Container */}
                <div className="relative transform transition-all duration-500 group-hover:rotate-y-12 group-hover:scale-105">
                  {/* Book Shadow */}
                  <div className="absolute -bottom-2 left-2 right-2 h-4 bg-black/20 rounded-full blur-md transform rotate-x-45"></div>
                  
                  {/* Book Body */}
                  <div className="relative bg-white dark:bg-secondary-800 rounded-lg shadow-2xl overflow-hidden">
                    {/* Book Cover */}
                    <div className={`relative h-64 ${getBookCoverPattern(book.category)} p-6 flex flex-col justify-between`}>
                      {/* Cover Pattern Overlay */}
                      <div className="absolute inset-0 opacity-10">
                        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                      </div>
                      
                      {/* Category Badge */}
                      <div className="relative z-10 flex justify-end">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getCategoryAccentColor(book.category)} bg-opacity-80 backdrop-blur-sm`}>
                          {book.category}
                        </div>
                      </div>
                      
                      {/* Book Title and Author */}
                      <div className="relative z-10 text-white">
                        <div className="mb-2">
                          <span className="text-2xl">{getCategoryIcon(book.category)}</span>
                        </div>
                        <h3 className="text-lg font-bold leading-tight mb-2 line-clamp-2">
                          {book.title}
                        </h3>
                        <p className="text-sm opacity-90 font-medium">
                          by {book.author}
                        </p>
                      </div>
                      
                      {/* Book Spine Effect */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-black/20 to-transparent"></div>
                    </div>

                    {/* Book Pages Effect */}
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700"></div>
                    
                    {/* Book Content */}
                    <div className="p-6 bg-white dark:bg-secondary-800">
                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex">
                          {renderStars(book.rating)}
                        </div>
                        <span className="text-xs text-secondary-500 dark:text-secondary-400 font-medium">
                          {book.rating}/5
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-secondary-600 dark:text-secondary-300 leading-relaxed line-clamp-3 mb-4">
                        {book.description}
                      </p>

                      {/* Links */}
                      <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                        {book.amazonUrl && (
                          <a
                            href={book.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 rounded-md text-sm font-medium transition-colors duration-200"
                          >
                            Amazon
                          </a>
                        )}
                        {book.goodreadsUrl && (
                          <a
                            href={book.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 bg-secondary-50 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-100 dark:hover:bg-secondary-700 rounded-md text-sm font-medium transition-colors duration-200"
                          >
                            Goodreads
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Book Binding Effect */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-full bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-600 opacity-80"></div>
                    
                    {/* Page Edges */}
                    <div className="absolute top-0 right-0 w-2 h-full">
                      <div className="w-full h-full bg-gradient-to-l from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600"></div>
                    </div>
                  </div>

                  {/* Floating Elements for 3D Effect */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-300 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                </div>

                {/* Book Title Below */}
                <div className="mt-4 text-center">
                  <h4 className="text-sm font-semibold text-secondary-900 dark:text-white line-clamp-1">
                    {book.title}
                  </h4>
                  <p className="text-xs text-secondary-500 dark:text-secondary-400 mt-1">
                    {book.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white dark:bg-secondary-800 rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <div className="mb-6">
                <span className="text-4xl mb-4 block">📚</span>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                  Always Learning
                </h3>
                <p className="text-secondary-600 dark:text-secondary-300">
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