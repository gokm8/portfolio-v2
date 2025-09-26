export interface Education {
  id: number
  school: string
  date: string
  education: string
}

export const educationalData: Education[] = [
  {
    id: 1,
    school: 'University of Southern Denmark',
    date: '2022 - 2026',
    education: 'B.Eng in Software Technology'
  },
  {
    id: 2,
    school: 'Zealand Academy',
    date: '2018 - 2020',
    education: 'AP Graduate in Marketing Management'
  },
  {
    id: 3,
    school: 'Zealand Academy',
    date: '2019 - 2019',
    education: 'Exchange Program in Midwest, USA'
  }
]
