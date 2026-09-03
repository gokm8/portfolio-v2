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
import { Container, Section } from '../ds'
import { Separator } from '../ui/separator'

const items = [
  {
    id: 1,
    date: 'Feb. 2025 - Present',
    title: 'External Consultant',
    company: '@ SYC',
    description:
      'External consultant developing modular React components and API integrations for an e-learning SaaS platform, with responsibility for software architecture and design.',
    points: [
      'Developed modular React components with a focus on reusability',
      'Designed and implemented API endpoints for integration with external systems',
      'Responsible for the software architecture and design of an e-learning SaaS platform'
    ]
  },
  {
    id: 2,
    date: 'Feb. 2025 - Present',
    title: 'Founder',
    company: '@ TeoriOnline',
    description:
      'Founder of TeoriOnline.dk, a digital learning platform for preparing the Danish driving theory test with theory materials, practice exams, and progress tracking.',
    points: []
  },
  {
    id: 3,
    date: 'Sep. 2023 - Feb. 2026 (2 yrs, 6 mos)',
    title: 'Junior Software Engineer',
    company: '@ a:gain',
    description:
      'Junior Software Engineer developing and maintaining cloud-based solutions in Microsoft Azure, with APIs in C#/.NET, React frontends, and automated ETL workflows.',
    points: [
      'Troubleshooting, testing, and automation of data flows',
      'Development and maintenance of cloud-based solutions using Microsoft Azure',
      'Cross-functional collaboration with designers, product owners, and other teams',
      'Development of APIs in C#/.NET, React frontends, and automated ETL workflows',
      'Participation in client meetings and discussions about solutions and requirements'
    ]
  }
]

export default function WorkExperienceNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Work Experience 💼</h2>
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
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}
