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
import Image from 'next/image'
import { completedProjectsData } from 'data/completed-projects'

function CompletedProjectsNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Projects 💻</h2>
        <Separator orientation='horizontal' />
        {completedProjectsData.map((project) => (
          <div key={project.id} className='mb-4'>
            <Card className='relative overflow-hidden'>
              {/* Project title and website link */}
              <CardHeader>
                <CardTitle>
                  <h3 className='text-xl'>{project.title}</h3>
                </CardTitle>
                <CardDescription>
                  <p className='text-muted-foreground text-sm'>
                    {project.link}
                  </p>
                </CardDescription>
              </CardHeader>

              {/* Project image */}
              <CardContent>
                <Image
                  src={project.image || ''}
                  alt={project.alt}
                  width={1000}
                  height={1000}
                  className='h-auto w-full rounded-lg'
                />
              </CardContent>

              {/* Project tech stack and description */}
              <CardContent>
                <div className='mb-3 flex flex-wrap gap-2'>
                  {project.techStack?.map((tech, index) => (
                    <span
                      key={index}
                      className='bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground px-2 py-1 text-sm transition-colors'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className='text-base'>{project.description}</p>
              </CardContent>

              {/* Button and Links */}
              <CardFooter className='flex flex-col gap-1'>
                <Button className='w-full'>Read more →</Button>
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
