import React from 'react'
import { Container, Box } from 'components/craft'

function Education() {
  const educationalData = [
    {
      school: 'university of southern denmark, sdu',
      date: 'sep. 2022 - feb. 2026',
      education: 'bachelor of engineering, software technology'
    },
    {
      school: 'zealand academy of technologies and business',
      date: 'sep. 2018 - sep. 2020',
      education: 'ap graduate in marketing management'
    },
    {
      school: 'zealand academy of technologies and business',
      date: 'okt. 2019 - okt. 2019',
      education: 'exchange program in midwest, usa'
    }
  ]

  return (
    <Container>
      <h2 className='text-lg text-neutral-100'>education 🏛️</h2>
      <hr className='my-2.5 h-px border-0 bg-neutral-800' />

      {/* educational data */}
      {educationalData.map((data, index) => (
        <Box key={index} className='mb-8 last:mb-0' direction='col' gap={1}>
          <Box direction={{ sm: 'col', md: 'row' }} className='justify-between'>
            <h3 className='text-sm text-neutral-300'>{data.school}</h3>
            <p className='mb-1.5 text-xs text-neutral-600 sm:text-left'>
              {data.date}
            </p>
          </Box>
          <p className='text-sm text-neutral-500'>{data.education}</p>
        </Box>
      ))}
    </Container>
  )
}

export default Education
