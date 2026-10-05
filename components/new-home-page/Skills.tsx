import { skillsData } from '@/data/skills'
import { Container, Section } from '../ds'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'
import { Separator } from '../ui/separator'

function SkillsNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Skills 🧰</h2>
        <Separator orientation='horizontal' />

        <Card className='mt-4'>
          <CardContent className='flex flex-col gap-4'>
            {skillsData.map((category) => (
              <div key={category.id} className='flex flex-col gap-2'>
                <h3 className='text-muted-foreground text-sm font-medium'>
                  {category.category}
                </h3>
                <div className='flex flex-row flex-wrap gap-2'>
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant='secondary'>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}

export default SkillsNew
