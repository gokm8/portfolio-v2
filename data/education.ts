export interface Education {
  id: number
  school: string
  date: string
  education: string
  description: string
  badge: string[]
}

export const educationalData: Education[] = [
  {
    id: 1,
    school: 'University of Southern Denmark, SDU',
    date: 'Sep. 2022 - Jan. 2026',
    education: 'BEng in Software Technology',
    description:
      'Bachelor of Engineering in Software Technology with a focus on OOP, software development, software architecture, design, databases, DevOps and agile methodologies.',
    badge: [
      'OOP',
      'Software Development',
      'Software Architecture',
      'Design',
      'Databases',
      'DevOps',
      'Agile Methodologies'
    ]
  },
  {
    id: 2,
    school: 'Zealand Academy of Technologies and Business',
    date: 'Feb. 2019 - Jan. 2021',
    education: 'AP Graduate in Marketing Management',
    description:
      'Developed a strong understanding of business, sales and B2B relationships, which I apply to understand and translate business and customer needs into solutions.',
    badge: [
      'Marketing Management',
      'Business',
      'Sales',
      'B2B Relationships',
      'Customer Needs'
    ]
  }
]
