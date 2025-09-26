import { Container, Section } from '@/components/ds'

function Footer() {
  return (
    <footer className='bg-background'>
      <Section>
        <Container>
          <p className='text-caption'>
            © {new Date().getFullYear()} Gøkmen Øzbayir
          </p>
        </Container>
      </Section>
    </footer>
  )
}

export default Footer
