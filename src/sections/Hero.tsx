"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import profileImage from "@/assets/images/profile.png";
import Image from "next/image";
import { useScrollAnimation, scrollAnimations } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "AI Researcher & Software Engineer",
    "Artificial Intelligence Scientist & Full Stack Developer",
    "AI-Focused Frontend & Full Stack Developer",
    "Human-Centered AI Engineer & Web Creator"
  ];

  // Scroll animations for different elements
  const greetingAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const titleAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const badgeAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const quoteAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const researchAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: false });
  const ctaAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });
  const imageAnimation = useScrollAnimation({ threshold: 0.2, triggerOnce: false });

  // Typewriter effect
  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    if (!isDeleting) {
      // Typing
      if (currentText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to delete
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentTitle.slice(0, currentText.length - 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to next title
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [currentText, currentTitleIndex, isDeleting, titles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-gradient-to-b from-secondary-900 via-secondary-800 to-secondary-900"
    >
      {/* Smooth Transition from Parallax - Vertical Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-secondary-900 via-secondary-900/80 to-transparent"></div>
      
      {/* Background Layers with Enhanced Dark Blue Dominance */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-800/70 to-secondary-900/90"></div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-accent-900/10 to-secondary-900/20 opacity-40"></div>

      {/* Enhanced Floating Blur Circles with Dark Blue Focus */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-secondary-500/15 dark:bg-secondary-400/15 rounded-full blur-3xl transition-all duration-1000 delay-200"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-500/10 dark:bg-primary-400/10 rounded-full blur-3xl transition-all duration-1000 delay-400"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/8 dark:bg-accent-400/8 rounded-full blur-3xl transition-all duration-1000 delay-600"></div>

      {/* Purple Accent Glows for Highlights */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent-500/5 rounded-full blur-2xl transition-all duration-1000 delay-800"></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-accent-500/8 rounded-full blur-2xl transition-all duration-1000 delay-1000"></div>

      {/* AI-themed Floating SVG Images */}
      <div className="absolute top-20 left-10 opacity-15 md:opacity-20 transition-all duration-1000 delay-300">
        <svg className="w-16 h-16 md:w-20 md:h-20 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      <div className="absolute top-32 right-20 opacity-15 md:opacity-20 transition-all duration-1000 delay-500">
        <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      </div>

      <div className="absolute bottom-32 left-20 opacity-15 md:opacity-20 transition-all duration-1000 delay-700">
        <svg className="w-14 h-14 md:w-18 md:h-18 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-15 md:opacity-20 transition-all duration-1000 delay-900">
        <svg className="w-10 h-10 md:w-14 md:h-14 text-primary-300 dark:text-primary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/4 opacity-15 md:opacity-20 transition-all duration-1000 delay-1100">
        <svg className="w-8 h-8 md:w-12 md:h-12 text-accent-300 dark:text-accent-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      </div>

      <div className="absolute top-1/3 right-1/4 opacity-15 md:opacity-20 transition-all duration-1000 delay-1300">
        <svg className="w-6 h-6 md:w-10 md:h-10 text-secondary-300 dark:text-secondary-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-left space-y-8">
            {/* Greeting with Scroll Animation */}
            <div
              ref={greetingAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${greetingAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <p className="text-secondary-300 dark:text-secondary-200 font-medium text-lg md:text-xl">
                Welcome to my portfolio
              </p>
            </div>

            {/* Title with Typewriter Animation and Scroll Reveal */}
            <div
              ref={titleAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${titleAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <div className="h-16 md:h-20 lg:h-24 flex items-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-white dark:text-white font-medium flex items-center">
                  <span className="mr-2">{currentText}</span>
                  <span className={`inline-block w-0.5 h-6 md:h-8 lg:h-10 bg-accent-400 dark:bg-accent-300 animate-pulse`}></span>
                </h2>
              </div>
            </div>

            {/* PhD Badge with Scroll Animation */}
            <div
              ref={badgeAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${badgeAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <div className="inline-flex items-center px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 text-white rounded-full text-base font-semibold shadow-lg">
                <span className="mr-3 text-xl">🎓</span>
                PhD in Artificial Intelligence
              </div>
            </div>

            {/* Quote Box with Scroll Animation */}
            <div
              ref={quoteAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${quoteAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 md:p-8 shadow-lg">
                <div className="text-center space-y-4">
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-white dark:text-white italic font-medium leading-relaxed">
                    "Not everything that counts can be counted."
                  </blockquote>
                  
                  {/* Author */}
                  <cite className="text-sm md:text-base text-secondary-200 dark:text-secondary-100 font-medium not-italic">
                    – Albert Einstein
                  </cite>
                  
                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-secondary-200 dark:text-secondary-100 leading-relaxed max-w-2xl mx-auto">
                    In a world of surveillance and algorithms, here are the things that remain truly human.
                  </p>
                  
                  {/* Explore Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => document.getElementById('untrackable')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 dark:from-secondary-500 dark:to-accent-500 dark:hover:from-secondary-600 dark:hover:to-accent-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      Explore the Untrackable
                      <svg 
                        className="ml-2 w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* University Research Focus with Scroll Animation */}
            <div
              ref={researchAnimation.elementRef}
              className={`${scrollAnimations.fadeInLeft.initial} ${researchAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-white mb-2">
                    🧠 AI Research Focus Areas
                  </h3>
                  <p className="text-secondary-200 dark:text-secondary-100 text-sm md:text-base">
                    Comprehensive expertise in artificial intelligence and
                    machine learning
                  </p>
                </div>
                
                {/* Research Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mathematics for AI */}
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">∑</span>
                      </div>
                      <h4 className="font-bold text-white dark:text-white text-lg">
                        Mathematics for AI
                      </h4>
                    </div>
                    <ul className="text-sm text-secondary-200 dark:text-secondary-100 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Linear Algebra & Matrix Operations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Calculus & Gradient Descent
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Probability & Statistics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Optimization & Information Theory
                      </li>
                    </ul>
                  </div>

                  {/* Machine Learning */}
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">🤖</span>
                      </div>
                      <h4 className="font-bold text-white dark:text-white text-lg">
                        Machine Learning & Deep Learning
                      </h4>
                    </div>
                    <ul className="text-sm text-secondary-200 dark:text-secondary-100 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Supervised & Unsupervised Learning
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Neural Networks & Backpropagation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        CNNs, RNNs, Transformers
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                        Dimensionality Reduction
                      </li>
                    </ul>
                  </div>

                  {/* Theoretical Foundations */}
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">📚</span>
                      </div>
                      <h4 className="font-bold text-white dark:text-white text-lg">
                        Theoretical Foundations
                      </h4>
                    </div>
                    <ul className="text-sm text-secondary-200 dark:text-secondary-100 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Computational Learning Theory
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        PAC Learning & VC Dimension
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Bayesian Methods & Networks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Statistical Learning Theory
                      </li>
                    </ul>
                  </div>

                  {/* Practical Engineering */}
                  <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-5 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">⚙️</span>
                      </div>
                      <h4 className="font-bold text-white dark:text-white text-lg">
                        Practical Engineering
                      </h4>
                    </div>
                    <ul className="text-sm text-secondary-200 dark:text-secondary-100 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Python, PyTorch, TensorFlow
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        Experiment Tracking & Deployment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        GPU/TPU Computing
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-secondary-400 rounded-full mr-3"></span>
                        MLOps & Benchmarking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons with Scroll Animation */}
            <div
              ref={ctaAnimation.elementRef}
              className={`flex flex-col sm:flex-row gap-4 pt-6 ${scrollAnimations.fadeInLeft.initial} ${ctaAnimation.isVisible ? scrollAnimations.fadeInLeft.animate : ''} ${scrollAnimations.fadeInLeft.transition}`}
            >
              <Link href="#projects" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-600 to-accent-600 hover:from-secondary-700 hover:to-accent-700 dark:from-secondary-500 dark:to-accent-500 dark:hover:from-secondary-600 dark:hover:to-accent-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center justify-center">
                View My Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#contact" className="inline-flex items-center px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center justify-center">
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image with Scroll Animation */}
          <div
            ref={imageAnimation.elementRef}
            className={`relative ${scrollAnimations.fadeInRight.initial} ${imageAnimation.isVisible ? scrollAnimations.fadeInRight.animate : ''} ${scrollAnimations.fadeInRight.transition}`}
          >
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary-500/20 to-accent-500/20 rounded-3xl blur-xl"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🅰️</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20" style={{ animationDelay: '2s' }}>
                <span className="text-xl">⚡</span>
              </div>
              
              {/* Main Image Container */}
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-3xl p-4 shadow-2xl z-10">
                <Image
                  src={profileImage}
                  alt={`${personalInfo.name} - Professional Headshot`}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
                
                {/* Experience Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-secondary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-30">
                  {personalInfo.experience}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
