import { projects } from '@/data/portfolio'

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="section-padding bg-gradient-to-tl from-secondary-800 via-primary-800 to-accent-800 dark:from-secondary-900 dark:via-primary-900 dark:to-accent-900">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-900 dark:text-white">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <div key={project.id} className="card overflow-hidden group">
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-300 text-sm">
                        Project Preview
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-3 text-secondary-900 dark:text-white">
                      {project.title}
                    </h4>
                    <p className="text-secondary-600 dark:text-secondary-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Project Links */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a 
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-secondary-900 dark:text-white">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <div key={project.id} className="card p-6 group hover:scale-105 transition-transform duration-300">
                  {/* Project Icon */}
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-xl">💻</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-secondary-900 dark:text-white">
                    {project.title}
                  </h4>
                  <p className="text-secondary-600 dark:text-secondary-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-700 dark:text-secondary-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 text-sm font-medium"
                      >
                        Demo →
                      </a>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-600 dark:text-secondary-400 hover:text-secondary-800 dark:hover:text-secondary-200 text-sm font-medium"
                      >
                        Code →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-secondary-600 dark:text-secondary-300 mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 