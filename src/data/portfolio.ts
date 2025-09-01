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
  image: string
  pdf: string
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
  title: 'Software Engineer',
  email: 'marjani.code@gmail.com',
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
    image: '/projects/Fintranet/f1.JPG',
    technologies: ['Angular', 'PrimeNG', 'ABP Framework', 'TypeScript', 'RxJS'],
    liveUrl: 'https://fintranet.com',
    githubUrl: 'https://github.com/amir-marjani/fintranet',
    featured: true
  },
  {
    id: '3',
    title: 'FintraAccount Financial Platform',
    description: 'Led the development of a comprehensive financial management platform for banking operations using Angular framework. Implemented advanced reporting dashboards, real-time transaction monitoring, compliance tools, and risk assessment modules. Built with Angular, PrimeNG components, and RxJS for reactive state management, delivering a robust and scalable solution for financial institutions with enhanced security features and regulatory compliance.',
    image: '/projects/FintraAccount/1.jpg',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Financial APIs', 'Compliance Tools', 'Risk Assessment'],
    liveUrl: 'https://fintraaccount.com',
    githubUrl: 'https://github.com/amir-marjani/fintraaccount',
    featured: true
  },
  {
    id: '4',
    title: 'Myth Arena E-Sports Platform',
    description: 'Contributed to the development of Myth Arena, a Turkish e-sports platform, using Angular framework with Angular Material and NgRx for state management. Refactored legacy code and participated in the entire SDLC.',
    image: '/projects/myth-arena.jpg',
    technologies: ['Angular', 'Angular Material', 'NgRx', 'TypeScript', 'RxJS'],
    liveUrl: 'https://mytharena.com',
    githubUrl: 'https://github.com/amir-marjani/myth-arena',
    featured: true
  },
  {
    id: '5',
    title: 'Smart Runners Social Network',
    description: 'Developed a bilingual sports-focused social network supporting both Persian and English, delivering a localized and engaging user experience. Built using Angular with Angular Material and NgRx for state management.',
    image: '/projects/smartRunners/Screenshot 2025-08-13 020725.png',
    technologies: ['Angular', 'Angular Material', 'NgRx', 'TypeScript', 'Git'],
    liveUrl: 'https://smartrunners.com',
    githubUrl: 'https://github.com/amir-marjani/smart-runners',
    featured: false
  },
  {
    id: '6',
    title: 'Warehouse Inventory Management PWA',
    description: 'Developed a Windows-based application using Angular Progressive Web App (PWA) technology, designed to streamline warehouse inventory management with real-time tracking and comprehensive reporting.',
    image: '/projects/warehouse-pwa.jpg',
    technologies: ['Angular', 'PWA', 'TypeScript', 'Progressive Web App'],
    liveUrl: 'https://warehouse-app.com',
    githubUrl: 'https://github.com/amir-marjani/warehouse-pwa',
    featured: false
  },
  {
    id: '7',
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
  { name: 'Python', category: 'backend', level: 4 },
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
    url: 'mailto:marjani.code@gmail.com',
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
    amazonUrl: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882/',
    goodreadsUrl: 'https://www.goodreads.com/book/show/3735293-clean-code'
  },
  {
    id: '2',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    description: 'The big ideas behind reliable, scalable, and maintainable systems.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321',
    goodreadsUrl: 'https://www.goodreads.com/book/show/23463205-designing-data-intensive-applications'
  },
  {
    id: '3',
    title: 'The Pragmatic Programmer: Your Journey to Mastery (20th Anniversary Edition)',
    author: 'David Thomas & Andrew Hunt',
    description: 'Your journey to mastery in software development.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052',
    goodreadsUrl: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer'
  },
  {
    id: '4',
    title: 'Angular in Action',
    author: 'Jeremy Wilken',
    description: 'A comprehensive guide to building applications with Angular.',
    category: 'technical',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Angular-Action-Jeremy-Wilken/dp/1617293318',
    goodreadsUrl: 'https://www.goodreads.com/book/show/35426011-angular-in-action'
  },
  {
    id: '5',
    title: 'Deep Learning (Adaptive Computation and Machine Learning series)',
    author: 'Ian Goodfellow, Yoshua Bengio, Aaron Courville',
    description: 'A comprehensive introduction to deep learning and neural networks.',
    category: 'technical',
    rating: 4,
    amazonUrl: 'https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618',
    goodreadsUrl: 'https://www.goodreads.com/book/show/24072897-deep-learning'
  },
  {
    id: '7',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    description: 'A timeless fantasy adventure following Bilbo Baggins on his journey with thirteen dwarves to reclaim their homeland.',
    category: 'fiction',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X',
    goodreadsUrl: 'https://www.goodreads.com/book/show/2239768.The_Hobbit'
  },
  {
    id: '8',
    title: 'World of Warcraft: Arthas: Rise of the Lich King',
    author: 'Christie Golden',
    description: 'The tragic story of Prince Arthas Menethil and his transformation into the Lich King, one of Azeroth\'s most feared villains. Published in 2009.',
    category: 'fiction',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/World-Warcraft-Arthas-Rise-Lich-ebook/dp/B001NLL6LM',
    goodreadsUrl: 'https://www.goodreads.com/book/show/6290885-arthas'
  },
  {
    id: '9',
    title: 'World of Warcraft: Illidan',
    author: 'William King',
    description: 'The epic tale of Illidan Stormrage, the Betrayer, and his quest for power and redemption in the Burning Legion. Published in 2016.',
    category: 'fiction',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Illidan-World-Warcraft-William-King/dp/0399177574',
    goodreadsUrl: 'https://www.goodreads.com/book/show/26721433-illidan'
  },
  {
    id: '10',
    title: 'World of Warcraft: Sylvanas',
    author: 'Christie Golden',
    description: 'The compelling story of Sylvanas Windrunner, from her transformation into the Banshee Queen to her complex journey through Azeroth\'s conflicts. Published in 2022.',
    category: 'fiction',
    rating: 5,
    amazonUrl: 'https://www.amazon.com/Sylvanas-World-Warcraft-Christie-Golden/dp/0399594183',
    goodreadsUrl: 'https://www.goodreads.com/book/show/57569385-sylvanas'
  }
]

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Angular (Full App) with Angular Material, Angularfire & NgRx',
    issuer: 'Udemy',
    issueDate: '2025-08-19',
    category: 'development',
    image: '/certificates/Angular (Full App) with Angular Material, Angularfire & NgRx/UC-fc6e19db-6bcf-4fcf-8957-676748f956cf.jpg',
    pdf: '/certificates/Angular (Full App) with Angular Material, Angularfire & NgRx/UC-fc6e19db-6bcf-4fcf-8957-676748f956cf.pdf',
    url: 'https://udemy.com',
    credentialId: 'UC-fc6e19db-6bcf-4fcf-8957-676748f956cf'
  },
  {
    id: '2',
    title: 'Complete React Developer (w Redux, Hooks, GraphQL)',
    issuer: 'Udemy',
    issueDate: '2025-08-19',
    category: 'development',
    image: '/certificates/Complete React Developer (w Redux, Hooks, GraphQL)/UC-f441cc2b-153a-4271-8c8f-4443e8c39b12.jpg',
    pdf: '/certificates/Complete React Developer (w Redux, Hooks, GraphQL)/UC-f441cc2b-153a-4271-8c8f-4443e8c39b12.pdf',
    url: 'https://udemy.com',
    credentialId: 'UC-f441cc2b-153a-4271-8c8f-4443e8c39b12'
  },
  {
    id: '3',
    title: 'NgRx (with NgRx Data) - The Complete Guide (Angular 20)',
    issuer: 'Udemy',
    issueDate: '2025-08-19',
    category: 'development',
    image: '/certificates/NgRx (with NgRx Data) - The Complete Guide (Angular 20)/UC-dcde2d97-6cc3-4ede-a9d6-65e45c21b1df.jpg',
    pdf: '/certificates/NgRx (with NgRx Data) - The Complete Guide (Angular 20)/UC-dcde2d97-6cc3-4ede-a9d6-65e45c21b1df.pdf',
    url: 'https://udemy.com',
    credentialId: 'UC-dcde2d97-6cc3-4ede-a9d6-65e45c21b1df'
  },
  {
    id: '4',
    title: 'The Complete Prompt Engineering for AI Bootcamp (2025)',
    issuer: 'Udemy',
    issueDate: '2025-08-19',
    category: 'development',
    image: '/certificates/The Complete Prompt Engineering for AI Bootcamp (2025)/UC-4fc23d84-c589-4bdf-b734-bb1e271882ce.jpg',
    pdf: '/certificates/The Complete Prompt Engineering for AI Bootcamp (2025)/UC-4fc23d84-c589-4bdf-b734-bb1e271882ce.pdf',
    url: 'https://udemy.com',
    credentialId: 'UC-4fc23d84-c589-4bdf-b734-bb1e271882ce'
  },
  {
    id: '5',
    title: 'C# Programming',
    issuer: 'Data Analysis Institute (آموزشگاه تحلیل داده)',
    issueDate: '2017-01-24',
    category: 'development',
    image: '/certificates/CSharp/csharp.jpg',
    pdf: '/certificates/CSharp/csharp.jpg',
    url: 'https://amirmarjani.com',
    credentialId: '95-144'
  },
  {
    id: '6',
    title: 'HTML5-CSS3-JQuery',
    issuer: 'Data Analysis Institute (آموزشگاه تحلیل داده)',
    issueDate: '2017-01-12',
    category: 'development',
    image: '/certificates/HTML5-CSS3-JQuery/html5-css3-jquery.jpg',
    pdf: '/certificates/HTML5-CSS3-JQuery/html5-css3-jquery.jpg',
    url: 'https://amirmarjani.com',
    credentialId: '10-185'
  },
  {
    id: '7',
    title: 'Network+',
    issuer: 'CANDO (شرکت کندوی دانش پارسیان)',
    issueDate: '2017-02-25',
    category: 'development',
    image: '/certificates/Network+/network-plus.jpg',
    pdf: '/certificates/Network+/network-plus.jpg',
    url: 'https://www.CanDo1.com',
    credentialId: '208104'
  },
  {
    id: '8',
    title: 'SQL Server 2016 Pack - Admin & Design',
    issuer: 'CANDO (شرکت کندوی دانش پارسیان)',
    issueDate: '2017-06-07',
    category: 'development',
    image: '/certificates/SQL server Admin and design/sql-server-admin-design.jpg',
    pdf: '/certificates/SQL server Admin and design/sql-server-admin-design.jpg',
    url: 'https://www.CanDo1.com',
    credentialId: '208840'
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