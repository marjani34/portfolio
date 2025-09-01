'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { personalInfo } from '@/data/portfolio'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

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
    { name: 'Skills', href: '#skills' },
    { name: 'Language & Exams', href: '#language-exams' },
    { name: 'Projects', href: '#projects' },
    { name: 'Books', href: '#books' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Awards', href: '#awards' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Get header background color based on scroll state and dark mode
  const getHeaderBackground = () => {
    if (isScrolled) {
      return isDarkMode 
        ? 'bg-secondary-900/95 shadow-lg' 
        : 'bg-white/95 shadow-lg'
    }
    return isDarkMode 
      ? 'bg-secondary-900/80' 
      : 'bg-white/80'
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderBackground()} backdrop-blur-md border-b ${isDarkMode ? 'border-secondary-700' : 'border-secondary-200'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="#hero" 
            className="group relative text-lg md:text-xl font-bold transition-all duration-300 hover:scale-105 animate-pulse"
            onClick={() => handleNavClick('#hero')}
          >
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 bg-clip-text text-transparent hover:animate-bounce transition-all duration-300 font-fantasy-bold tracking-wider drop-shadow-lg">
              {personalInfo.name.split(' ')[0]}
            </span>
            <span className="bg-gradient-to-r from-secondary-600 via-accent-600 to-primary-600 bg-clip-text text-transparent ml-1 hover:animate-bounce transition-all duration-300 font-fantasy-bold tracking-wider drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
              {personalInfo.name.split(' ')[1]}
            </span>
            {/* Hover effect underline */}
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 via-accent-600 to-secondary-600 transition-all duration-300 group-hover:w-full rounded-full"></div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 via-accent-600/20 to-secondary-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            {/* Floating particles effect */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-accent-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500"></div>
            <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-primary-500 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-all duration-500" style={{ animationDelay: '0.2s' }}></div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${isDarkMode ? 'text-secondary-300 hover:text-primary-400' : 'text-secondary-600 hover:text-primary-600'} transition-colors duration-200 font-medium relative group`}
                onClick={() => handleNavClick(item.href)}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-primary-400' : 'bg-primary-600'} transition-all duration-300 group-hover:w-full`}></span>
              </Link>
            ))}
          </nav>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-200 mr-4"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors duration-200 mobile-menu ${isDarkMode ? 'hover:bg-secondary-800' : 'hover:bg-secondary-100'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 ${isDarkMode ? 'bg-secondary-300' : 'bg-secondary-600'} transform transition-all duration-300 ${
                isMenuOpen ? 'rotate-45' : '-translate-y-1'
              }`}></span>
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 ${isDarkMode ? 'bg-secondary-300' : 'bg-secondary-600'} transform transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute top-1/2 left-0 w-6 h-0.5 ${isDarkMode ? 'bg-secondary-300' : 'bg-secondary-600'} transform transition-all duration-300 ${
                isMenuOpen ? '-rotate-45' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className={`py-4 border-t ${isDarkMode ? 'border-secondary-700' : 'border-secondary-200'}`}>
            <div className="flex flex-col space-y-2 max-h-[70vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`${isDarkMode ? 'text-secondary-300 hover:text-primary-400 hover:bg-secondary-800' : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'} px-4 py-3 rounded-lg transition-all duration-200 font-medium transform ${
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
            <div className={`mt-6 pt-4 border-t ${isDarkMode ? 'border-secondary-700' : 'border-secondary-200'} transform transition-all duration-300 ${
              isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <div className="px-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600">📍</span>
                  <span className={`text-sm ${isDarkMode ? 'text-secondary-400' : 'text-secondary-600'}`}>
                    {personalInfo.location}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600">📧</span>
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className={`text-sm ${isDarkMode ? 'text-secondary-400 hover:text-primary-400' : 'text-secondary-600 hover:text-primary-600'} transition-colors duration-200`}
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-primary-600">🎓</span>
                  <span className={`text-sm ${isDarkMode ? 'text-secondary-400' : 'text-secondary-600'}`}>
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