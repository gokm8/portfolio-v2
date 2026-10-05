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
    <footer className='mt-auto'>
      <Section>
        <Separator orientation='horizontal' />
        <Container>
          <div className='flex items-center justify-between py-4'>
            <p className='text-muted-foreground text-sm'>
              © {new Date().getFullYear()}{' '}
              <Link
                href='/'
                className='hover:text-primary underline decoration-dotted underline-offset-4 transition-colors'
              >
                gokm8.xyz
              </Link>
            </p>

            <div className='flex flex-row gap-4'>
              {socialMediaLogos.map((logo) => {
                const isExternal = logo.href.startsWith('http')
                return (
                  <Link
                    href={logo.href}
                    key={logo.alt}
                    aria-label={logo.alt}
                    {...(isExternal && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                    className='text-muted-foreground hover:text-primary focus-visible:ring-ring rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                  >
                    <logo.icon className='size-4' />
                  </Link>
                )
              })}
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
