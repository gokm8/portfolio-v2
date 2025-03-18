import React, { memo } from 'react'
import { Container, Box } from 'components/craft'
import { completedProjectsData } from 'data/projects'

const CompletedProjectCard = memo(({ title, description, link }: { title: string; description: string; link: string }) => (
  <a
    href={link}
    target='_blank'
    rel='noopener noreferrer'
    className='project-card'
  >
    <h3 className='text-decoration-line: underline underline-offset-2'>
      {title}
    </h3>
    <p>{description}</p>
  </a>
))

CompletedProjectCard.displayName = 'CompletedProjectCard'

function CompletedProjects() {
  return (
    <Container>
      <h2 className='mb-3.5'>completed projects 🏗️</h2>

      <article>
        <Box cols={1} className='sm:grid-cols-2' gap={4}>
          {completedProjectsData.map((project) => 
            project.link ? (
              <CompletedProjectCard 
                key={project.title} 
                title={project.title} 
                description={project.description} 
                link={project.link} 
              />
            ) : null
          )}
        </Box>
      </article>
    </Container>
  )
}

export default memo(CompletedProjects)
