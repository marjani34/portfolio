import { useEffect, useState, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false,
    delay = 0
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting && !hasAnimated) {
          // Add delay before triggering animation
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!isIntersecting && !triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated, delay]);

  return {
    elementRef,
    isVisible
  };
};

// Animation variants for different effects with faster durations
export const scrollAnimations = {
  // Fade animations
  fadeInUp: {
    initial: 'opacity-0 translate-y-8 scale-95',
    animate: 'opacity-100 translate-y-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  fadeInDown: {
    initial: 'opacity-0 -translate-y-8 scale-95',
    animate: 'opacity-100 translate-y-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8 scale-95',
    animate: 'opacity-100 translate-x-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8 scale-95',
    animate: 'opacity-100 translate-x-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  
  // Slide animations
  slideInLeft: {
    initial: 'opacity-0 -translate-x-full',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  slideInRight: {
    initial: 'opacity-0 translate-x-full',
    animate: 'opacity-100 translate-x-0',
    transition: 'transition-all duration-700 ease-out'
  },
  slideInUp: {
    initial: 'opacity-0 translate-y-full',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  slideInDown: {
    initial: 'opacity-0 -translate-y-full',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-700 ease-out'
  },
  
  // Scale animations
  fadeInScale: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-500 ease-out'
  },
  scaleInUp: {
    initial: 'opacity-0 scale-90 translate-y-8',
    animate: 'opacity-100 scale-100 translate-y-0',
    transition: 'transition-all duration-600 ease-out'
  },
  
  // Special effects
  blurIn: {
    initial: 'opacity-0 blur-md scale-95',
    animate: 'opacity-100 blur-0 scale-100',
    transition: 'transition-all duration-500 ease-out'
  },
  rotateIn: {
    initial: 'opacity-0 rotate-12 scale-95',
    animate: 'opacity-100 rotate-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  bounceIn: {
    initial: 'opacity-0 scale-75 translate-y-8',
    animate: 'opacity-100 scale-100 translate-y-0',
    transition: 'transition-all duration-600 ease-bounce'
  },
  
  // Stagger animations for lists
  staggerItem: {
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-400 ease-out'
  },
  
  // Quick entrance animations
  quickFadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
    transition: 'transition-opacity duration-300 ease-out'
  },
  quickSlideUp: {
    initial: 'opacity-0 translate-y-4',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-400 ease-out'
  }
}; 