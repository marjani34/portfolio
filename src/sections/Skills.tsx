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
    if (level >= 4) return 'text-green-600 dark:text-green-400'
    if (level >= 3) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-red-600 dark:text-red-400'
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-secondary-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          {/* Skills Overview */}
          <div className="text-center mb-12">
            <p className="text-lg text-secondary-600 dark:text-secondary-300 max-w-3xl mx-auto">
              I've worked with a variety of technologies to create robust and scalable applications. 
              Here's a breakdown of my technical skills and proficiency levels.
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Frontend
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.frontend.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">⚙️</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Backend
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.backend.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Database
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.database.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Tools
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.tools.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Design
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.design.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <div className="card p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">
                  Management
                </h3>
              </div>
              <div className="space-y-4">
                {skillCategories.management.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-lg mr-3">{getSkillIcon(skill.name)}</span>
                      <span className="font-medium text-secondary-900 dark:text-white">
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
            <h4 className="text-lg font-semibold mb-4 text-secondary-900 dark:text-white">
              Skill Level Legend
            </h4>
            <div className="flex justify-center gap-6 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                <span className="text-secondary-600 dark:text-secondary-300">Expert (4-5)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                <span className="text-secondary-600 dark:text-secondary-300">Intermediate (3)</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <span className="text-secondary-600 dark:text-secondary-300">Beginner (1-2)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 