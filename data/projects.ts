export interface Project {
  title: string
  description: string
  link?: string
  githubLink?: string
  image?: string
  width?: number
  height?: number
  techStack?: string[]
  category: 'featured' | 'current' | 'completed' | 'learning'
  status: 'live' | 'in-development' | 'completed' | 'archived'
  slug?: string
  highlights?: string[]
  year?: number
}

export const featuredProjectsData: Project[] = [
  {
    title: 'ayserenas.dk',
    description:
      'wedding website for a friend where guests can upload and share photos from the wedding celebration with the couple.',
    link: 'https://ayserenas.dk',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    category: 'featured',
    status: 'live',
    highlights: [
      'responsive design for all devices',
      'fast loading with Next.js',
      'seo-optimized for visibility',
      'professional branding & UX'
    ],
    year: 2025
  },
  {
    title: 'teorionline.dk',
    description:
      'full-stack e-learning platform providing comprehensive online courses with interactive content and user management.',
    link: 'https://teorionline.dk',
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'Tailwind CSS'
    ],
    category: 'featured',
    status: 'live',
    highlights: [
      'user auth & course management',
      'interactive content delivery',
      'mobile & desktop responsive',
      'database-driven CMS',
      'payment integration'
    ],
    year: 2025
  }
]

export const currentProjectsData: Project[] = [
  {
    title: 'upcoming project',
    description:
      'Exciting new project currently in development - more details coming soon.',
    category: 'current',
    status: 'in-development',
    year: 2024
  },
  {
    title: 'qr generator',
    description: 'a simple tool to generate QR codes from text or URL\'s.',
    category: 'current',
    status: 'in-development',
    techStack: ['React', 'JavaScript', 'CSS']
  },
  {
    title: 'favicon generator',
    description: 'a tool to generate favicons for websites.',
    category: 'current',
    status: 'in-development',
    techStack: ['React', 'JavaScript', 'Canvas API']
  }
]

export const completedProjectsData: Project[] = [
  {
    title: 'todo list app',
    description:
      'a task management app that allows users to add, edit, and delete tasks.',
    githubLink: 'https://github.com/gokm8/todo',
    category: 'learning',
    status: 'completed',
    techStack: ['React', 'JavaScript', 'CSS'],
    year: 2023
  },
  {
    title: 'tic-tac-toe game',
    description:
      'a classic two-player game where users take turns placing X and O on a grid.',
    githubLink: 'https://github.com/gokm8/tictactoe',
    category: 'learning',
    status: 'completed',
    techStack: ['React', 'JavaScript', 'CSS'],
    year: 2023
  },
  {
    title: 'quiz app',
    description:
      'a quiz app with various topics and multiple-choice questions.',
    githubLink: 'https://github.com/gokm8/quiz-app',
    category: 'learning',
    status: 'completed',
    techStack: ['React', 'JavaScript', 'CSS'],
    year: 2023
  }
]

// Combine all projects for easy access
export const allProjects: Project[] = [
  ...featuredProjectsData,
  ...currentProjectsData,
  ...completedProjectsData
]
