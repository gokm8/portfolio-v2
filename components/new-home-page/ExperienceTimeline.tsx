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
import { Separator } from '../ui/separator'

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
        <h2 className='text-2xl font-bold'>{title}</h2>
        <Separator />
        <Timeline defaultValue={1}>
          {items.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className='text-primary'>
                  {item.date}
                </TimelineDate>
                <TimelineTitle className='text-primary/90'>
                  {item.title}
                </TimelineTitle>
                <TimelineTitle className='text-primary/90'>
                  {item.company}
                </TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>

              {/* Location and optional live site link */}
              <TimelineContent className='text-muted-foreground flex flex-row flex-wrap items-center gap-2 text-xs'>
                <span>{item.location}</span>
                {item.link && (
                  <>
                    <span aria-hidden='true'>·</span>
                    <Link
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='hover:text-primary transition-colors'
                    >
                      {item.link.replace(/^https?:\/\//, '')} ↗
                    </Link>
                  </>
                )}
              </TimelineContent>

              <TimelineContent className='text-muted-foreground mt-2 mb-2 text-base'>
                {item.description}
              </TimelineContent>

              {item.points.length > 0 && (
                <TimelineContent className='text-muted-foreground pl-4 text-sm'>
                  <ul className='list-disc space-y-2'>
                    {item.points.map((point) => (
                      <li key={point}>
                        <p>{point}</p>
                      </li>
                    ))}
                  </ul>
                </TimelineContent>
              )}

              {item.badge.length > 0 && (
                <TimelineContent className='mt-4 flex flex-row flex-wrap gap-2'>
                  {item.badge.map((badge) => (
                    <Badge key={badge} variant='secondary'>
                      {badge}
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
