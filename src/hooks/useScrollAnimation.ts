import { useEffect, useState, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = false
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
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
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
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    elementRef,
    isVisible
  };
};

// Animation variants for different effects
export const scrollAnimations = {
  fadeInUp: {
    initial: 'opacity-0 translate-y-8 scale-95',
    animate: 'opacity-100 translate-y-0 scale-100',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInLeft: {
    initial: 'opacity-0 -translate-x-8 scale-95',
    animate: 'opacity-100 translate-x-0 scale-100',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInRight: {
    initial: 'opacity-0 translate-x-8 scale-95',
    animate: 'opacity-100 translate-x-0 scale-100',
    transition: 'transition-all duration-700 ease-out'
  },
  fadeInScale: {
    initial: 'opacity-0 scale-90',
    animate: 'opacity-100 scale-100',
    transition: 'transition-all duration-600 ease-out'
  },
  slideInUp: {
    initial: 'opacity-0 translate-y-12',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-800 ease-out'
  },
  slideInDown: {
    initial: 'opacity-0 -translate-y-12',
    animate: 'opacity-100 translate-y-0',
    transition: 'transition-all duration-800 ease-out'
  },
  blurIn: {
    initial: 'opacity-0 blur-sm scale-95',
    animate: 'opacity-100 blur-0 scale-100',
    transition: 'transition-all duration-600 ease-out'
  }
}; 