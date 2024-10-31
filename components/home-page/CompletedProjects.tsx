import React from 'react'
import { Container, Box } from 'components/craft'

function CompletedProjects() {
  const completedProjectsData = [
    {
      title: 'project: todo list',
      description:
        'a task management app that allows users to add, edit, and delete tasks.',
      link: 'https://github.com/gokm8/todo'
    },
    {
      title: 'project: tic-tac-toe',
      description:
        "a classic two-player game where users take turns placing X's and O's on a grid.",
      link: 'https://github.com/gokm8/tictactoe'
    },
    {
      title: 'project: quiz-app',
      description:
        'a quiz app with various topics and multiple-choice questions.',
      link: 'https://github.com/gokm8/quiz-app'
    }
  ]

  return (
    <Container>
      <h2 className='mb-3.5'>completed projects 🏗️</h2>

      {/* cards */}
      <article>
        <Box cols={1} className='sm:grid-cols-2' gap={4}>
          {completedProjectsData.map((project, index) => (
            <a
              key={index}
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
          ))}
        </Box>
      </article>
    </Container>
  )
}

export default CompletedProjects
