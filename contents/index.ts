export const TECH_LIST = [
  {
    name: 'React',
    filename: 'react.webp',
  },
  {
    name: 'Next',
    filename: 'next.svg',
  },
  {
    name: 'Vue',
    filename: 'vue.webp',
  },
  {
    name: 'Nuxt',
    filename: 'nuxt.svg',
  },
  {
    name: 'TypeScript',
    filename: 'ts.webp',
  },
  {
    name: 'TailwindCSS',
    filename: 'tailwind.svg',
  },
]

export type ProjectType = 'Professional' | 'Freelance' | 'Personal'
export type ProjectStatus = 'Live' | 'In Development' | 'Completed'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  type: ProjectType
  status: ProjectStatus
  featured: boolean
  url?: string
  githubUrl?: string
  imageUrl?: string
  techStack: string[]
  highlights: string[]
  metrics?: {
    label: string
    value: string
  }[]
  period: string
}

export const PROJECTS: Project[] = [
  {
    id: 'getwash',
    title: 'Getwash',
    description: 'Modern laundry service landing page with Google reCAPTCHA integration',
    longDescription: 'Built responsive landing page from scratch using Next.js 15 with App Router and TypeScript for enhanced type safety. Integrated Google reCAPTCHA v3 with server-side verification and score-based filtering to prevent spam submissions.',
    type: 'Freelance',
    status: 'Live',
    featured: true,
    url: 'https://getwashlaundry.id',
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'reCAPTCHA'],
    highlights: [
      'Next.js 15 App Router implementation',
      'Google reCAPTCHA v3 with server-side verification',
      'SEO optimization and performance enhancements',
      'Responsive design from scratch'
    ],
    period: '2024'
  },
  {
    id: 'sequence-day',
    title: 'Sequence.day',
    description: 'SEO platform landing page migration to modern Next.js architecture',
    longDescription: 'Led the migration to Next.js App Router architecture, implementing proper separation of server and client components for improved code organization. Modernized the component library by integrating shadcn/ui.',
    type: 'Professional',
    status: 'Live',
    featured: true,
    url: 'https://sequence.day',
    techStack: ['Next.js 13+', 'TypeScript', 'shadcn/ui', 'Tailwind CSS'],
    highlights: [
      'App Router migration and architecture modernization',
      'shadcn/ui component library integration',
      'Server/client component separation',
      'Technical debt reduction'
    ],
    period: '2023-2024'
  },
  {
    id: 'sequence-app',
    title: 'Sequence App',
    description: 'Comprehensive SEO analytical tool with real-time features',
    longDescription: 'Developed a Site Audit feature using modern data visualization libraries to present complex SEO metrics. Implemented real-time data updates using WebSocket integration for notification feature.',
    type: 'Professional',
    status: 'Live',
    featured: true,
    url: 'https://app.sequence.day',
    techStack: ['Nuxt', 'Highcharts', 'WebSocket', 'Tailwind CSS'],
    highlights: [
      'Site Audit feature with data visualization',
      'Real-time WebSocket notifications',
      'Performance optimization with lazy loading',
      'Interactive SEO analytics charts'
    ],
    period: '2022-2024'
  },
  {
    id: 'visuwisu',
    title: 'Visuwisu',
    description: 'Marketing website with advanced GSAP animations',
    longDescription: 'Revamped the entire website with modern animations using GSAP library while maintaining performance. Implemented interactive features including a dynamic table of contents for blog pages.',
    type: 'Professional',
    status: 'Live',
    featured: false,
    url: 'https://visuwisu.co',
    techStack: ['React.js', 'Next.js', 'GSAP', 'Tailwind CSS'],
    highlights: [
      'Advanced GSAP animations with performance optimization',
      'Dynamic table of contents for blog pages',
      'Cross-browser compatibility',
      'Pixel-perfect design implementation'
    ],
    period: '2023'
  },
  {
    id: 'cimb-wealth',
    title: 'CIMB Wealth Management System',
    description: 'Large-scale micro-frontend architecture for banking platform',
    longDescription: 'Working on CIMB\'s Wealth Management System, a large-scale micro-frontend architecture project in collaboration with Praisindo. Developing and maintaining independent micro-frontend features while ensuring seamless integration.',
    type: 'Professional',
    status: 'In Development',
    featured: false,
    techStack: ['React.js', 'Redux', 'Webpack', 'Micro-frontend'],
    highlights: [
      'Micro-frontend architecture implementation',
      'Independent feature development and integration',
      'State management with Redux patterns',
      'Cross-functional team collaboration'
    ],
    period: 'Nov 2024 - Mar 2025'
  },
  {
    id: 'notion-like-app',
    title: 'Notion-like Productivity App',
    description: 'Advanced text editing app with real-time collaboration',
    longDescription: 'Developing a Notion-like productivity application with advanced text editing capabilities, real-time collaboration features, and customizable workspace layouts. Expanding into fullstack development.',
    type: 'Freelance',
    status: 'In Development',
    featured: false,
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Node.js'],
    highlights: [
      'Advanced text editing capabilities',
      'Real-time collaboration features',
      'Customizable workspace layouts',
      'Fullstack development approach'
    ],
    period: 'Mar 2025 - Present'
  },
  {
    id: 'pos-system',
    title: 'Point of Sale System',
    description: 'Comprehensive POS with inventory and analytics',
    longDescription: 'Building a comprehensive Point of Sale (POS) system with inventory management, sales analytics, and payment processing integration for small businesses.',
    type: 'Freelance',
    status: 'In Development',
    featured: false,
    techStack: ['React.js', 'Next.js', 'TypeScript', 'Node.js'],
    highlights: [
      'Inventory management system',
      'Sales analytics dashboard',
      'Payment processing integration',
      'Small business focused features'
    ],
    period: 'Mar 2025 - Present'
  }
]
