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
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'design'
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
  name: 'Your Name',
  title: 'Full Stack Developer & UI/UX Designer',
  email: 'your.email@example.com',
  location: 'Your City, Country',
  about: `I'm a passionate developer with X years of experience creating digital solutions. 
  I specialize in modern web technologies and love building products that solve real problems. 
  When I'm not coding, you can find me exploring new technologies, contributing to open source, 
  or sharing knowledge with the developer community.`,
  avatar: '/avatar.jpg'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.',
    image: '/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
    image: '/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my work and skills with modern design and smooth animations.',
    image: '/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: false
  }
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 5 },
  { name: 'Next.js', category: 'frontend', level: 5 },
  { name: 'TypeScript', category: 'frontend', level: 4 },
  { name: 'Tailwind CSS', category: 'frontend', level: 5 },
  { name: 'HTML/CSS', category: 'frontend', level: 5 },
  { name: 'JavaScript', category: 'frontend', level: 5 },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 4 },
  { name: 'Express.js', category: 'backend', level: 4 },
  { name: 'Python', category: 'backend', level: 3 },
  { name: 'Django', category: 'backend', level: 3 },
  
  // Database
  { name: 'PostgreSQL', category: 'database', level: 4 },
  { name: 'MongoDB', category: 'database', level: 4 },
  { name: 'Redis', category: 'database', level: 3 },
  
  // Tools
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'Docker', category: 'tools', level: 3 },
  { name: 'AWS', category: 'tools', level: 3 },
  { name: 'Vercel', category: 'tools', level: 4 },
  
  // Design
  { name: 'Figma', category: 'design', level: 4 },
  { name: 'Adobe XD', category: 'design', level: 3 },
  { name: 'Photoshop', category: 'design', level: 3 }
]

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter'
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/yourusername',
    icon: 'dribbble'
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
    title: 'Atomic Habits',
    author: 'James Clear',
    description: 'An easy and proven way to build good habits and break bad ones.',
    category: 'business',
    rating: 5,
    amazonUrl: 'https://amazon.com/atomic-habits',
    goodreadsUrl: 'https://goodreads.com/atomic-habits'
  },
  {
    id: '4',
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    description: 'Your journey to mastery in software development.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://amazon.com/pragmatic-programmer',
    goodreadsUrl: 'https://goodreads.com/pragmatic-programmer'
  },
  {
    id: '5',
    title: 'Deep Work',
    author: 'Cal Newport',
    description: 'Rules for focused success in a distracted world.',
    category: 'business',
    rating: 4,
    amazonUrl: 'https://amazon.com/deep-work',
    goodreadsUrl: 'https://goodreads.com/deep-work'
  }
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issueDate: '2024-01-15',
    credentialId: 'AWS-123456789',
    category: 'cloud',
    url: 'https://aws.amazon.com/certification/'
  },
  {
    id: '2',
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    issueDate: '2023-11-20',
    credentialId: 'GCP-987654321',
    category: 'cloud',
    url: 'https://cloud.google.com/certification/'
  },
  {
    id: '3',
    title: 'React Developer Certification',
    issuer: 'Meta',
    issueDate: '2023-08-10',
    category: 'development',
    url: 'https://react.dev/'
  },
  {
    id: '4',
    title: 'TypeScript Fundamentals',
    issuer: 'Microsoft',
    issueDate: '2023-06-05',
    category: 'development',
    url: 'https://typescript.org/'
  },
  {
    id: '5',
    title: 'UI/UX Design Fundamentals',
    issuer: 'Coursera',
    issueDate: '2023-03-15',
    category: 'design',
    url: 'https://coursera.org/'
  }
]

export const awards: Award[] = [
  {
    id: '1',
    title: 'Best Web Application',
    organization: 'TechCrunch Disrupt Hackathon',
    date: '2024-02-15',
    description: 'Won first place for developing an innovative AI-powered productivity tool.',
    category: 'hackathon',
    url: 'https://techcrunch.com/'
  },
  {
    id: '2',
    title: 'Developer of the Year',
    organization: 'Local Tech Community',
    date: '2023-12-10',
    description: 'Recognized for outstanding contributions to the local developer community.',
    category: 'recognition',
    url: 'https://example.com/'
  },
  {
    id: '3',
    title: 'Open Source Contributor Award',
    organization: 'GitHub',
    date: '2023-09-20',
    description: 'Awarded for significant contributions to popular open source projects.',
    category: 'achievement',
    url: 'https://github.com/'
  },
  {
    id: '4',
    title: 'Innovation Award',
    organization: 'Startup Weekend',
    date: '2023-07-08',
    description: 'Best innovative solution for sustainable technology.',
    category: 'competition',
    url: 'https://startupweekend.org/'
  }
] 