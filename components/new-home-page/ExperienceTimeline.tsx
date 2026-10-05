import { splitDate } from '@/lib/utils'
import Link from 'next/link'
import { Container, Section } from '../ds'
import { Badge } from '../ui/badge'
import SectionHeading from './SectionHeading'

/** One row in the list. Experience and Education both map onto this. */
export interface TimelineEntry {
  date: string
  title: string
  /** Shown after the title in muted text, e.g. "@ TeoriOnline" */
  company?: string
  /** Meta line under the title: location, school, ... */
  location?: string
  link?: string
  description: string
  points?: string[]
  badge?: string[]
  volunteer?: boolean
}

interface ExperienceTimelineProps {
  title: string
  items: TimelineEntry[]
}

/**
 * Two-column list used for every dated section: dates in a narrow left
 * column, the entry on the right, rows separated by a hairline.
 */
export default function ExperienceTimeline({
  title,
  items
}: ExperienceTimelineProps) {
  return (
    <Section>
      <Container>
        <SectionHeading>{title}</SectionHeading>
        <ol className='divide-border divide-y'>
          {items.map((item) => {
            const { period, duration } = splitDate(item.date)
            const points = item.points ?? []
            const badges = item.badge ?? []

            return (
              <li
                key={`${item.title}-${item.date}`}
                className='grid gap-2 py-6 first:pt-0 last:pb-0 sm:grid-cols-[10rem_1fr] sm:gap-4'
              >
                <div className='flex flex-row flex-wrap gap-x-2 text-xs tracking-wide tabular-nums sm:flex-col sm:pt-1'>
                  <span className='text-primary'>{period}</span>
                  {duration && (
                    <span className='text-muted-foreground'>{duration}</span>
                  )}
                </div>

                <div className='min-w-0'>
                  <h3 className='text-base leading-snug font-semibold tracking-tight'>
                    {item.title}
                    {item.company && (
                      <span className='text-muted-foreground font-normal'>
                        {' '}
                        {item.company}
                      </span>
                    )}
                  </h3>

                  <div className='text-muted-foreground mt-1 flex flex-row flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-wide'>
                    {item.volunteer && <span>Volunteer</span>}
                    {item.location && <span>{item.location}</span>}
                    {item.link && (
                      <Link
                        href={item.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-primary focus-visible:ring-ring rounded-sm underline decoration-dotted underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                      >
                        {item.link.replace(/^https?:\/\/(www\.)?/, '')}
                      </Link>
                    )}
                  </div>

                  {/* The bullets already carry the description's content, so
                      show one or the other to keep each entry short. */}
                  {points.length > 0 ? (
                    <ul className='text-muted-foreground text-body mt-3 max-w-[68ch] list-disc space-y-1.5 pl-4'>
                      {points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-muted-foreground text-body mt-3 max-w-[68ch]'>
                      {item.description}
                    </p>
                  )}

                  {badges.length > 0 && (
                    <div className='mt-4 flex flex-row flex-wrap gap-1.5'>
                      {badges.map((badge) => (
                        <Badge key={badge} variant='secondary'>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}
