import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle
} from '@/components/ui/timeline'
import { type Experience } from '@/data/work-experience'
import Link from 'next/link'
import { Container, Section } from '../ds'
import { Badge } from '../ui/badge'
import SectionHeading from './SectionHeading'

interface ExperienceTimelineProps {
  title: string
  items: Experience[]
}

export default function ExperienceTimeline({
  title,
  items
}: ExperienceTimelineProps) {
  return (
    <Section>
      <Container>
        <SectionHeading>{title}</SectionHeading>
        <Timeline defaultValue={1}>
          {items.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                {/* Neutral rule: the accent is reserved for the indicator and
                    the date, so three full-height orange bars don't dominate. */}
                <TimelineSeparator className='bg-border' />
                <TimelineDate className='text-primary tracking-wide'>
                  {item.date}
                </TimelineDate>
                <TimelineTitle className='text-base font-semibold'>
                  {item.title}{' '}
                  <span className='font-normal'>{item.company}</span>
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>

              {/* Location and optional live site link */}
              <TimelineContent className='text-muted-foreground flex flex-row flex-wrap items-center gap-x-4 gap-y-1 text-xs tracking-wide'>
                <span>{item.location}</span>
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
              </TimelineContent>

              <TimelineContent className='text-muted-foreground mt-3 max-w-[68ch] text-[0.9375rem] leading-relaxed'>
                {item.description}
              </TimelineContent>

              {item.points.length > 0 && (
                <TimelineContent className='text-muted-foreground mt-3 pl-4 text-sm leading-relaxed'>
                  <ul className='list-disc space-y-1.5'>
                    {item.points.map((point) => (
                      <li key={point}>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </TimelineContent>
              )}

              {(item.badge.length > 0 ||
                (item.competencies?.length ?? 0) > 0) && (
                <TimelineContent className='mt-4 flex flex-row flex-wrap gap-1.5'>
                  {item.badge.map((badge) => (
                    <Badge key={badge} variant='secondary'>
                      {badge}
                    </Badge>
                  ))}
                  {item.competencies?.map((competency) => (
                    <Badge
                      key={competency}
                      variant='outline'
                      className='text-muted-foreground'
                    >
                      {competency}
                    </Badge>
                  ))}
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}
