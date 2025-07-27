import Link from 'next/link'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-primary-600 dark:text-primary-400 font-medium mb-4 animate-fade-in">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-secondary-900 dark:text-white mb-6 animate-slide-up">
            Amir Marjani
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-secondary-600 dark:text-secondary-300 mb-4 animate-slide-up">
            Front End Manager & Full Stack Developer
          </h2>
          
          {/* PhD Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-sm font-semibold mb-8 animate-slide-up">
            <span className="mr-2">🎓</span>
            PhD in Artificial Intelligence
          </div>
          
          {/* Description */}
          <p className="text-lg text-secondary-600 dark:text-secondary-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Experienced Front-End Developer with a <strong className="text-primary-600 dark:text-primary-400">PhD in Artificial Intelligence</strong>, 
            specializing in cloud-based, scalable solutions for the banking and finance sector. 
            Combining deep AI knowledge with modern web technologies (Angular, React.js, Next.js) 
            to create intelligent, innovative applications. Leading teams dedicated to clean architecture, 
            quality, and cutting-edge development practices.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link href="#projects" className="btn-primary">
              View My Work
            </Link>
            <Link href="#contact" className="btn-secondary">
              Get In Touch
            </Link>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <Link href="#about" className="text-secondary-400 hover:text-primary-600 transition-colors duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 