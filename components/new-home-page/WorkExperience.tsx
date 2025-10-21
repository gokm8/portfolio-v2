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
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Balancer } from 'react-wrap-balancer'

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
    firstPoint: undefined,
    secondPoint: undefined,
    thirdPoint: undefined,
    fourthPoint: undefined,
    fifthPoint: undefined,
    recommendation: {
      name: 'Thomas Nygaard Hamann',
      image: '/ThomasNygaardIcon.jpg',
      fallback: 'TN',
      company: 'A:gain [again]',
      position: 'CEO',
      description:
        "During Gøkmen's internship at a:gain, he contributed to both frontend and backend development. He showed initiative and took ownership, particularly when working on tasks with clear purpose or impact. With a solid technical foundation and a collaborative approach, he has potential for growth in Software Engineering roles."
    }
  },
  {
    id: 2,
    date: 'Sep. 2021 - Sep. 2022 (1 year, 1 month)',
    title: 'Account Manager',
    city: 'Herlev, Denmark',
    company: '@ Verifone A/S',
    description:
      'Account Management and strategic sales for Small and Medium-sized Enterprises (SMEs), maintaining growth and long-term partnerships',
    firstPoint: undefined,
    secondPoint: undefined,
    thirdPoint: undefined,
    fourthPoint: undefined,
    fifthPoint: undefined,
    recommendation: {
      name: 'Ralf Makne Johansen',
      image: '/RalfMakneIcon.jpg',
      fallback: 'RM',
      company: 'Verifone A/S',
      position: 'Team Leader ',
      description:
        'Gøkmen quickly established himself as one of the most reliable and results-oriented members of the team. He combines a strong commercial mindset with genuine curiosity for technology, which allowed him to translate complex payment solutions into clear business value for clients. His structured approach, calm professionalism, and ability to build long-term relationships made him stand out. I would gladly work with him again and can highly recommend him for any future role that demands both strategic thinking and hands-on execution.'
    }
  },
  {
    id: 3,
    date: 'Jan. 2021 - Aug. 2021 (8 months)',
    title: 'Account Manager',
    city: 'Copenhagen Ø, Denmark',
    company: '@ OrderYOYO A/S',
    description:
      'Account Manager at OrderYOYO A/S, managing a diverse portfolio of SME clients through consultative sales and relationship management',
    firstPoint: undefined,
    secondPoint: undefined,
    thirdPoint: undefined,
    fourthPoint: undefined,
    fifthPoint: undefined,
    recommendation: {
      name: 'Andreas Graulund Koustrup',
      image: '/AndreasGraulundIcon.jpg',
      fallback: 'AG',
      company: 'OrderYOYO A/S',
      position: 'Senior Inhouse Account Manager',
      description:
        'I’ve had the pleasure of working with Gøkmen for the past six months. He’s a well-liked colleague, not only because of his strong professional skills, but also because he always takes the time to offer support or good advice when needed. Last but not least, Gøkmen consistently delivers high-quality results, so you always know you’re in good hands. I can only give Gøkmen my highest recommendation.'
    }
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
              <TimelineContent className='text-muted-foreground pl-4 text-sm'>
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
              {item.recommendation && (
                <TimelineContent className='text-muted-foreground mt-2 mb-2 text-sm'>
                  <div className='flex flex-col gap-2'>
                    <p className='text-sm font-bold underline'>
                      Recommendation
                    </p>
                    <div className='flex flex-row items-center gap-2'>
                      <Avatar className='size-12 rounded-full'>
                        <AvatarImage src={item.recommendation.image} />
                        <AvatarFallback>
                          {item.recommendation.fallback}
                        </AvatarFallback>
                      </Avatar>
                      <div className='flex flex-col'>
                        <p className='text-sm font-bold'>
                          {item.recommendation.name}
                        </p>
                        <p className='text-sm'>
                          {item.recommendation.position} @{' '}
                          {item.recommendation.company}
                        </p>
                      </div>
                    </div>
                    <p className='italic'>
                      <Balancer>
                        &quot;{item.recommendation.description}&quot;
                      </Balancer>
                    </p>
                  </div>
                </TimelineContent>
              )}
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  )
}
