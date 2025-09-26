import { Container, Nav } from '@/components/ds'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export function Navigation() {
  return (
    <Nav>
      <Container>
        <div className='flex items-center justify-between'>
          <div>gokm8.xyz</div>
          <ul className='flex items-center gap-4'>
            <li>
              <Link href='/'>Home</Link>
            </li>
            <li>
              <Link href='/blog'>Blog</Link>
            </li>
            <ModeToggle />
          </ul>
        </div>
      </Container>
    </Nav>
  )
}
