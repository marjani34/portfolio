'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/portfolio'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMenuOpen && !target.closest('.mobile-menu')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Books', href: '#books' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 dark:bg-secondary-900/95 shadow-lg' 
        : 'bg-white/80 dark:bg-secondary-900/80'
    } backdrop-blur-md border-b border-secondary-200 dark:border-secondary-700`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="#hero" 
            className="text-lg md:text-xl font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
            onClick={() => handleNavClick('#hero')}
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-secondary-600 dark:text-secondary-400 ml-1">
              {personalInfo.name.split(' ')[1]}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium relative group"
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-200 mobile-menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-secondary-600 dark:bg-secondary-300 transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1'
              }`}></span>
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-secondary-600 dark:bg-secondary-300 transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-secondary-600 dark:bg-secondary-300 transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-secondary-200 dark:border-secondary-700">
            <div className="flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-secondary-600 dark:text-secondary-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-secondary-50 dark:hover:bg-secondary-800 px-4 py-3 rounded-lg transition-all duration-200 font-medium transform ${
                    isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Mobile Contact Info */}
            <div className={`mt-6 pt-4 border-t border-secondary-200 dark:border-secondary-700 transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="px-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-400">📍</span>
                  <span className="text-sm text-secondary-600 dark:text-secondary-400">
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-400">📧</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600 dark:text-primary-400">🎓</span>
                  <span className="text-sm text-secondary-600 dark:text-secondary-400">
                    {personalInfo.title}
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 