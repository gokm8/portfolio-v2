import { Container, Nav } from '@/components/ds'
import { ModeToggle } from '@/components/mode-toggle'

export function Navigation() {
  return (
    <Nav>
      <Container>
        <div className='flex items-center justify-between'>
          <div>gokm8.xyz</div>
          <ul className='flex items-center gap-4'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/blog'>Blog</a>
            </li>
            <ModeToggle />
          </ul>
        </div>
      </Container>
    </Nav>
  )
}
