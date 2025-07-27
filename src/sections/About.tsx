import { personalInfo } from '@/data/portfolio'

const About = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                    {personalInfo.name}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-secondary-900 dark:text-white">
                  Who I Am
                </h3>
                <p className="text-lg text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  {personalInfo.about}
                </p>
              </div>

              {/* AI Expertise Highlight */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white text-lg">🤖</span>
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-900 dark:text-white">
                    AI & Machine Learning Expertise
                  </h4>
                </div>
                <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed">
                  With a <strong className="text-purple-600 dark:text-purple-400">PhD in Artificial Intelligence</strong>, 
                  I bring deep theoretical knowledge and practical AI/ML expertise to every project. 
                  This academic foundation enables me to approach complex technical challenges with innovative, 
                  AI-driven solutions while maintaining the highest standards of software engineering.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Experience
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {personalInfo.experience}
                  </p>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Education
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                    PhD in AI
                  </p>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Location
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    {personalInfo.location}
                  </p>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Languages
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                    {personalInfo.languages?.join(', ')}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="#projects" 
                  className="btn-primary"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-secondary"
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

export default About 