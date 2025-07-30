export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design' | 'management'
  level: number // 1-5
  icon?: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface Book {
  id: string
  title: string
  author: string
  description: string
  category: 'technical' | 'business' | 'philosophy' | 'fiction' | 'biography'
  rating: number // 1-5
  coverImage?: string
  amazonUrl?: string
  goodreadsUrl?: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issueDate: string
  expiryDate?: string
  credentialId?: string
  image?: string
  url?: string
  category: 'development' | 'cloud' | 'design' | 'management' | 'other'
}

export interface Award {
  id: string
  title: string
  organization: string
  date: string
  description: string
  category: 'hackathon' | 'competition' | 'recognition' | 'achievement'
  image?: string
  url?: string
}

export const personalInfo = {
  name: 'Amir Marjani',
  title: 'Front End Manager',
  email: 'amir.marjani@gmail.com',
  location: 'Dubai, United Arab Emirates',
  phone: '+971503658040',
  birthDate: '28/06/1992',
  about: `Experienced Software Engineer, specializing in cloud-based, scalable solutions for the banking and 
  finance sector. Proficient in Angular, React.js, and Next.js. Leads a team dedicated to clean architecture, 
  quality, and innovation. Committed to fostering team growth, maintaining clean code practices, and 
  creating impactful products.`,

  avatar: '/avatar.jpg',
  experience: '8+ Years',
  education: 'Doctor of Science (PhD), Artificial Intelligence - Islamic Azad University',
  languages: ['English (Advanced)', 'Persian (Native)', 'French (Beginner)', 'Turkish (Intermediate)'],
  linkedin: 'https://linkedin.com/in/amir-marjani',
  github: 'https://github.com/amir-marjani'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Discounta E-Commerce Platform',
    description: 'Developed a full-stack e-commerce platform using Next.js for the frontend and a hybrid backend with Python (FastAPI) and Node.js (Express). Implemented SSR/SSG for performance, built reusable UI components with Tailwind CSS, and integrated Stripe for payments.',
    image: '/projects/discounta-ecommerce.jpg',
    technologies: ['Next.js', 'Python', 'FastAPI', 'Node.js', 'Express', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://discounta.com',
    githubUrl: 'https://github.com/amir-marjani/discounta',
    featured: true
  },
  {
    id: '2',
    title: 'Fintranet Payment Platform',
    description: 'Led the development of a cloud-based payment platform using Angular, integrating PrimeNG and the ABP framework to boost functionality and performance. Provided responsive, knowledgeable customer support and trained a 5-member team.',
    image: '/projects/fintranet-payment.jpg',
    technologies: ['Angular', 'PrimeNG', 'ABP Framework', 'TypeScript', 'RxJS'],
    liveUrl: 'https://fintranet.com',
    githubUrl: 'https://github.com/amir-marjani/fintranet',
    featured: true
  },
  {
    id: '3',
    title: 'Myth Arena E-Sports Platform',
    description: 'Contributed to the development of Myth Arena, a Turkish e-sports platform, using Angular framework with Angular Material and NgRx for state management. Refactored legacy code and participated in the entire SDLC.',
    image: '/projects/myth-arena.jpg',
    technologies: ['Angular', 'Angular Material', 'NgRx', 'TypeScript', 'RxJS'],
    liveUrl: 'https://mytharena.com',
    githubUrl: 'https://github.com/amir-marjani/myth-arena',
    featured: true
  },
  {
    id: '4',
    title: 'Smart Runners Social Network',
    description: 'Developed a bilingual sports-focused social network supporting both Persian and English, delivering a localized and engaging user experience. Built using Angular with Angular Material and NgRx for state management.',
    image: '/projects/smart-runners.jpg',
    technologies: ['Angular', 'Angular Material', 'NgRx', 'TypeScript', 'Git'],
    liveUrl: 'https://smartrunners.com',
    githubUrl: 'https://github.com/amir-marjani/smart-runners',
    featured: false
  },
  {
    id: '5',
    title: 'Warehouse Inventory Management PWA',
    description: 'Developed a Windows-based application using Angular Progressive Web App (PWA) technology, designed to streamline warehouse inventory management with real-time tracking and comprehensive reporting.',
    image: '/projects/warehouse-pwa.jpg',
    technologies: ['Angular', 'PWA', 'TypeScript', 'Progressive Web App'],
    liveUrl: 'https://warehouse-app.com',
    githubUrl: 'https://github.com/amir-marjani/warehouse-pwa',
    featured: false
  },
  {
    id: '6',
    title: 'Emirates Tennis Federation Platform',
    description: 'Built the UI using Angular 7, implementing lazy loading, Angular Universal (SSR), and HTTP interceptors to enhance performance, SEO, and maintainability. Developed cross-platform software compatible with desktop and mobile.',
    image: '/projects/emirates-tennis.jpg',
    technologies: ['Angular 7', 'Angular Universal', 'SSR', 'Lazy Loading', 'HTTP Interceptors'],
    liveUrl: 'https://emiratestennis.com',
    githubUrl: 'https://github.com/amir-marjani/emirates-tennis',
    featured: false
  }
]

export const skills: Skill[] = [
  // Frontend - Based on CV experience
  { name: 'Angular', category: 'frontend', level: 5 },
  { name: 'React.js', category: 'frontend', level: 4 },
  { name: 'Next.js', category: 'frontend', level: 4 },
  { name: 'TypeScript', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { name: 'Angular Material', category: 'frontend', level: 5 },
  { name: 'PrimeNG', category: 'frontend', level: 4 },
  { name: 'RxJS', category: 'frontend', level: 4 },
  { name: 'NgRx', category: 'frontend', level: 4 },
  { name: 'PWA', category: 'frontend', level: 4 },
  { name: 'SSR/SSG', category: 'frontend', level: 4 },
  
  // Backend - Based on CV experience
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express.js', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'FastAPI', category: 'backend', level: 3 },
  { name: 'C#', category: 'backend', level: 3 },
  { name: 'WPF', category: 'backend', level: 3 },
  
  // Database
  { name: 'PostgreSQL', category: 'database', level: 4 },
  { name: 'MongoDB', category: 'database', level: 3 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'Vercel', category: 'tools', level: 4 },
  { name: 'Render', category: 'tools', level: 4 },
  { name: 'CI/CD', category: 'tools', level: 4 },
  { name: 'Stripe', category: 'tools', level: 4 },
  { name: 'ABP Framework', category: 'tools', level: 4 },
  
  // Management & Soft Skills
  { name: 'Team Leadership', category: 'management', level: 5 },
  { name: 'Project Management', category: 'management', level: 4 },
  { name: 'Code Review', category: 'management', level: 5 },
  { name: 'Technical Documentation', category: 'management', level: 4 },
  { name: 'Customer Support', category: 'management', level: 4 }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/amir-marjani',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/amir-marjani',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: 'mailto:amir.marjani@gmail.com',
    icon: 'email'
  }
]

export const books: Book[] = [
  {
    id: '1',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    description: 'A handbook of agile software craftsmanship that teaches how to write clean, maintainable code.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://amazon.com/clean-code',
    goodreadsUrl: 'https://goodreads.com/clean-code'
  },
  {
    id: '2',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'The big ideas behind reliable, scalable, and maintainable systems.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://amazon.com/designing-data-intensive-applications',
    goodreadsUrl: 'https://goodreads.com/designing-data-intensive-applications'
  },
  {
    id: '3',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    description: 'Your journey to mastery in software development.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://amazon.com/pragmatic-programmer',
    goodreadsUrl: 'https://goodreads.com/pragmatic-programmer'
  },
  {
    id: '4',
    title: 'Angular in Action',
    author: 'Jeremy Wilken',
    description: 'A comprehensive guide to building applications with Angular.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://amazon.com/angular-in-action',
    goodreadsUrl: 'https://goodreads.com/angular-in-action'
  },
  {
    id: '5',
    title: 'Deep Learning',
    author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
    description: 'A comprehensive introduction to deep learning and neural networks.',
    category: 'technical',
    rating: 4,
    amazonUrl: 'https://amazon.com/deep-learning',
    goodreadsUrl: 'https://goodreads.com/deep-learning'
  }
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Angular Developer Certification',
    issuer: 'Google',
    issueDate: '2023-06-15',
    category: 'development',
    url: 'https://angular.dev/certification'
  },
  {
    id: '2',
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    issueDate: '2023-03-20',
    category: 'development',
    url: 'https://typescript.org/'
  },
  {
    id: '3',
    title: 'Next.js Developer Certification',
    issuer: 'Vercel',
    issueDate: '2023-01-10',
    category: 'development',
    url: 'https://nextjs.org/'
  },
  {
    id: '4',
    title: 'React Developer Certification',
    issuer: 'Meta',
    issueDate: '2022-11-05',
    category: 'development',
    url: 'https://react.dev/'
  },
  {
    id: '5',
    title: 'Team Leadership & Management',
    issuer: 'LinkedIn Learning',
    issueDate: '2022-08-15',
    category: 'management',
    url: 'https://linkedin.com/learning'
  }
]

export const awards: Award[] = [
  {
    id: '1',
    title: 'Frontend Manager Excellence',
    organization: 'Fintranet',
    date: '2024-12-01',
    description: 'Recognized for outstanding leadership and team management in developing cloud-based payment solutions.',
    category: 'recognition',
    url: 'https://fintranet.com'
  },
  {
    id: '2',
    title: 'Best E-Commerce Platform',
    organization: 'Discounta',
    date: '2024-06-15',
    description: 'Awarded for developing a high-performance, scalable e-commerce platform with modern technologies.',
    category: 'achievement',
    url: 'https://discounta.com'
  },
  {
    id: '3',
    title: 'Innovation in E-Sports Platform',
    organization: 'Natum Games',
    date: '2023-09-20',
    description: 'Contributed to the successful development of Myth Arena, a leading Turkish e-sports platform.',
    category: 'achievement',
    url: 'https://mytharena.com'
  },
  {
    id: '4',
    title: 'PhD in Artificial Intelligence',
    organization: 'Islamic Azad University',
    date: '2022-05-15',
    description: 'Successfully completed doctoral studies in Artificial Intelligence, contributing to academic research.',
    category: 'achievement',
    url: 'https://iau.ac.ir'
  }
] 