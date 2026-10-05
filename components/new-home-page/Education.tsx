import { educationalData } from '@/data/education'
import { Section, Container } from '../ds'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import SectionHeading from './SectionHeading'

function EducationNew() {
  return (
    <Section>
      <Container>
        <SectionHeading>Education</SectionHeading>

        {educationalData.map((data) => (
          <Card key={data.id} className='mb-4 last:mb-0'>
            <CardHeader>
              <div className='flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-1'>
                <h3 className='text-muted-foreground text-xs tracking-wide'>
                  {data.school}
                </h3>
                <p className='text-muted-foreground shrink-0 text-xs tracking-wide'>
                  {data.date}
                </p>
              </div>
              <p className='text-base font-semibold'>{data.education}</p>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground max-w-[68ch] text-[0.9375rem] leading-relaxed'>
                {data.description}
              </p>
            </CardContent>
            <CardFooter className='flex flex-row flex-wrap gap-1.5'>
              {data.badge.map((badge) => (
                <Badge
                  key={badge}
                  variant='outline'
                  className='text-muted-foreground'
                >
                  {badge}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </Container>
    </Section>
  )
}

export default EducationNew
