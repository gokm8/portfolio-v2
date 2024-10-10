import React from 'react'
import HoverEffect from '@/ui/CardHover'

function CompletedProjects() {
  const completedProjectsData = [
    {
      title: 'project: todo list',
      description:
        'a task management app that allows users to add, edit, and delete tasks.',
      img: 'todoProject'
    },
    {
      title: 'project: tic-tac-toe',
      description:
        "a classic two-player game where us ers take turns placing X's and O's on a grid.",
      img: 'ticTacToe'
    }
  ]

  return (
    <section aria-labelledby='completed-projects-section'>
      <h2 className='text-lg text-neutral-100'>completed projects 🏗️</h2>
      {completedProjectsData.map((project, index) => (
        <HoverEffect key={index} project={project} />
      ))}
    </section>
  )
}

export default CompletedProjects
