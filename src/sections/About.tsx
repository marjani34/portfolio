"use client";

import { personalInfo } from "@/data/portfolio";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import profileImage from "@/assets/images/profile.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-br from-secondary-900 via-primary-900 to-accent-900 dark:from-secondary-800 dark:via-primary-800 dark:to-accent-800"
    >
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

      {/* Main Content */}
      <div className="relative z-10 container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left Column - Profile Image */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                    <Image
                      src={profileImage}
                      alt="Amir Marjani - Professional Portrait"
                      width={500}
                      height={600}
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-black/40 rounded-full blur-xl"></div>
                </div>
                
                {/* Quick Stats below image */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-white/10 text-center">
                    <div className="text-2xl font-bold text-primary-400 dark:text-primary-300 mb-1">
                      {personalInfo.experience}
                    </div>
                    <div className="text-xs text-secondary-200 dark:text-secondary-100">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 dark:border-white/10 text-center">
                    <div className="text-2xl font-bold text-primary-400 dark:text-primary-300 mb-1">
                      PhD
                    </div>
                    <div className="text-xs text-secondary-200 dark:text-secondary-100">
                      AI & ML
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Personal Information */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">👤</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Personal Information
                    </h3>
                    <p className="text-secondary-200 dark:text-secondary-100">
                      Get to know me better
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-200 dark:text-secondary-100">
                      📧 {personalInfo.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-200 dark:text-secondary-100">
                      📍 {personalInfo.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    <span className="text-secondary-200 dark:text-secondary-100">
                      📱 {personalInfo.phone}
                    </span>
                  </div>
                </div>
              </div>

              {/* About Content */}
              <div>
                <h3 className="text-3xl font-bold mb-6 text-white">
                  Who I Am
                </h3>
                <p className="text-lg text-secondary-200 dark:text-secondary-100 leading-relaxed mb-6">
                  {personalInfo.about}
                </p>
              </div>

              {/* AI Expertise Highlight */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🤖</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    AI & Machine Learning Expertise
                  </h4>
                </div>
                <p className="text-secondary-200 dark:text-secondary-100 leading-relaxed">
                  With a <strong className="text-purple-400 dark:text-purple-300">PhD in Artificial Intelligence</strong>, 
                  I bring deep theoretical knowledge and practical AI/ML expertise to every project. 
                  This academic foundation enables me to approach complex technical challenges with innovative, 
                  AI-driven solutions while maintaining the highest standards of software engineering.
                </p>
              </div>

              {/* Data Analytics Expertise Highlight */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    Data Analytics & Business Intelligence
                  </h4>
                </div>
                <p className="text-secondary-200 dark:text-secondary-100 leading-relaxed">
                  With a <strong className="text-green-400 dark:text-green-300">Master of Data Analytics</strong>, 
                  I excel at transforming raw data into actionable insights. My expertise spans statistical modeling, 
                  predictive analytics, and business intelligence solutions that drive informed decision-making 
                  and strategic business outcomes.
                </p>
              </div>

              {/* Languages */}
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20 dark:border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2">
                  {personalInfo.languages?.map((language, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-white/20 dark:bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="btn-primary text-center"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="btn-secondary text-center"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 