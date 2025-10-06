import { Container, Section } from '../ds'
import { Separator } from '../ui/separator'
import {
  backendTechnologies,
  databaseTechnologies,
  cloundAndDevOpsTechnologies,
  frontendTechnologies
} from '@/data/technologies'
import Image from 'next/image'
import { Marquee } from '@/components/ui/marquee'
import { AnimatedShinyText } from '@/components/ui/animated-shiny-text'
import { cn } from '@/lib/utils'
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react'

function TechnologiesNew() {
  const technologyCategories = [
    {
      title: 'Frontend',
      technologies: frontendTechnologies
    },
    {
      title: 'Backend',
      technologies: backendTechnologies
    },
    {
      title: 'Database',
      technologies: databaseTechnologies
    }
    // {
    //   title: 'Tools',
    //   technologies: cloundAndDevOpsTechnologies
    // }
  ]

  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-semibold'>Technologies 💡</h2>
        <Separator orientation='horizontal' />
        <p className='text-base'>Always learning. Always building.</p>

        {technologyCategories.map((category) => (
          <div
            key={category.title}
            className='z-10 mt-2 flex items-center justify-center'
          >
            <div
              className={cn(
                'group border-border bg-muted text-foreground hover:bg-accent dark:hover:bg-accent hover:cursor-pointer-none flex w-full flex-row border text-base transition-all ease-in'
              )}
            >
              <AnimatedShinyText className='inline-flex w-30 shrink-0 items-center justify-between px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
                <span className='text-sm'>{category.title}</span>
                <ArrowRightIcon className='size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              </AnimatedShinyText>

              <Marquee reverse={true}>
                {category.technologies.map((technology) => (
                  <Image
                    key={technology.technology}
                    src={technology.img}
                    alt={technology.technology}
                    width={100}
                    height={100}
                    className={cn('h-10 w-10', technology.className)}
                  />
                ))}
              </Marquee>
            </div>
          </div>
        ))}
      </Container>
    </Section>
  )
}

export default TechnologiesNew
