'use client'

import { Parallax } from 'react-scroll-parallax'
import { skills } from '@/data/portfolio'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
    design: skills.filter(skill => skill.category === 'design'),
    management: skills.filter(skill => skill.category === 'management')
  }

  // Scroll animations for different elements with delays
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const skillsGridAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false, delay: 700 });
  const legendAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 900 });

  const getSkillIcon = (skillName: string) => {
    const icons: { [key: string]: string } = {
      'React': '⚛️',
      'Next.js': '▲',
      'TypeScript': '📘',
      'JavaScript': '🟨',
      'HTML/CSS': '🌐',
      'Tailwind CSS': '🎨',
      'Node.js': '🟢',
      'Express.js': '🚂',
      'Python': '🐍',
      'Django': '🎯',
      'PostgreSQL': '🐘',
      'MongoDB': '🍃',
      'Redis': '🔴',
      'Git': '📝',
      'Docker': '🐳',
      'AWS': '☁️',
      'Vercel': '▲',
      'Figma': '🎨',
      'Adobe XD': '🎭',
      'Photoshop': '🖼️'
    }
    return icons[skillName] || '💻'
  }

  const getSkillLevelColor = (level: number) => {
    if (level >= 4) return 'text-green-400'
    if (level >= 3) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800">
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

      {/* Tech-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-10} className="absolute top-1/2 left-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-7} className="absolute top-1/3 right-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      </Parallax>

      {/* Main Content */}
      <div className="relative z-10 container-custom">
        {/* Section Title */}
        <Parallax speed={-5}>
          <div
            ref={titleAnimation.elementRef}
            className={`text-center mb-12 ${scrollAnimations.fadeInUp.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skills & Technologies
            </h2>
          </div>
        </Parallax>
        
        {/* Section Description */}
        <Parallax speed={-3}>
          <div
            ref={descriptionAnimation.elementRef}
            className={`text-center mb-12 ${scrollAnimations.fadeInUp.initial} ${descriptionAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
              I&apos;ve worked with a variety of technologies to create robust and scalable applications. 
              Here&apos;s a breakdown of my technical skills and proficiency levels.
            </p>
          </div>
        </Parallax>

        {/* Skills Grid */}
        <Parallax speed={-2}>
          <div
            ref={skillsGridAnimation.elementRef}
            className={`max-w-6xl mx-auto ${scrollAnimations.fadeInScale.initial} ${skillsGridAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Frontend Skills */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Frontend
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.frontend.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Backend
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.backend.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database Skills */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🗄️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Database
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.database.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🛠️</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Tools
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.tools.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Design
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.design.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Management */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    Management
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillCategories.management.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                        <span className="font-medium text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-medium ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}/5
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Parallax>

        {/* Skill Level Legend */}
        <Parallax speed={0}>
          <div
            ref={legendAnimation.elementRef}
            className={`mt-12 text-center ${scrollAnimations.fadeInUp.initial} ${legendAnimation.isVisible ? scrollAnimations.fadeInUp.animate : ''} ${scrollAnimations.fadeInUp.transition}`}
          >
            <h4 className="text-lg font-semibold mb-4 text-white">
              Skill Level Legend
            </h4>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                <span className="text-secondary-200 dark:text-secondary-100">Expert (4-5)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                <span className="text-secondary-200 dark:text-secondary-100">Intermediate (3)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                <span className="text-secondary-200 dark:text-secondary-100">Beginner (1-2)</span>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      {/* Smooth Transition Zone to Books Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Skills 