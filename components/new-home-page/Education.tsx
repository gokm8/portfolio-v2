import { Section } from '../ds'
import { Container } from '../ds'
import { Separator } from '../ui/separator'
import { educationalData } from 'data/education'

function EducationNew() {
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-2xl font-bold'>education 🏛️</h2>
        <Separator orientation='horizontal' />
        {educationalData.map((data) => (
          <div key={data.id} className='mb-6 last:mb-0'>
            <div className='flex flex-row justify-between'>
              <h3 className='text-medium text-muted-foreground flex-shrink-0 text-sm'>
                {data.school}
              </h3>
              <p className='text-muted-foreground flex-shrink-0 text-sm'>
                {data.date}
              </p>
              {/* <div className='mx-2 mb-1 flex-1 border-b border-dotted border-gray-300'></div> */}
            </div>
            <p className='text-base'>{data.education}</p>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default EducationNew
