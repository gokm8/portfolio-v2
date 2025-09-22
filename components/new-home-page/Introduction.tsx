import { Container, Section } from '../ds'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction
} from '../ui/card'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

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
        <Card>
          <CardHeader>
            {/* Avatar + Name */}
            <div className='flex flex-row items-center'>
              <Avatar className='mr-2 rounded-lg'>
                <AvatarImage
                  src='https://github.com/evilrabbit.png'
                  alt='@evilrabbit'
                />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <CardTitle>
                <h1 className='text-heading-lg'>Gøkmen Øzbayir</h1>
              </CardTitle>
            </div>

            {/* Description */}
            <CardDescription>
              <p className='text-body-sm mb-2'>
                I'm a software engineer who loves to build things and make a
                real world impact.
              </p>
            </CardDescription>

            {/* Inquiries */}
            <CardDescription className='flex flex-col gap-1'>
              <div>
                <p className='text-caption'>
                  Reach me at @{' '}
                  <Link
                    href='mailto:gozbayir@hotmail.com'
                    className='text-primary hover:text-primary/90 underline'
                  >
                    gozbayir@hotmail.com
                  </Link>
                </p>
              </div>
              <div className='flex flex-row justify-start gap-2'>
                {socialMediaLogos.map((logo) => (
                  <Link href={logo.href} key={logo.alt}>
                    <logo.icon className='text-primary hover:text-primary/90 size-4' />
                  </Link>
                ))}
              </div>
            </CardDescription>
          </CardHeader>
        </Card>
      </Container>
    </Section>
  )
}

export default IntroductionNew
