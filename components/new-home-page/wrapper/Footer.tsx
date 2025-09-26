import { Container, Section } from '@/components/ds'
import { Separator } from '@/components/ui/separator'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

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

function Footer() {
  return (
    <footer className='bg-background'>
      <Section>
        <Separator orientation='horizontal' />
        <Container>
          <div className='relative flex items-center justify-center py-4'>
            {/* Social media icons til venstre */}
            <div className='absolute left-0 flex flex-row gap-4'>
              {socialMediaLogos.map((logo) => (
                <Link href={logo.href} key={logo.alt}>
                  <logo.icon className='text-muted-foreground hover:text-primary size-4' />
                </Link>
              ))}
            </div>

            {/* Dit navn i midten */}
            <p className='text-caption text-muted-foreground'>
              © {new Date().getFullYear()} gokm8.xyz
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
