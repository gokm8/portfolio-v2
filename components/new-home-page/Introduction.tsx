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
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { HyperText } from '../ui/hyper-text'
import { BorderBeam } from '../ui/border-beam'
import { SparklesCore } from '../ui/sparkles'
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
          <SparklesCore
            id='sparkles-introduction'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={30}
            className='pointer-events-none absolute inset-0'
            particleColor='#ff6900'
          />
          <CardHeader>
            {/* Avatar + Name */}
            <div className='flex flex-row items-center'>
              <Avatar className='mr-2 size-12'>
                <AvatarImage
                  src='https://avatars.githubusercontent.com/u/107099606?v=4'
                  alt='@gokmenozbayir'
                />
                <AvatarFallback>GØ</AvatarFallback>
              </Avatar>
              <CardTitle>
                <h1 className='text-2xl'>
                  <HyperText>Gøkmen Øzbayir</HyperText>
                </h1>
                <div className='flex flex-row gap-2'>
                  <p className='text-muted-foreground text-sm'>I am a</p>
                  <TextLoop className='text-primary text-sm'>
                    <p>Software Engineer</p>
                    <p>Full Stack Developer</p>
                    <p>Problem Solver</p>
                    <p>Lifelong Learner</p>
                    <p>Team Player</p>
                  </TextLoop>
                </div>
              </CardTitle>
            </div>

            <CardDescription>
              <p className='text-base'>
                I'm a full-stack developer passionate about building modern web
                applications, UI/UX and AI solutions
              </p>
            </CardDescription>
          </CardHeader>

          {/* Contact info (Social media icons and email) */}
          <CardContent>
            <div className='flex flex-col gap-2'>
              <div className='flex flex-row justify-start gap-2'>
                {socialMediaLogos.map((logo) => (
                  <Link href={logo.href} key={logo.alt}>
                    <logo.icon className='text-muted-foreground hover:text-primary size-4' />
                  </Link>
                ))}
                <div
                  onClick={() => {
                    copy('gozbayir@hotmail.com')
                    toast('Email has been copied to clipboard', {
                      description: 'You can email me regarding any inquiries'
                    })
                  }}
                  className='text-muted-foreground hover:text-primary size-4 cursor-pointer transition-colors'
                >
                  <FaEnvelope className='size-4' />
                </div>
              </div>
            </div>
          </CardContent>
          <BorderBeam duration={6} size={120} />
        </Card>
      </Container>
    </Section>
  )
}

export default IntroductionNew
