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
import { FaGithub } from 'react-icons/fa'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Button } from '../ui/button'
import Image from 'next/image'
import { BorderBeam } from '../ui/border-beam'

const projectData = {
  title: 'qr-wedding-snap',
  description: 'ayserenas.dk',
  alt: 'QR Wedding Snap website preview image',
  image: '/completed_projects_section/project-ayserenas.dk.jpg',
  techStack: [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Vercel',
    'PostgreSQL',
    'Prisma',
    '...'
  ],
  link: 'https://ayserenas.dk',
  githubLink: 'https://github.com/gokmenozbayir/ayserenas.dk'
}

function CompletedProjectsNew() {
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-heading-md'>completed projects 🎓</h2>
        <Separator orientation='horizontal' />

        <Card className='relative overflow-hidden'>
          {/* Project title and website link */}
          <CardHeader>
            <CardTitle>
              <h3 className='text-heading-sm'>{projectData.title}</h3>
            </CardTitle>
            <CardDescription>{projectData.description}</CardDescription>
          </CardHeader>

          {/* Project image */}
          <CardContent>
            <Image
              src={projectData.image}
              alt={projectData.alt}
              width={1000}
              height={1000}
              className='h-auto w-full rounded-lg'
            />
          </CardContent>

          {/* Project tech stack and description */}
          <CardContent>
            <div className='text-tech-stack mb-3 flex flex-wrap gap-2'>
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className='bg-secondary text-secondary-foreground rounded px-2 py-1'
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className='text-body-sm'>
              When my good friend Renas Demir needed an easy way for wedding
              guests to share their photos, he asked if I could help.
            </p>
            <br />
            <p className='text-body-sm'>
              I built a custom site (ayserenas.dk) with QR codes on the tables -
              making it ...
            </p>
          </CardContent>

          {/* Button and Links */}
          <CardFooter className='text-caption flex flex-col gap-1'>
            <Button className='w-full'>Read more →</Button>
            <Separator orientation='horizontal' />
            <div className='flex h-5 w-full flex-row items-center gap-2'>
              <Link
                href='https://ayserenas.dk'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2'
              >
                view live site ↗
              </Link>
              <Separator orientation='vertical' />
              <Link
                href='https://github.com/gokmenozbayir/ayserenas.dk'
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
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
