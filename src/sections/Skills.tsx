import { skills } from '@/data/portfolio'

const Skills = () => {
  const skillCategories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    database: skills.filter(skill => skill.category === 'database'),
    tools: skills.filter(skill => skill.category === 'tools'),
    design: skills.filter(skill => skill.category === 'design'),
    management: skills.filter(skill => skill.category === 'management')
  }

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
    <section id="skills" className="section-padding bg-gradient-to-tr from-secondary-700 via-primary-700 to-accent-700 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative">
      {/* Top Fade Transition */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-accent-700 via-accent-700/80 to-transparent dark:from-accent-800 dark:via-accent-800/80"></div>
      
      {/* Smooth Transition Zone to Books Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary-700 via-primary-700/80 to-transparent dark:from-primary-800 dark:via-primary-800/80"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Skills Overview */}
          <div className="text-center mb-12">
            <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
              I&apos;ve worked with a variety of technologies to create robust and scalable applications. 
              Here&apos;s a breakdown of my technical skills and proficiency levels.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/20 dark:border-white/10">
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

          {/* Skill Level Legend */}
          <div className="mt-12 text-center">
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
        </div>
      </div>
    </section>
  )
}

export default Skills 