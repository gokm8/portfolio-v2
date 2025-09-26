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
import { BorderBeam } from '../ui/border-beam'
import { HyperText } from '../ui/hyper-text'

const socialMediaLogos = [
  {
    alt: 'linkedin',
    href: 'https://www.linkedin.com/in/gokmenozbayir/',
    icon: FaLinkedin
  },
  {
    alt: 'github',
    href: 'https://www.linkedin.com/in/gokmenozbayir/',
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
    <Section className='bg-background'>
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
                <h1 className='text-h1'>
                  <HyperText>Gøkmen Øzbayir</HyperText>
                </h1>
              </CardTitle>
            </div>

            <CardDescription>
              <p className='text-body'>
                I&apos;m a software engineer who loves to build things and make
                a real world impact.
              </p>
            </CardDescription>
          </CardHeader>

          {/* Contact info */}
          <CardContent>
            <div className='flex flex-col gap-2'>
              <p className='text-caption'>
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
                    <logo.icon className='text-primary hover:text-primary/90 size-4' />
                  </Link>
                ))}
              </div>
            </div>
          </CardContent>
          <BorderBeam duration={5} size={100} />
        </Card>
      </Container>
    </Section>
  )
}

export default IntroductionNew
