import { Container, Section } from '@/components/ds'
import { Separator } from '@/components/ui/separator'

function Footer() {
  return (
    <footer className='bg-background'>
      <Section>
        <Container>
          <Separator orientation='horizontal' />
          <p className='text-caption text-center'>
            © {new Date().getFullYear()} Gøkmen Øzbayir
          </p>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
