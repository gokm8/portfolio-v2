import { Section } from '../ds'
import { Container } from '../ds'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'
import { educationalData } from 'data/education'

function EducationNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Education 🏛️</h2>
        <Separator orientation='horizontal' />

        {educationalData.map((data) => (
          <Card key={data.id} className='mb-4 last:mb-0'>
            <CardContent>
              <div className='mb-1 flex flex-row justify-between'>
                <h3 className='text-medium text-muted-foreground flex-shrink-0 text-sm'>
                  {data.school}
                </h3>
                <p className='text-muted-foreground flex-shrink-0 text-sm'>
                  {data.date}
                </p>
              </div>
              <p className='text-base'>{data.education}</p>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Section>
  )
}

export default EducationNew
