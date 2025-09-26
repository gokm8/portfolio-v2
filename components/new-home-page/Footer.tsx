import { Container, Section } from '../ds'

function Footer() {
  return (
    <Section className='bg-background'>
      <Container>
        <p className='text-caption'>
          © {new Date().getFullYear()} Gøkmen Øzbayir
        </p>
      </Container>
    </Section>
  )
}

export default Footer
