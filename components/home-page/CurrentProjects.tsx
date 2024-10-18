import React from 'react'
import { Container, Box } from 'components/craft'

function CurrentProjects() {
  const currentProjectsData = [
    {
      title: 'project: qr generator',
      description: "a simple tool to generate qr codes from text or url's."
    },
    {
      title: 'project: favicon generator',
      description: 'a tool to generate favicons for websites.'
    }
  ]

  return (
    <Container>
      <h2>current projects 🛠️</h2>
      <hr />

      <Box direction='col' gap={8}>
        {currentProjectsData.map((data, index) => (
          <Box key={index} direction='col' gap={1}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default CurrentProjects
