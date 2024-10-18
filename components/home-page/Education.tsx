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
      <h2>education 🏛️</h2>
      <hr />

      {/* educational data */}
      {educationalData.map((data, index) => (
        <div key={index} className='mb-8 last:mb-0'>
          <div className='flex flex-col justify-between sm:flex-row'>
            <h3>{data.school}</h3>
            <p className='mb-1.5 text-neutral-600 sm:text-left'>{data.date}</p>
          </div>
          <p>{data.education}</p>
        </div>
      ))}
    </Container>
  )
}

export default Education
