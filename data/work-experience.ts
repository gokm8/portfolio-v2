export interface Experience {
  id: number
  date: string
  title: string
  company: string
  location: string
  description: string
  points: string[]
  /** Technologies and domains — rendered as badges */
  badge: string[]
  link?: string
  /** Marks unpaid roles, shown as a small label in the combined list */
  volunteer?: boolean
}

export const workExperienceData: Experience[] = [
  {
    id: 1,
    date: 'Feb. 2025 - Present',
    title: 'Founder',
    company: '@ TeoriOnline',
    location: 'Copenhagen, Denmark',
    description:
      'Founder of TeoriOnline.dk, a digital learning platform for preparing the Danish driving theory test, with responsibility for the software architecture of the SaaS platform.',
    points: [
      'Designed and implemented REST API endpoints for integrations with systems',
      'Developed modular React components with a focus on reusability and maintainability',
      'Responsible for the software architecture of a SaaS platform, with a focus on scalability and modularity'
    ],
    badge: ['React', 'Next.js', 'TypeScript', 'SaaS', 'Software Architecture'],
    link: 'https://teorionline.dk'
  },
  {
    id: 2,
    date: 'Sep. 2023 - Feb. 2026 (2 yrs, 6 mos)',
    title: 'Software Engineer',
    company: '@ a:gain [again]',
    location: 'Copenhagen, Denmark',
    description:
      'Software Engineer developing web and backend solutions in C#/.NET, React and Microsoft Azure, with automated data flows and integrations supporting internal processes and digital products.',
    points: [
      'Automated data flows using APIs and ETL, reducing manual work and improving data accuracy',
      'Developed web and backend in C#/.NET, React, and Azure for internal processes and digital products',
      'Collaborated across sales, marketing, and product development on technical solutions and integrations'
    ],
    badge: [
      'C#/.NET',
      'React',
      'Microsoft Azure',
      'SQL',
      'ETL',
      'Integrations',
      'Automation'
    ]
  },
  {
    id: 3,
    date: 'Jan. 2021 - Sep. 2022 (1 yr, 9 mos)',
    title: 'Account Manager',
    company: '@ Verifone',
    location: 'Herlev, Denmark',
    description:
      'Account Manager responsible for a B2B portfolio, with a focus on relationship building, consultative sales and long-term partnerships.',
    points: [
      'Managed a B2B-portfolio through relationship building, upselling, and customer engagement',
      'Converted leads into new B2B customers through consultative sales and structured follow-up',
      'Negotiated contract terms with a focus on customer needs, business value, and long-term partnerships'
    ],
    badge: [
      'B2B Sales',
      'Account Management',
      'Consultative Sales',
      'Contract Negotiation',
      'Upselling'
    ]
  }
]
