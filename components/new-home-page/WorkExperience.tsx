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
    date: 'Feb. 2025 - Jun. 2025 (5 months)',
    title: 'Software Engineer Intern',
    city: 'Copenhagen, Denmark',
    company: '@ a:gain [again]',
    companyLogo: '/again.svg',
    description:
      'Software Engineer Intern at a:gain [again] as part of my education, contributing to data automation, API development, CRM integration, and cross-functional collaboration',
    firstPoint: 'Automated data pipeline via Azure SQL Database',
    secondPoint: 'Developed Environmental Calculator with REST API',
    thirdPoint: 'Integrated HubSpot CRM with lead generation',
    fourthPoint: 'Implemented Google Maps API integration',
    fifthPoint: 'Collaborated with cross-functional stakeholders'
  },
  {
    id: 2,
    date: 'Sep. 2021 - Sep. 2022 (1 year, 1 month)',
    title: 'Account Manager',
    city: 'Herlev, Denmark',
    company: '@ Verifone A/S',
    description:
      'Account Management and strategic sales for Small and Medium-sized Enterprises (SMEs), maintaining growth and long-term partnerships',
    firstPoint: 'Established long-term partnerships with SMEs',
    secondPoint: 'Exceeded sales targets by 100% through strategic outreach',
    thirdPoint: 'Achieved "Salesman of the Month" recognition'
  },
  {
    id: 3,
    date: 'Jan. 2021 - Aug. 2021 (8 months)',
    title: 'Account Manager',
    city: 'Copenhagen Ø, Denmark',
    company: '@ OrderYOYO A/S',
    description:
      'Account Manager at OrderYOYO A/S, managing a diverse portfolio of SME clients through consultative sales and relationship management',
    firstPoint: 'Managed portfolio of 100+ SMEs',
    secondPoint: 'Relationship building and client maintenance',
    thirdPoint: 'Streamlined sales workflows with team collaboration'
  }
]

export default function WorkExperienceNew() {
  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Work Experience 💼</h2>
        <Separator />
        <Timeline defaultValue={2}>
          {items.map((item) => (
            <TimelineItem key={item.id} step={item.id}>
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineTitle>{item.company}</TimelineTitle>
                <TimelineIndicator />
              </TimelineHeader>

              <TimelineContent className='mt-2 mb-2'>
                {item.description}
              </TimelineContent>
              <TimelineContent className='pl-4'>
                <ul className='list-disc space-y-2'>
                  {item.firstPoint && (
                    <li>
                      <p>{item.firstPoint}</p>
                    </li>
                  )}
                  {item.secondPoint && (
                    <li>
                      <p>{item.secondPoint}</p>
                    </li>
                  )}
                  {item.thirdPoint && (
                    <li>
                      <p>{item.thirdPoint}</p>
                    </li>
                  )}
                  {item.fourthPoint && (
                    <li>
                      <p>{item.fourthPoint}</p>
                    </li>
                  )}
                  {item.fifthPoint && (
                    <li>
                      <p>{item.fifthPoint}</p>
                    </li>
                  )}
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}
