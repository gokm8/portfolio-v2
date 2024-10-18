import React from 'react'
import { Container } from 'components/craft'

function CompletedProjects() {
  const completedProjectsData = [
    {
      title: 'project: todo list',
      description:
        'A task management app that allows users to add, edit, and delete tasks.',
      link: 'https://github.com/gokm8/todo'
    },
    {
      title: 'project: tic-tac-toe',
      description:
        "A classic two-player game where users take turns placing X's and O's on a grid.",
      link: 'https://github.com/gokm8/tictactoe'
    }
  ]

  return (
    <Container>
      <h2 className='mb-3.5'>completed projects 🏗️</h2>

      {/* cards */}
      <article>
        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {completedProjectsData.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='project-card'
              >
                <h3 className='text-decoration-line: underline underline-offset-2'>
                  {project.title}
                </h3>
                <p>{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </Container>
  )
}

export default CompletedProjects
