import Link from 'next/link'
import { Container, Section } from '../ds'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { completedProjectsData } from 'data/completed-projects'
import { ShineBorder } from '../ui/shine-border'

function CompletedProjectsNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Projects 💻</h2>
        <Separator orientation='horizontal' />
        {completedProjectsData.map((project) => (
          <div key={project.id} className='mb-4'>
            <Card className='relative overflow-hidden'>
              <ShineBorder shineColor={['#A855F7', '#FF5E9A', '#ff6900']} />

              {/* Project title and website link */}
              <CardHeader>
                <CardDescription>
                  <p className='text-muted-foreground text-sm'>
                    {project.link}
                  </p>
                </CardDescription>
                <CardTitle>
                  <h3 className='text-xl'>{project.title}</h3>
                </CardTitle>
              </CardHeader>

              {/* Project tech stack and description */}
              <CardContent>
                <p className='text-base'>{project.description}</p>
              </CardContent>

              {/* Button and Links */}
              <CardFooter className='flex flex-col gap-1'>
                <Button className='w-full' asChild>
                  <Link href={project.readMoreLink || ''}>Read more →</Link>
                </Button>
                <Separator orientation='horizontal' />
                <div className='flex h-5 w-full flex-row items-center gap-2 text-sm'>
                  <Link
                    href={project.link || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary flex items-center gap-2'
                  >
                    view live site ↗
                  </Link>
                  <Separator orientation='vertical' />
                  <Link
                    href={project.githubLink || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-muted-foreground hover:text-primary flex items-center gap-2'
                  >
                    view on github ↗
                  </Link>
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
