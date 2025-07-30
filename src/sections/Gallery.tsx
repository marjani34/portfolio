import { personalInfo } from '@/data/portfolio'
import Image from 'next/image'

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-secondary-700 via-primary-700 to-accent-700 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Gallery
          </h2>
          
          {/* Hero Images Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Image 1 - Main Portrait */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/1.png"
                    alt="Amir Marjani - Professional Portrait"
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Professional</h3>
                    <p className="text-sm opacity-90">Leadership & Innovation</p>
                  </div>
                </div>
              </div>

              {/* Image 2 - Tech Environment */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/2.png"
                    alt="Amir Marjani - Tech Environment"
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Innovation</h3>
                    <p className="text-sm opacity-90">AI & Technology</p>
                  </div>
                </div>
              </div>

              {/* Image 3 - Contemplative */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105">
                  <Image
                    src="/images/3.png"
                    alt="Amir Marjani - Contemplative"
                    width={400}
                    height={500}
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-semibold">Vision</h3>
                    <p className="text-sm opacity-90">Future & Strategy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl text-white">👨‍💻</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white">
                      {personalInfo.name}
                    </h3>
                    <p className="text-lg text-secondary-600 dark:text-secondary-300">
                      {personalInfo.title}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-600 dark:text-secondary-300">
                      📍 {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-600 dark:text-secondary-300">
                      📧 {personalInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-600 dark:text-secondary-300">
                      📱 {personalInfo.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
                              <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                    {personalInfo.experience}
                  </div>
                  <div className="text-sm text-secondary-600 dark:text-secondary-300">
                    Years Experience
                  </div>
                </div>
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                  <div className="text-3xl font-bold text-primary-400 dark:text-primary-300 mb-2">
                    PhD
                  </div>
                  <div className="text-sm text-secondary-200 dark:text-secondary-100">
                    AI & ML
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - About Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Who I Am
                </h3>
                <p className="text-lg text-secondary-200 dark:text-secondary-100 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>
              </div>

              {/* AI Expertise Highlight */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    AI & Machine Learning Expertise
                  </h4>
                </div>
                <p className="text-secondary-200 dark:text-secondary-100 leading-relaxed">
                  With a <strong className="text-purple-400 dark:text-purple-300">PhD in Artificial Intelligence</strong>, 
                  I bring deep theoretical knowledge and practical AI/ML expertise to every project. 
                  This academic foundation enables me to approach complex technical challenges with innovative, 
                  AI-driven solutions while maintaining the highest standards of software engineering.
                </p>
              </div>

              {/* Languages */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages?.map((language, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/20 dark:bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="btn-primary text-center"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-secondary text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery 