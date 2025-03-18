import React, { memo } from 'react'
import { Container } from 'components/craft'
import { educationalData } from 'data/education'

const EducationCard = memo(({ school, date, education }: { school: string; date: string; education: string }) => (
  <div className='mb-8 last:mb-0'>
    <div className='flex flex-col justify-between sm:flex-row'>
      <h3>{school}</h3>
      <p className='mb-1.5 text-neutral-600 sm:text-left'>{date}</p>
    </div>
    <p>{education}</p>
  </div>
))

EducationCard.displayName = 'EducationCard'

function Education() {
  return (
    <Container>
      <h2>education 🏛️</h2>
      <hr />

      {educationalData.map((data) => (
        <EducationCard key={`${data.school}-${data.date}`} {...data} />
      ))}
    </Container>
  )
}

export default memo(Education)
