'use client'

import { projects, Project } from '@/data/portfolio'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'
import dynamic from 'next/dynamic'

// Dynamically import Parallax to avoid SSR issues
const Parallax = dynamic(() => import('react-scroll-parallax').then(mod => ({ default: mod.Parallax })), {
  ssr: false,
  loading: () => <div className="absolute inset-0" />
})

// Project image mapping - you can add more projects with their images here
const projectImages: Record<string, string[]> = {
  'Fintranet Payment Platform': [
    '/projects/Fintranet/f1.JPG',
    '/projects/Fintranet/f2.JPG',
    '/projects/Fintranet/f3.JPG',
    '/projects/Fintranet/f4.JPG',
    '/projects/Fintranet/f5.JPG',
    '/projects/Fintranet/f6.JPG'
  ],
  'FintraAccount Financial Platform': [
    '/projects/FintraAccount/1.jpg',
    '/projects/FintraAccount/2.jpg',
    '/projects/FintraAccount/3.jpg',
    '/projects/FintraAccount/4.JPG',
    '/projects/FintraAccount/5.JPG',
    '/projects/FintraAccount/6.JPG'
  ],

  'Smart Runners Social Network': [
    '/projects/smartRunners/Screenshot 2025-08-13 020725.png',
    '/projects/smartRunners/Screenshot 2025-08-13 020824.png',
    '/projects/smartRunners/Screenshot 2025-08-13 020848.png'
  ]
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  // Scroll animations for different elements
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 100 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 200 });
  const featuredProjectsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const otherProjectsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 400 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });

  // Debug logging - removed for production

  // Ensure client-side rendering to prevent hydration mismatches
  useEffect(() => {
    setIsClient(true)
  }, [])

  const openImageGallery = (projectTitle: string) => {
    setSelectedProject(projectTitle)
    setCurrentImageIndex(0)
  }

  const closeImageGallery = useCallback(() => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }, [])

  const nextImage = useCallback(() => {
    if (selectedProject && projectImages[selectedProject]) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % projectImages[selectedProject].length
      )
    }
  }, [selectedProject])

  const prevImage = useCallback(() => {
    if (selectedProject && projectImages[selectedProject]) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projectImages[selectedProject].length - 1 : prev - 1
      )
    }
  }, [selectedProject])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedProject) return
      
      switch (event.key) {
        case 'Escape':
          closeImageGallery()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'ArrowRight':
          nextImage()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedProject, closeImageGallery, prevImage, nextImage])

  const ProjectCard = ({ project, isFeatured = false }: { project: Project, isFeatured?: boolean }) => {
    const projectImageList = projectImages[project.title] || []
    
    return (
      <div className={`group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full flex flex-col ${
        isFeatured ? 'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10' : 'bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 dark:border-white/10'
      }`}>
        {/* Project Image */}
        <div className="relative h-64 overflow-hidden">
          {projectImageList.length > 0 ? (
            <Image
              src={projectImageList[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white text-4xl">🚀</span>
            </div>
          )}
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* View Gallery Button */}
          {projectImageList.length > 1 && (
            <button
              onClick={() => openImageGallery(project.title)}
              className="absolute top-4 right-4 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-white/20 backdrop-blur-md flex items-center gap-2 group-hover:opacity-100 opacity-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              View Gallery
            </button>
          )}
          
          {/* Featured Badge */}
          {isFeatured && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Featured
            </div>
          )}
        </div>

        {/* Project Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-all duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="text-secondary-200 dark:text-secondary-100 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-white/10 dark:bg-white/5 text-white text-xs rounded-full border border-white/20 dark:border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-white/10 dark:bg-white/5 text-white text-xs rounded-full border border-white/20 dark:border-white/10">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>


        </div>
      </div>
    )
  }

  if (!isClient) {
    return (
      <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Loading Projects...</h2>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 dark:border-primary-400 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative overflow-hidden">
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

      {/* Additional Background Blur Elements */}
      <Parallax speed={-7} className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-400/15 dark:bg-primary-300/15 rounded-full blur-3xl transition-all duration-1200 delay-300"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-accent-400/15 dark:bg-accent-300/15 rounded-full blur-3xl transition-all duration-1200 delay-500"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary-400/15 dark:bg-secondary-300/15 rounded-full blur-3xl transition-all duration-1200 delay-700"></div>
      </Parallax>

      {/* Subtle Grid Pattern */}
      <Parallax speed={-12} className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </Parallax>

      {/* AI-themed Floating SVG Images */}
      <Parallax speed={-15} className="absolute top-20 left-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

      <Parallax speed={-8} className="absolute top-32 right-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      </Parallax>

      <Parallax speed={-12} className="absolute bottom-32 left-20 opacity-20 md:opacity-30 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-6} className="absolute bottom-20 right-10 opacity-20 md:opacity-30 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      {/* Additional Floating Elements */}
      <Parallax speed={-18} className="absolute top-1/4 left-1/3 opacity-15 md:opacity-25 transition-all duration-1200 delay-100">
        <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-sm"></div>
      </Parallax>

      <Parallax speed={-14} className="absolute top-1/3 right-1/4 opacity-15 md:opacity-25 transition-all duration-1200 delay-200">
        <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-sm"></div>
      </Parallax>

      <Parallax speed={-10} className="absolute bottom-1/4 left-1/4 opacity-15 md:opacity-25 transition-all duration-1200 delay-300">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-sm"></div>
      </Parallax>

      <Parallax speed={-16} className="absolute bottom-1/3 right-1/3 opacity-15 md:opacity-25 transition-all duration-1200 delay-400">
        <div className="w-7 h-7 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full blur-sm"></div>
      </Parallax>

      {/* Floating Code Symbols */}
      <Parallax speed={-22} className="absolute top-16 left-1/2 opacity-10 md:opacity-20 transition-all duration-1500 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-primary-200 dark:text-primary-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      <Parallax speed={-20} className="absolute top-24 right-1/3 opacity-10 md:opacity-20 transition-all duration-1500 delay-600">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-accent-200 dark:text-accent-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </Parallax>

      <Parallax speed={-24} className="absolute bottom-16 left-1/3 opacity-10 md:opacity-20 transition-all duration-1500 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-200 dark:text-secondary-100" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </Parallax>

      {/* Micro Floating Particles */}
      <Parallax speed={-8} className="absolute top-40 left-16 opacity-20 transition-all duration-800 delay-100">
        <div className="w-2 h-2 bg-white/30 rounded-full"></div>
      </Parallax>

      <Parallax speed={-6} className="absolute top-48 right-24 opacity-20 transition-all duration-800 delay-200">
        <div className="w-1.5 h-1.5 bg-primary-300/40 rounded-full"></div>
      </Parallax>

      <Parallax speed={-10} className="absolute bottom-48 left-20 opacity-20 transition-all duration-800 delay-300">
        <div className="w-2.5 h-2.5 bg-accent-300/40 rounded-full"></div>
      </Parallax>

      <Parallax speed={-4} className="absolute bottom-40 right-16 opacity-20 transition-all duration-800 delay-400">
        <div className="w-1 h-1 bg-secondary-300/40 rounded-full"></div>
      </Parallax>

      <div className="container-custom relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <Parallax speed={-5}>
            <div className="text-center mb-8 relative" {...titleAnimation}>
              {/* Floating accent elements around title */}
              <Parallax speed={-2} className="absolute -top-4 -left-8 opacity-20">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-sm"></div>
              </Parallax>
              <Parallax speed={-3} className="absolute -top-6 -right-6 opacity-20">
                <div className="w-4 h-4 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full blur-sm"></div>
              </Parallax>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Projects
              </h2>
            </div>
          </Parallax>

          {/* Section Description */}
          <Parallax speed={-3}>
            <div className="text-center mb-16 relative" {...descriptionAnimation}>
              {/* Floating elements around description */}
              <Parallax speed={-1} className="absolute -top-2 left-1/4 opacity-15">
                <div className="w-3 h-3 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full blur-sm"></div>
              </Parallax>
              <Parallax speed={-2} className="absolute -top-4 right-1/4 opacity-15">
                <div className="w-2 h-2 bg-gradient-to-br from-accent-300 to-secondary-300 rounded-full blur-sm"></div>
              </Parallax>
              <Parallax speed={-1} className="absolute -bottom-2 left-1/3 opacity-15">
                <div className="w-2.5 h-2.5 bg-gradient-to-br from-secondary-300 to-primary-300 rounded-full blur-sm"></div>
              </Parallax>
              
              <p className="text-lg text-secondary-200 dark:text-secondary-100 max-w-3xl mx-auto">
                A showcase of my most impactful work, demonstrating expertise in full-stack development, 
                modern web technologies, and innovative problem-solving approaches.
              </p>
            </div>
          </Parallax>

          {/* Featured Projects Grid */}
          <Parallax speed={-2}>
            <div className="mb-16 relative" {...featuredProjectsAnimation}>
              {/* Additional floating elements around featured projects */}
              <Parallax speed={-4} className="absolute -top-6 -left-12 opacity-15">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-400 to-primary-400 rounded-full blur-md"></div>
              </Parallax>
              <Parallax speed={-3} className="absolute -top-8 -right-8 opacity-15">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full blur-md"></div>
              </Parallax>
              <Parallax speed={-5} className="absolute -bottom-4 left-1/4 opacity-15">
                <div className="w-5 h-5 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full blur-md"></div>
              </Parallax>
              
              {featuredProjects.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project) => (
                    <div key={project.id} className="h-full" {...scrollAnimations.fadeInUp}>
                      <ProjectCard project={project} isFeatured={true} />
                    </div>
                  ))}
                </div>
                          ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">No Featured Projects Found</h3>
                  <p className="text-secondary-200 dark:text-secondary-100 mb-6">
                    It looks like there are no featured projects to display at the moment.
                  </p>
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 max-w-md mx-auto">
                    <p className="text-secondary-200 dark:text-secondary-100 text-sm">
                      <strong>Debug Info:</strong><br/>
                      Total Projects: {projects.length}<br/>
                      Featured Projects: {featuredProjects.length}<br/>
                      Other Projects: {otherProjects.length}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Parallax>

          {/* Other Projects Grid */}
          {otherProjects.length > 0 ? (
            <Parallax speed={0}>
              <div className="mb-16 relative" {...otherProjectsAnimation}>
                {/* Floating elements around other projects */}
                <Parallax speed={-2} className="absolute -top-4 -left-6 opacity-15">
                  <div className="w-4 h-4 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full blur-sm"></div>
                </Parallax>
                <Parallax speed={-3} className="absolute -top-6 -right-4 opacity-15">
                  <div className="w-5 h-5 bg-gradient-to-br from-accent-300 to-secondary-300 rounded-full blur-sm"></div>
                </Parallax>
                <Parallax speed={-1} className="absolute -bottom-2 right-1/3 opacity-15">
                  <div className="w-3 h-3 bg-gradient-to-br from-secondary-300 to-primary-300 rounded-full blur-sm"></div>
                </Parallax>
                
                <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <div key={project.id} className="h-full" {...scrollAnimations.fadeInRight}>
                      <ProjectCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            </Parallax>
          ) : (
            <div className="text-center py-8">
              <p className="text-secondary-200 dark:text-secondary-100">
                No additional projects to display.
              </p>
            </div>
          )}

          {/* Call to Action */}
          <Parallax speed={-1}>
            <div className="text-center relative" {...ctaAnimation}>
              {/* Floating elements around CTA */}
              <Parallax speed={-2} className="absolute -top-6 -left-8 opacity-20">
                <div className="w-7 h-7 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-md"></div>
              </Parallax>
              <Parallax speed={-3} className="absolute -top-8 -right-6 opacity-20">
                <div className="w-5 h-5 bg-gradient-to-br from-accent-400 to-secondary-400 rounded-full blur-md"></div>
              </Parallax>
              <Parallax speed={-1} className="absolute -bottom-4 left-1/3 opacity-20">
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-primary-400 rounded-full blur-md"></div>
              </Parallax>
              <Parallax speed={-2} className="absolute -bottom-6 right-1/3 opacity-20">
                <div className="w-4 h-4 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-md"></div>
              </Parallax>
              
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Have a Project in Mind?
              </h3>
              <p className="text-secondary-200 dark:text-secondary-100 mb-6">
                Let&apos;s collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start a Project
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </Parallax>
      </div>
    </div>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeImageGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {projectImages[selectedProject] && projectImages[selectedProject].length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Current Image */}
            {projectImages[selectedProject] && (
              <div className="relative">
                <Image
                  src={projectImages[selectedProject][currentImageIndex]}
                  alt={`${selectedProject} - Image ${currentImageIndex + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                
                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {projectImages[selectedProject].length}
                </div>
              </div>
            )}

            {/* Project Title */}
            <h3 className="text-white text-xl font-semibold text-center mt-4">
              {selectedProject}
            </h3>
          </div>
        </div>
      )}

        {/* Smooth Transition Zone to Skills Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

export default Projects 