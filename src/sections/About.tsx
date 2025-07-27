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

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Experience
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    3+ Years
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
                    Projects
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    20+ Completed
                  </p>
                </div>
                <div className="bg-secondary-50 dark:bg-secondary-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                    Availability
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300">
                    Open to Work
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