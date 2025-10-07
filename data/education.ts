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
    school: 'Syddansk Universitet',
    date: '2022 - 2026',
    education: 'B.Eng in Software Technology',
    description:
      'Since childhood, I have been fascinated by technology and programming. My earliest memory dates back to 2014–2015, when, at the age of 14–15, I developed a Tic-Tac-Toe game and published it on the Google Play Store through a teacher’s account.',
    badge: [
      'Software Engineering',
      'DevOps',
      'Cyber-Physical Systems',
      'OOP',
      'Web Technologies',
      'Data Management',
      'Algorithms and Data Structures',
      'Cybersecurity',
      'Operating Systems'
    ]
  },
  {
    id: 2,
    school: 'Zealand Academy',
    date: '2018 - 2020',
    education: 'AP Marketing Management',
    description:
      'I have always had an entrepreneur mindset. As a child, I bought cheap stuff from abroad and resold them with 300-500% profit. At 18, I ran "Danish Repair Company" repairing and reselling iPhones. Today I run my hobby project TeoriOnline.dk while finishing my Software Engineering degree.',
    badge: [
      'International Marketing',
      'Economics',
      'Sales',
      'Marketing Communication',
      'Busniess Law',
      'Entrepreneurship',
      'Supply Chain Management',
      'Innovation'
    ]
  },
  {
    id: 3,
    school: 'Zealand Academy',
    date: '2019 - 2019',
    education: 'Exchange Program in USA',
    description:
      'As part of my Marketing Management education, I attended a 2-week exchange program in the Midwest, USA. The program included scheduled instruction and experiential activities at Kirkwood Community College in Cedar Rapids, Iowa, including experiences in Chicago and Minneapolis.',
    badge: [
      'Business',
      'Industry',
      'Welfare System',
      'Marketing',
      'Immigration ',
      'Politics',
      'Culture',

      'Native Americans',
      'Sports',
      'Amish/Kalona experience',
      'Diversity'
    ]

    // badge: ['Busniess and Industry Visits', 'American Classroom Activities and Interaction with Students', "The American Welfare System", "The American Consumer (Sales, Branding, and Marketing)", "A Nation of Immigrants and Diversity in America (Native Americans, the Amish/Kalona experience", "American Politics", "Sporting Event"]
  }
]
