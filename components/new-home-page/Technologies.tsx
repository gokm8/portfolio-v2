import { technologyGroups } from '@/data/technologies'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Container, Section } from '../ds'
import SectionHeading from './SectionHeading'

/**
 * Same two-column rhythm as the experience list: category label on the left,
 * logo chips on the right, rows separated by a hairline.
 */
function TechnologiesNew() {
  return (
    <Section>
      <Container>
        <SectionHeading>Technologies</SectionHeading>

        <dl className='divide-border divide-y'>
          {technologyGroups.map((group) => (
            <div
              key={group.id}
              className='grid gap-3 py-4 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-4'
            >
              <dt className='text-primary text-xs tracking-wide sm:pt-2'>
                {group.category}
              </dt>
              <dd>
                <ul className='flex flex-row flex-wrap gap-2'>
                  {group.technologies.map((technology) => (
                    <li
                      key={technology.name}
                      className='bg-card flex flex-row items-center gap-2 border px-2.5 py-1.5 text-sm'
                    >
                      <Image
                        src={technology.img}
                        alt=''
                        aria-hidden='true'
                        width={32}
                        height={32}
                        className={cn('size-4 shrink-0', technology.className)}
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
