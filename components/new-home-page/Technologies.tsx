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
  return (
    <Section className='bg-background'>
      <Container>
        <h2 className='text-h2'>technologies 💡</h2>
        <Separator orientation='horizontal' />
        <p className='text-body'>Always learning. Always building.</p>

        {/* Frontend */}
        <div className='z-10 mt-2 flex items-center justify-center'>
          <div
            className={cn(
              'group border-border bg-muted text-foreground hover:bg-accent dark:hover:bg-accent flex w-full flex-row border text-base transition-all ease-in hover:cursor-pointer'
            )}
          >
            <AnimatedShinyText className='inline-flex shrink-0 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <span className='text-caption'>✨ Frontend</span>
              <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedShinyText>

            {/* Frontend Technologies */}
            <Marquee reverse={true}>
              {frontendTechnologies.map((technology) => (
                <Image
                  key={technology.technology}
                  src={technology.img}
                  alt={technology.technology}
                  width={100}
                  height={100}
                  className='h-10 w-10'
                />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Backend */}
        <div className='z-10 mt-2 flex items-center justify-center'>
          <div
            className={cn(
              'group border-border bg-muted text-foreground hover:bg-accent dark:hover:bg-accent flex w-full flex-row border text-base transition-all ease-in hover:cursor-pointer'
            )}
          >
            <Marquee reverse={false}>
              {backendTechnologies.map((technology) => (
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

            <AnimatedShinyText className='inline-flex shrink-0 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <ArrowLeftIcon className='mr-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              <span className='text-caption'>Backend 💻</span>
            </AnimatedShinyText>
          </div>
        </div>

        {/* Database */}
        <div className='z-10 mt-2 flex items-center justify-center'>
          <div
            className={cn(
              'group border-border bg-muted text-foreground hover:bg-accent dark:hover:bg-accent flex w-full flex-row border text-base transition-all ease-in hover:cursor-pointer'
            )}
          >
            <AnimatedShinyText className='inline-flex shrink-0 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <span className='text-caption'>💾 Database</span>
              <ArrowRightIcon className='ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
            </AnimatedShinyText>

            <Marquee reverse={true}>
              {databaseTechnologies.map((technology) => (
                <Image
                  key={technology.technology}
                  src={technology.img}
                  alt={technology.technology}
                  width={100}
                  height={100}
                  className='h-10 w-10'
                />
              ))}
            </Marquee>
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div className='z-10 mt-2 flex items-center justify-center'>
          <div
            className={cn(
              'group border-border bg-muted text-foreground hover:bg-accent dark:hover:bg-accent flex w-full flex-row border text-base transition-all ease-in hover:cursor-pointer'
            )}
          >
            <Marquee reverse={false}>
              {cloundAndDevOpsTechnologies.map((technology) => (
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

            <AnimatedShinyText className='inline-flex shrink-0 items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
              <ArrowLeftIcon className='mr-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5' />
              <span className='text-caption'>Cloud & DevOps 🌩️</span>
            </AnimatedShinyText>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default TechnologiesNew
