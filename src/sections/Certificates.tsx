import { certificates } from '@/data/portfolio'

const Certificates = () => {
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
    <section id="certificates" className="section-padding bg-secondary-50 dark:bg-secondary-800">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Certifications & Achievements
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              Professional certifications and achievements that demonstrate my commitment to continuous learning 
              and expertise in various technologies and methodologies.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div key={cert.id} className="card p-6 group hover:scale-105 transition-transform duration-300">
                {/* Certificate Icon */}
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">{getCategoryIcon(cert.category)}</span>
                </div>

                {/* Certificate Info */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(cert.category)}`}>
                      {cert.category}
                    </span>
                  </div>

                  <p className="text-secondary-600 dark:text-secondary-400 text-sm font-medium">
                    {cert.issuer}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-secondary-500 dark:text-secondary-400">Issued:</span>
                      <span className="text-secondary-900 dark:text-white font-medium">
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

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-secondary-600 dark:text-secondary-300 mb-6">
              Continuously expanding my knowledge and skills through professional certifications.
            </p>
            <a 
              href="#contact" 
              className="btn-primary"
            >
              Let's Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificates 