import { technologyGroups } from '@/data/technologies'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container, Section } from '../ds'
import SectionHeading from './SectionHeading'

function TechnologiesNew() {
  return (
    <Section>
      <Container>
        <SectionHeading>Technologies</SectionHeading>
        <p className='text-muted-foreground mb-6 text-[0.9375rem]'>
          Always learning. Always building.
        </p>

        <dl className='flex flex-col gap-5'>
          {technologyGroups.map((group) => (
            <div
              key={group.id}
              className='grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-4'
            >
              <dt className='text-primary pt-1 text-xs tracking-wide'>
                {group.category}
              </dt>
              <dd>
                <ul className='flex flex-row flex-wrap gap-x-5 gap-y-2.5'>
                  {group.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className='flex flex-row items-center gap-2 text-sm'
                    >
                      <Image
                        src={technology.img}
                        alt=''
                        aria-hidden='true'
                        width={40}
                        height={40}
                        className={cn('size-5 shrink-0', technology.className)}
                      />
                      {technology.name}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  )
}

export default TechnologiesNew
