import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Container, Section } from '@/components/ds'
import { Button } from '@/components/ui/button'
import SectionHeading from '@/components/new-home-page/SectionHeading'

export const metadata = {
  title: 'Page not found'
}

export default function NotFound() {
  return (
    <Section>
      <Container>
        <SectionHeading as='h1' aside='404'>
          Page not found
        </SectionHeading>
        <p className='text-muted-foreground text-body max-w-[62ch]'>
          The page you are looking for does not exist or has been moved. Head
          back to the front page or browse the projects instead.
        </p>
        <div className='mt-6 flex flex-col gap-3 sm:flex-row'>
          <Button variant='outline' className='group' asChild>
            <Link href='/'>
              <ArrowLeft
                aria-hidden='true'
                className='transition-transform group-hover:-translate-x-0.5'
              />
              Back to home
            </Link>
          </Button>
          <Button
            variant='ghost'
            className='text-muted-foreground hover:text-primary'
            asChild
          >
            <Link href='/blog'>View projects</Link>
          </Button>
        </div>
      </Container>
    </Section>
  )
}
