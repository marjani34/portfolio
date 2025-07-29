"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import profileImage from "@/assets/images/profile.png";
import Image from "next/image";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    "AI Researcher & Software Engineer",
    "Artificial Intelligence Scientist & Full Stack Developer",
    "AI-Focused Frontend & Full Stack Developer",
    "Human-Centered AI Engineer & Web Creator"
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("home");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800 py-20"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="text-left space-y-8">
            {/* Greeting with Animation */}
            <div
              className={`transition-all duration-1000 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-primary-600 dark:text-primary-400 font-medium text-lg md:text-xl">
                Welcome to my portfolio
              </p>
            </div>

            {/* Title with Typewriter Animation */}
            <div
              className={`transition-all duration-1000 delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="h-16 md:h-20 lg:h-24 flex items-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl text-secondary-600 dark:text-secondary-300 font-medium flex items-center">
                  <span className="mr-2">{currentText}</span>
                  <span className={`inline-block w-0.5 h-6 md:h-8 lg:h-10 bg-secondary-600 dark:bg-secondary-300 animate-pulse`}></span>
                </h2>
              </div>
            </div>

            {/* PhD Badge with Animation */}
            <div
              className={`transition-all duration-1000 delay-800 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-full text-base font-semibold shadow-lg">
                <span className="mr-3 text-xl">🎓</span>
                PhD in Artificial Intelligence
              </div>
            </div>

            {/* Quote Box with Animation */}
            <div
              className={`transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="text-center space-y-4">
                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-secondary-700 dark:text-secondary-300 italic font-medium leading-relaxed">
                    "Not everything that counts can be counted."
                  </blockquote>
                  
                  {/* Author */}
                  <cite className="text-sm md:text-base text-secondary-600 dark:text-secondary-400 font-medium not-italic">
                    – Albert Einstein
                  </cite>
                  
                  {/* Subtitle */}
                  <p className="text-base md:text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed max-w-2xl mx-auto">
                    In a world of surveillance and algorithms, here are the things that remain truly human.
                  </p>
                  
                  {/* Explore Button */}
                  <div className="pt-4">
                    <button 
                      onClick={() => document.getElementById('untrackable')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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

            {/* University Research Focus */}
            <div
              className={`transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/20 dark:to-purple-900/30 rounded-3xl p-8 border border-blue-200/50 dark:border-blue-700/50 shadow-xl">
                <div className="text-center mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                    🧠 AI Research Focus Areas
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-sm md:text-base">
                    Comprehensive expertise in artificial intelligence and
                    machine learning
                  </p>
                </div>
                
                {/* Research Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Mathematics for AI */}
                  <div className="bg-white/60 dark:bg-blue-900/20 rounded-2xl p-5 border border-blue-200/50 dark:border-blue-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">∑</span>
                      </div>
                      <h4 className="font-bold text-blue-900 dark:text-blue-100 text-lg">
                        Mathematics for AI
                      </h4>
                    </div>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Linear Algebra & Matrix Operations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Calculus & Gradient Descent
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Probability & Statistics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Optimization & Information Theory
                      </li>
                    </ul>
                  </div>

                  {/* Machine Learning */}
                  <div className="bg-white/60 dark:bg-indigo-900/20 rounded-2xl p-5 border border-indigo-200/50 dark:border-indigo-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">🤖</span>
                      </div>
                      <h4 className="font-bold text-indigo-900 dark:text-indigo-100 text-lg">
                        Machine Learning & Deep Learning
                      </h4>
                    </div>
                    <ul className="text-sm text-indigo-800 dark:text-indigo-200 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        Supervised & Unsupervised Learning
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        Neural Networks & Backpropagation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        CNNs, RNNs, Transformers
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                        Dimensionality Reduction
                      </li>
                    </ul>
                  </div>

                  {/* Theoretical Foundations */}
                  <div className="bg-white/60 dark:bg-purple-900/20 rounded-2xl p-5 border border-purple-200/50 dark:border-purple-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">📚</span>
                      </div>
                      <h4 className="font-bold text-purple-900 dark:text-purple-100 text-lg">
                        Theoretical Foundations
                      </h4>
                    </div>
                    <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Computational Learning Theory
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        PAC Learning & VC Dimension
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Bayesian Methods & Networks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        Statistical Learning Theory
                      </li>
                    </ul>
                  </div>

                  {/* Practical Engineering */}
                  <div className="bg-white/60 dark:bg-green-900/20 rounded-2xl p-5 border border-green-200/50 dark:border-green-700/50 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white text-sm font-bold">⚙️</span>
                      </div>
                      <h4 className="font-bold text-green-900 dark:text-green-100 text-lg">
                        Practical Engineering
                      </h4>
                    </div>
                    <ul className="text-sm text-green-800 dark:text-green-200 space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Python, PyTorch, TensorFlow
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Experiment Tracking & Deployment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        GPU/TPU Computing
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        MLOps & Benchmarking
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons with Animation */}
            <div
              className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-1400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <Link href="#projects" className="btn-primary text-center">
                View My Work
              </Link>
              <Link href="#contact" className="btn-secondary text-center">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative">
              {/* Background Elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl"></div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white/80 dark:bg-secondary-800/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -top-2 -right-2 w-10 h-10 bg-white/80 dark:bg-secondary-800/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20" style={{ animationDelay: '1s' }}>
                <span className="text-xl">🅰️</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-white/80 dark:bg-secondary-800/80 rounded-xl flex items-center justify-center shadow-lg animate-bounce-slow z-20" style={{ animationDelay: '2s' }}>
                <span className="text-xl">⚡</span>
              </div>
              
              {/* Main Image Container */}
              <div className="relative bg-white dark:bg-secondary-800 rounded-3xl p-4 shadow-2xl z-10">
                <Image
                  src={profileImage}
                  alt={`${personalInfo.name} - Professional Headshot`}
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
                
                {/* Experience Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-30">
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
