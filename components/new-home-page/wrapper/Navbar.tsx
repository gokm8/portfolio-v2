'use client'

import { Nav } from '@/components/ds'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Projects' }
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <Nav containerClassName='max-w-3xl'>
      <div className='flex items-center justify-between'>
        <Link href='/' className='text-muted-foreground hover:text-primary'>
          gokm8.xyz
        </Link>
        <ul className='flex items-center gap-4'>
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'hover:text-primary transition-colors',
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
          <ModeToggle />
        </ul>
      </div>
      <Separator />
    </Nav>
  )
}
