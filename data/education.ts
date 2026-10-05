export interface Education {
  id: number
  school: string
  date: string
  education: string
  description: string
}

export const educationalData: Education[] = [
  {
    id: 1,
    school: 'University of Southern Denmark, SDU',
    date: 'Sep. 2022 - Jan. 2026',
    education: 'B.Eng. in Software Engineering',
    description:
      'Focused on software development, system design, databases and cloud technologies, developing competencies in APIs, software architecture and modern web development. Bachelor’s project on AI architecture with LLM providers, focusing on flexibility and vendor independence.'
  },
  {
    id: 2,
    school: 'Zealand Academy of Technologies and Business',
    date: 'Feb. 2019 - Jan. 2021',
    education: 'AP Graduate in Marketing Management',
    description:
      'Focused on business, sales, marketing, finance and organizational understanding, combining analysis, planning and execution of commercial initiatives. Worked with both B2B and B2C marketing, market communication and customer needs.'
  }
]
