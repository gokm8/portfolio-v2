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
    <footer className='bg-background mt-auto'>
      <Section>
        <Separator orientation='horizontal' />
        <Container>
          <div className='flex justify-between py-4'>
            {/* Dit navn i midten */}

            <div className='flex flex-row gap-2'>
              <p className='text-muted-foreground'>
                © {new Date().getFullYear()}
              </p>
              <Link
                href='/'
                className='text-muted-foreground hover:text-primary'
              >
                gokm8.xyz
              </Link>
            </div>

            {/* Social media icons til venstre */}
            <div className='flex flex-row gap-4'>
              {socialMediaLogos.map((logo) => (
                <Link href={logo.href} key={logo.alt}>
                  <logo.icon className='text-muted-foreground hover:text-primary size-4' />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
