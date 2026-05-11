import { Section, Container } from '../ds'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Separator } from '../ui/separator'
import { educationalData } from 'data/education'
import { Icon } from '../ui/evervault-card'
import { Badge } from '../ui/badge'

function EducationNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Education 🏛️</h2>
        <Separator orientation='horizontal' />

        {/* overflow-hidden on Card makes a differnt styling on the evervault */}
        {educationalData.map((data) => (
          <Card
            key={data.id}
            className='relative mt-4 mb-8 overflow-hidden last:mb-0'
          >
            <Icon
              className='text-muted-foreground absolute -top-3 -left-3 h-6 w-6'
              opacity={0.75}
            />
            <Icon
              className='text-muted-foreground absolute -bottom-3 -left-3 h-6 w-6'
              opacity={0.75}
            />
            <Icon
              className='text-muted-foreground absolute -top-3 -right-3 h-6 w-6'
              opacity={0.75}
            />
            <Icon
              className='text-muted-foreground absolute -right-3 -bottom-3 h-6 w-6'
              opacity={0.75}
            />
            <CardHeader>
              <div className='flex flex-row justify-between'>
                <h3 className='text-muted-foreground flex-shrink-0 text-sm font-medium'>
                  {data.school}
                </h3>
                <p className='text-muted-foreground flex-shrink-0 text-sm'>
                  {data.date}
                </p>
              </div>
              <p className='text-base font-semibold'>{data.education}</p>
            </CardHeader>
            <CardContent>
              <p className='text-muted-foreground text-base'>
                {data.description}
              </p>
            </CardContent>
            <CardFooter className='flex flex-row flex-wrap gap-2'>
              {data.badge.map((badge) => (
                <Badge key={badge} variant='secondary'>
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
