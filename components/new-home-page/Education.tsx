import { Section } from '../ds'
import { Container } from '../ds'
import { Separator } from '../ui/separator'
import { educationalData } from 'data/education'

function EducationNew() {
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-h2'>education 🏛️</h2>
        <Separator orientation='horizontal' />
        {educationalData.map((data) => (
          <div key={data.id} className='mb-6 last:mb-0'>
            <div className='flex flex-col justify-between'>
              <h3 className='text-caption flex-shrink-0'>{data.school}</h3>
              <p className='text-caption flex-shrink-0'>{data.date}</p>
              {/* <div className='mx-2 mb-1 flex-1 border-b border-dotted border-gray-300'></div> */}
            </div>
            <p className='text-body font-semibold'>{data.education}</p>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default EducationNew
