import React from 'react'

function CompletedProjects() {
  const completedProjectsData = [
    {
      title: 'project: todo list',
      description:
        'A task management app that allows users to add, edit, and delete tasks.',
      link: 'https://example.com/todo'
    },
    {
      title: 'project: tic-tac-toe',
      description:
        "A classic two-player game where users take turns placing X's and O's on a grid.",
      link: 'https://example.com/tictactoe'
    }
  ]

  return (
    <section aria-labelledby='completed-projects-section'>
      <h2 className='mb-3.5 text-lg text-neutral-100'>completed projects 🏗️</h2>

      {/* cards */}
      <article>
        <ul className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          {completedProjectsData.map((project, index) => (
            <li key={index}>
              <a
                href={project.link}
                className='block h-full rounded-sm border border-neutral-700 p-4 hover:border-neutral-600'
              >
                <strong className='mb-1.5 text-sm text-neutral-300'>
                  {project.title}
                </strong>

                <p className='mt-1.5 text-sm text-neutral-500'>
                  {project.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}

export default CompletedProjects
