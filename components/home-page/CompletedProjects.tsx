import React, { memo } from 'react'
import { Container, Box } from 'components/craft'
import { completedProjectsData } from 'data/projects'

const CompletedProjectCard = memo(({ title, description, githubLink }: { title: string; description: string; githubLink?: string }) => (
  <div className='project-card'>
    <h3 className='project-title'>
      {title}
    </h3>
    <p className='mb-3 text-justify hyphens-auto'>{description}</p>
    {githubLink && (
      <a
        href={githubLink}
        target='_blank'
        rel='noopener noreferrer'
        className='link text-xs underline underline-offset-2'
      >
        View on GitHub
      </a>
    )}
  </div>
))

CompletedProjectCard.displayName = 'CompletedProjectCard'

function CompletedProjects() {
  return (
    <Container>
      <h2>learning projects 🎓</h2>
      <hr />

      <Box cols={1} className='sm:grid-cols-2' gap={4}>
        {completedProjectsData.map((project) => (
          <CompletedProjectCard 
            key={project.title} 
            title={project.title} 
            description={project.description} 
            githubLink={project.githubLink} 
          />
        ))}
      </Box>
    </Container>
  )
}

export default memo(CompletedProjects)
