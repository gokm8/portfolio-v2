'use client'

import { Container, Section } from '../ds'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '../ui/card'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { HyperText } from '../ui/hyper-text'
import { BorderBeam } from '../ui/border-beam'
import { TextLoop } from '../ui/text-loop'
import { toast } from 'sonner'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

const socialMediaLogos = [
  {
    alt: 'linkedin',
    href: 'https://www.linkedin.com/in/gokmenozbayir/',
    icon: FaLinkedin
  },
  {
    alt: 'github',
    href: 'https://github.com/gokm8',
    icon: FaGithub
  }
]

function IntroductionNew() {
  const [copy] = useCopyToClipboard()

  return (
    <Section>
      <Container>
        <Card className='relative overflow-hidden'>
          <CardHeader>
            {/* Avatar + Name */}
            <div className='flex flex-row items-center'>
              <Avatar className='mr-3 size-12 sm:size-14'>
                <AvatarImage
                  src='https://avatars.githubusercontent.com/u/107099606?v=4'
                  alt='@gokmenozbayir'
                />
                <AvatarFallback>GØ</AvatarFallback>
              </Avatar>
              <CardTitle>
                <h1 className='text-2xl tracking-tight sm:text-4xl'>
                  <HyperText>Gøkmen Øzbayir</HyperText>
                </h1>
                <div className='flex flex-row gap-2'>
                  <p className='text-muted-foreground text-sm'>I am a</p>
                  <TextLoop className='text-primary text-sm'>
                    <p>Fullstack Software Engineer</p>
                    <p>Software Architect</p>
                    <p>Problem Solver</p>
                    <p>Team Player</p>
                    <p>Lifelong Learner</p>
                  </TextLoop>
                </div>
              </CardTitle>
            </div>

            <CardDescription className='mt-2'>
              <p className='max-w-[62ch] text-[0.9375rem] leading-relaxed'>
                Software Engineer with experience in fullstack software
                development, software design and architecture. I work structured
                and take ownership of both independent tasks and solutions
                developed in collaboration with teams and cross-functional
                stakeholders.
              </p>
            </CardDescription>
          </CardHeader>

          {/* Contact info (Social media icons and email) */}
          <CardContent>
            <div className='flex flex-row items-center justify-between gap-2'>
              <div className='flex flex-row items-center justify-start gap-3'>
                {socialMediaLogos.map((logo) => (
                  <Link
                    href={logo.href}
                    key={logo.alt}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`${logo.alt} profile`}
                    className='text-muted-foreground hover:text-primary focus-visible:ring-ring rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                  >
                    <logo.icon className='size-4' />
                  </Link>
                ))}
                <button
                  type='button'
                  aria-label='Copy email address to clipboard'
                  onClick={() => {
                    copy('gozbayir@hotmail.com')
                    toast('Email has been copied to clipboard', {
                      description: 'You can email me regarding any inquiries'
                    })
                  }}
                  className='text-muted-foreground hover:text-primary focus-visible:ring-ring cursor-pointer rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                >
                  <FaEnvelope className='size-4' />
                </button>
              </div>
              <p className='text-muted-foreground flex flex-row items-center gap-1 text-xs'>
                <FaMapMarkerAlt className='size-3' />
                Copenhagen, Denmark
              </p>
            </div>
          </CardContent>
          <BorderBeam duration={6} size={120} />
        </Card>
      </Container>
    </Section>
  )
}

export default IntroductionNew
