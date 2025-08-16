'use client'

import { projects, Project } from '@/data/portfolio'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
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
    const hasImages = projectImages[project.title] && projectImages[project.title].length > 0
    const firstImage = hasImages ? projectImages[project.title][0] : null

    return (
      <div className={`${isFeatured ? 'lg:col-span-2' : ''} bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300`}>
        {/* Project Image */}
        {hasImages && firstImage ? (
          <div className="relative h-48 md:h-64 overflow-hidden cursor-pointer" onClick={() => openImageGallery(project.title)}>
            <Image
              src={firstImage}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {projectImages[project.title].length > 1 && (
              <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                {projectImages[project.title].length} images
              </div>
            )}
          </div>
        ) : (
          <div className="h-48 md:h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 dark:from-primary-400/20 dark:to-secondary-400/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-500/30 dark:bg-primary-400/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="text-white/80 text-sm">
                Project Preview
              </p>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-3 text-white">
            {project.title}
          </h4>
          <p className="text-secondary-200 dark:text-secondary-100 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech: string) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-primary-500/20 text-primary-200 dark:bg-primary-400/20 dark:text-primary-100 rounded-full text-sm font-medium border border-primary-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Project Links */}
          <div className="flex gap-3">
            {hasImages && (
              <button
                onClick={() => openImageGallery(project.title)}
                className="inline-flex items-center px-4 py-2 bg-secondary-600 hover:bg-secondary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm"
              >
                View Gallery
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800 relative overflow-hidden">
      {/* Parallax Background Layers - Only render on client */}
      {isClient && (
        <>
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

      <Parallax speed={-10} className="absolute top-1/2 left-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </Parallax>

      <Parallax speed={-7} className="absolute top-1/3 right-1/4 opacity-20 md:opacity-30 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </Parallax>

          {/* Top Fade Transition */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary-900 via-secondary-900/80 to-transparent"></div>
          
          {/* Smooth Transition Zone to Skills Section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent-900 via-accent-900/80 to-transparent"></div>
          
          {/* Blurred Divider */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-500/50 to-transparent blur-sm"></div>
          
          {/* Purple Accent Glow at Bottom */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </>
      )}
      
      <div className="container-custom relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          My Projects
        </h2>
        
        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} isFeatured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-secondary-200 dark:text-secondary-100 mb-6">
            Want to see more of my work?
          </p>
          <a 
            href="https://github.com/amir-marjani" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 dark:from-primary-500 dark:to-accent-500 dark:hover:from-primary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Projects
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full max-h-full">
            {/* Close Button */}
            <button
              onClick={closeImageGallery}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-300"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Navigation Buttons */}
            {projectImages[selectedProject] && projectImages[selectedProject].length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Current Image */}
            {projectImages[selectedProject] && (
              <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden">
                <Image
                  src={projectImages[selectedProject][currentImageIndex]}
                  alt={`${selectedProject} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}

            {/* Image Counter */}
            {projectImages[selectedProject] && projectImages[selectedProject].length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {projectImages[selectedProject].length}
              </div>
            )}

            {/* Project Title */}
            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
              <h3 className="text-lg font-semibold">{selectedProject}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects 