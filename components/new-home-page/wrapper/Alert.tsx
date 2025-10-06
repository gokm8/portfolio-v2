import { Container, Section } from '@/components/ds'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'

function AlertNew() {
  return (
    <Section>
      <Container>
        <Alert className='w-full'>
          <AlertTitle>Have you seen my latest project?</AlertTitle>
          <AlertDescription className='flex flex-row gap-2'>
            Check it out now at
            <Link
              href='https://teorionline.dk'
              target='_blank'
              className='text-primary underline'
            >
              teorionline.dk
            </Link>
          </AlertDescription>
        </Alert>
      </Container>
    </Section>
  )
}

export default AlertNew
