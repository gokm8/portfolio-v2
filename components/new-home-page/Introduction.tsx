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
import { LightRays } from '../ui/light-rays'

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
  },
  {
    alt: 'email',
    href: 'mailto:gozbayir@hotmail.com',
    icon: FaEnvelope
  }
]

function IntroductionNew() {
  return (
    <Section>
      <Container>
        <Card className='relative overflow-hidden'>
          <CardHeader>
            {/* Avatar + Name */}
            <div className='flex flex-row items-center'>
              <Avatar className='mr-2'>
                <AvatarImage src='/favicon.ico' alt='@gokmenozbayir' />
                <AvatarFallback>GØ</AvatarFallback>
              </Avatar>
              <CardTitle>
                <h1 className='text-3xl'>
                  <HyperText>Gøkmen Øzbayir</HyperText>
                </h1>
              </CardTitle>
            </div>

            <CardDescription>
              <p className='text-base'>
                I&apos;m a software engineer who loves to build things and make
                a real world impact.
              </p>
            </CardDescription>
          </CardHeader>

          {/* Contact info */}
          <CardContent>
            <div className='flex flex-col gap-2'>
              <p className='text-muted-foreground text-sm'>
                Reach me at @{' '}
                <Link
                  href='mailto:gozbayir@hotmail.com'
                  className='text-primary hover:text-primary/90 underline'
                >
                  gozbayir@hotmail.com
                </Link>
              </p>

              <div className='flex flex-row justify-start gap-2'>
                {socialMediaLogos.map((logo) => (
                  <Link href={logo.href} key={logo.alt}>
                    <logo.icon className='text-muted-foreground hover:text-primary size-4' />
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </Container>
    </Section>
  )
}

export default IntroductionNew
