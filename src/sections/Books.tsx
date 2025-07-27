import { books } from '@/data/portfolio'

const Books = () => {
  const getCategoryColor = (category: string) => {
    const colors = {
      technical: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      business: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      philosophy: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      fiction: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200',
      biography: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200'
    }
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
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

  return (
    <section id="books" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Favorite Books
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Here are some of my favorite books that have influenced my thinking, 
              improved my skills, and shaped my approach to development and life.
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="card p-6 group hover:scale-105 transition-transform duration-300">
                {/* Book Cover Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{getCategoryIcon(book.category)}</span>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                      Book Cover
                    </p>
                  </div>
                </div>

                {/* Book Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white line-clamp-2">
                      {book.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(book.category)}`}>
                      {book.category}
                    </span>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
                    by {book.author}
                  </p>

                  <p className="text-secondary-600 dark:text-secondary-300 text-sm leading-relaxed line-clamp-3">
                    {book.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {renderStars(book.rating)}
                    </div>
                    <span className="text-sm text-secondary-500 dark:text-secondary-400">
                      {book.rating}/5
                    </span>
                  </div>

                  {/* Links */}
                  <div className="flex gap-2 pt-2">
                    {book.amazonUrl && (
                      <a
                        href={book.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm font-medium"
                      >
                        Amazon →
                      </a>
                    )}
                    {book.goodreadsUrl && (
                      <a
                        href={book.goodreadsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 text-sm font-medium"
                      >
                        Goodreads →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Always learning and expanding my knowledge through great books.
            </p>
            <a 
              href="https://goodreads.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View My Reading List
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Books 