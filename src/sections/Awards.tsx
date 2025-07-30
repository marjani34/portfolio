import { awards } from '@/data/portfolio'

const Awards = () => {
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
    <section id="awards" className="section-padding bg-gradient-to-r from-secondary-700 via-primary-700 to-accent-700 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Awards & Recognition
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
              Recognition for my work, achievements in competitions, and contributions to the tech community. 
              These awards represent milestones in my journey as a developer and innovator.
            </p>
          </div>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 group hover:scale-105 transition-transform duration-300">
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

          {/* Statistics */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Awards Won
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'hackathon').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Hackathons
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'competition').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Competitions
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {awards.filter(a => a.category === 'recognition').length}
              </div>
              <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                Recognitions
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Always striving for excellence and pushing the boundaries of what&apos;s possible.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Let&apos;s Work Together
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Awards 