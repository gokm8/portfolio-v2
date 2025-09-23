import { Section } from '../ds'
import { Container } from '../ds'
import { Separator } from '../ui/separator'
import { Card, CardHeader, CardTitle, CardDescription } from '../ui/card'
import { CardContent } from '../ui/card'

const educationData = [
  {
    id: 1,
    school: 'University of Southern Denmark',
    date: '2022 - 2026',
    education: 'B.Eng in Software Technology'
  },
  {
    id: 2,
    school: 'Zealand Academy',
    date: '2018 - 2020',
    education: 'AP Graduate in Marketing Management'
  },
  {
    id: 3,
    school: 'Zealand Academy',
    date: '2019 - 2019',
    education: 'Exchange Program in Midwest, USA'
  }
]

function EducationNew() {
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-heading-md'>education 🏛️</h2>
        <Separator orientation='horizontal' />
        {educationData.map((data) => (
          <div key={data.id} className='mb-2 last:mb-0'>
            <div className='flex items-end justify-between font-bold'>
              <h3 className='text-body-sm flex-shrink-0'>{data.school}</h3>
              <div className='mx-2 mb-1 flex-1 border-b border-dotted border-gray-300'></div>
              <p className='text-body-sm flex-shrink-0'>{data.date}</p>
            </div>
            <p className='text-body-sm'>{data.education}</p>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default EducationNew
