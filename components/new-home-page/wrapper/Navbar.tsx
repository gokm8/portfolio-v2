import { Container, Nav } from '@/components/ds'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'

export function Navigation() {
  return (
    <Nav>
      <Container>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-muted-foreground hover:text-primary'>
            gokm8.xyz
          </Link>
          <ul className='flex items-center gap-4'>
            <li>
              <Link href='/' className='hover:text-primary'>
                Home
              </Link>
            </li>
            <li>
              <Link href='/blog' className='hover:text-primary'>
                Projects
              </Link>
            </li>
            <ModeToggle />
          </ul>
        </div>
      </Container>
    </Nav>
  )
}
