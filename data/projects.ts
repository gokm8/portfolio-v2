export interface Project {
  title: string
  description: string
  link?: string
}

export const currentProjectsData: Project[] = [
  {
    title: 'project: teorionline.dk',
    description: 'a full stack website that provides online courses.'
  },
  {
    title: 'project: qr generator',
    description: "a simple tool to generate qr codes from text or url's."
  },
  {
    title: 'project: favicon generator',
    description: 'a tool to generate favicons for websites.'
  }
]

export const completedProjectsData: Project[] = [
  {
    title: 'project: todo list',
    description: 'a task management app that allows users to add, edit, and delete tasks.',
    link: 'https://github.com/gokm8/todo'
  },
  {
    title: 'project: tic-tac-toe',
    description: "a classic two-player game where users take turns placing X's and O's on a grid.",
    link: 'https://github.com/gokm8/tictactoe'
  },
  {
    title: 'project: quiz-app',
    description: 'a quiz app with various topics and multiple-choice questions.',
    link: 'https://github.com/gokm8/quiz-app'
  }
] 