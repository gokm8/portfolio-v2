export interface CompletedProject {
  id: number
  title: string
  description: string
  alt: string
  link?: string
  githubLink?: string
  image?: string
  width?: number
  height?: number
  techStack?: string[]
}

export const completedProjectsData: CompletedProject[] = [
  {
    id: 1,
    title: 'Wedding photo sharing',
    description:
      'I built a custom site (ayserenas.dk) with QR codes on the tables - making it ...',
    alt: 'QR Wedding Snap website preview image',
    image: '/completed_projects_section/project-ayserenas.dk.jpg',
    techStack: [
      'Next.js',
      'TypeScript',
      'Vercel',
      'PostgreSQL',
      'Prisma',
      '...'
    ],
    link: 'ayserenas.dk',
    githubLink: 'https://github.com/gokm8/qr-wedding-snap'
  },
  {
    id: 2,
    title: 'Wedding photo sharing',
    description:
      'I built a custom site (ayserenas.dk) with QR codes on the tables - making it ...',
    alt: 'QR Wedding Snap website preview image',
    image: '/completed_projects_section/project-ayserenas.dk.jpg',
    techStack: [
      'Next.js',
      'TypeScript',
      'Vercel',
      'PostgreSQL',
      'Prisma',
      '...'
    ],
    link: 'https://ayserenas.dk',
    githubLink: 'https://github.com/gokm8/qr-wedding-snap'
  }
]
