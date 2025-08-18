"use client";

import { personalInfo } from "@/data/portfolio";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import profileImage from "@/assets/images/profile.png";
import { useScrollAnimation, scrollAnimations } from '@/hooks/useScrollAnimation'

const About = () => {
  // Scroll animations for different elements with faster timing
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 100 });
  const imageAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 200 });
  const statsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 300 });
  const descriptionAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 400 });
  const skillsAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 500 });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false, delay: 600 });

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
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <Parallax speed={-5}>
            <div
              ref={titleAnimation.elementRef}
              className={`text-center mb-16 ${scrollAnimations.fadeInScale.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInScale.animate : ''} ${scrollAnimations.fadeInScale.transition}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
            </div>
          </Parallax>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
            {/* Left Column - Profile Image */}
            <div className="lg:col-span-1">
              <Parallax speed={-2}>
                <div
                  ref={imageAnimation.elementRef}
                  className={`sticky top-8 ${scrollAnimations.fadeInLeft.initial} ${imageAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
                >
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
                      <div className="text-2xl font-bold text-accent-400 dark:text-accent-300 mb-1">
                        PhD
                      </div>
                      <div className="text-xs text-secondary-200 dark:text-secondary-100">
                        AI Research
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>

            {/* Right Column - About Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Description */}
              <Parallax speed={-1}>
                <div
                  ref={descriptionAnimation.elementRef}
                  className={`${scrollAnimations.fadeInRight.initial} ${descriptionAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
                >
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="mr-3 text-3xl">👨‍💻</span>
                      Professional Journey
                    </h3>
                    <p className="text-lg text-secondary-200 dark:text-secondary-100 leading-relaxed mb-6">
                      {personalInfo.about}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-primary-400">📍</span>
                        <span className="text-secondary-200 dark:text-secondary-100">{personalInfo.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-accent-400">📧</span>
                        <a href={`mailto:${personalInfo.email}`} className="text-secondary-200 dark:text-secondary-100 hover:text-primary-400 transition-colors">
                          {personalInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-secondary-400">🎓</span>
                        <span className="text-secondary-200 dark:text-secondary-100">{personalInfo.education}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-primary-400">⏱️</span>
                        <span className="text-secondary-200 dark:text-secondary-100">{personalInfo.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>

              {/* Skills & Technologies */}
              <Parallax speed={0}>
                <div
                  ref={skillsAnimation.elementRef}
                  className={`${scrollAnimations.slideInUp.initial} ${skillsAnimation.isVisible ? scrollAnimations.slideInUp.animate : ''} ${scrollAnimations.slideInUp.transition}`}
                >
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/20 dark:border-white/10">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                      <span className="mr-3 text-3xl">🚀</span>
                      Core Competencies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">⚛️</div>
                        <div className="text-white font-medium">React & Next.js</div>
                        <div className="text-secondary-300 text-sm">Frontend Development</div>
                      </div>
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">🅰️</div>
                        <div className="text-white font-medium">Angular</div>
                        <div className="text-secondary-300 text-sm">Enterprise Apps</div>
                      </div>
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">🧠</div>
                        <div className="text-white font-medium">AI & ML</div>
                        <div className="text-secondary-300 text-sm">Research Focus</div>
                      </div>
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">👥</div>
                        <div className="text-white font-medium">Team Leadership</div>
                        <div className="text-secondary-300 text-sm">Management</div>
                      </div>
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">☁️</div>
                        <div className="text-white font-medium">Cloud Solutions</div>
                        <div className="text-secondary-300 text-sm">Scalable Architecture</div>
                      </div>
                      <div className="bg-white/5 dark:bg-white/5 p-4 rounded-xl border border-white/10 dark:border-white/10 text-center">
                        <div className="text-2xl mb-2">🎯</div>
                        <div className="text-white font-medium">Clean Code</div>
                        <div className="text-secondary-300 text-sm">Best Practices</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Parallax>

              {/* Call to Action */}
              <Parallax speed={1}>
                <div
                  ref={ctaAnimation.elementRef}
                  className={`${scrollAnimations.bounceIn.initial} ${ctaAnimation.isVisible ? scrollAnimations.bounceIn.animate : ''} ${scrollAnimations.bounceIn.transition}`}
                >
                  <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 dark:from-primary-500/20 dark:to-accent-500/20 backdrop-blur-md p-8 rounded-2xl border border-primary-500/30 dark:border-primary-400/30 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Ready to Build Something Amazing?
                    </h3>
                    <p className="text-secondary-200 dark:text-secondary-100 mb-6">
                      Let's collaborate on innovative projects that push the boundaries of technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a 
                        href="#projects" 
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        View My Projects
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                      <a 
                        href="#contact" 
                        className="inline-flex items-center px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Get In Touch
                        <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>

      {/* Smooth Transition Zone to Gallery Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Blurred Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent blur-sm"></div>
      
      {/* Purple Accent Glow at Bottom */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-accent-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About; 