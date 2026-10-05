export interface SkillCategory {
  id: number
  category: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    id: 1,
    category: 'Programming Languages',
    skills: ['C#/.NET', 'TypeScript', 'JavaScript', 'React']
  },
  {
    id: 2,
    category: 'Backend',
    skills: ['REST API', 'Server-side logic', 'Webhooks']
  },
  {
    id: 3,
    category: 'Data',
    skills: ['SQL', 'NoSQL', 'Data Modeling', 'ETL']
  },
  {
    id: 4,
    category: 'DevOps & Cloud',
    skills: ['Git', 'CI/CD', 'Docker', 'Microsoft Azure']
  },
  {
    id: 5,
    category: 'Core Competencies',
    skills: [
      'Communication',
      'Analytical Thinking',
      'Teamwork',
      'Creativity',
      'Willingness to Learn'
    ]
  }
]
