import React, { memo } from 'react'
import { Container, Box } from 'components/craft'
import { currentProjectsData } from 'data/projects'

const ProjectCard = memo(({ title, description }: { title: string; description: string }) => (
  <Box direction='col' gap={1}>
    <h3>{title}</h3>
    <p>{description}</p>
  </Box>
))

ProjectCard.displayName = 'ProjectCard'

function CurrentProjects() {
  return (
    <Container>
      <h2>current projects 🛠️</h2>
      <hr />

      <Box direction='col' gap={8}>
        {currentProjectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </Box>
    </Container>
  )
}

export default memo(CurrentProjects)
