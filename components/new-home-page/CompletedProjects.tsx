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
import { BorderBeam } from '../ui/border-beam'
import { completedProjectsData } from 'data/completed-projects'

function CompletedProjectsNew() {
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-h2'>completed projects 🎓</h2>
        <Separator orientation='horizontal' />

        {completedProjectsData.map((project) => (
          <div key={project.id} className='mb-4'>
            <Card className='relative overflow-hidden'>
              {/* Project title and website link */}
              <CardHeader>
                <CardTitle>
                  <h3 className='text-h3'>{project.title}</h3>
                </CardTitle>
                <CardDescription className='text-caption'>
                  {project.link}
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
                      className='bg-secondary text-secondary-foreground hover:bg-secondary/90 text-caption px-2 py-1'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <p className='text-body'>{project.description}</p>
              </CardContent>

              {/* Button and Links */}
              <CardFooter className='flex flex-col gap-1'>
                <Button className='w-full'>Read more →</Button>
                <Separator orientation='horizontal' />
                <div className='text-caption flex h-5 w-full flex-row items-center gap-2'>
                  <Link
                    href={project.link || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2'
                  >
                    view live site ↗
                  </Link>
                  <Separator orientation='vertical' />
                  <Link
                    href={project.githubLink || ''}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-2'
                  >
                    view on github ↗
                  </Link>
                </div>
              </CardFooter>
              <BorderBeam
                duration={6}
                size={400}
                className='from-transparent via-red-500 to-transparent'
              />
              <BorderBeam
                duration={6}
                delay={3}
                size={400}
                borderWidth={2}
                className='from-transparent via-blue-500 to-transparent'
              />
            </Card>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
