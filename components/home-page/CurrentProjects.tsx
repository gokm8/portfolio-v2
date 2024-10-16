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
      <h2 className='text-lg text-neutral-100'>current projects 🛠️</h2>
      <hr className='my-2.5 h-px border-0 bg-neutral-800' />

      <Box direction='col' gap={8}>
        {currentProjectsData.map((data, index) => (
          <Box key={index} direction='col' gap={1}>
            <h3 className='text-sm text-neutral-300'>{data.title}</h3>
            <p className='text-sm text-neutral-500'>{data.description}</p>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default CurrentProjects
