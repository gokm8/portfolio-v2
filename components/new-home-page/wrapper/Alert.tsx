import { Container, Section } from '@/components/ds'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import Link from 'next/link'

function AlertNew() {
  return (
    <Section>
      <Container>
        <Alert className='w-full'>
          <AlertTitle>Currently building TeoriOnline</AlertTitle>
          <AlertDescription className='flex flex-row flex-wrap gap-x-2'>
            A digital learning platform for the Danish driving theory test
            <Link
              href='https://teorionline.dk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary underline underline-offset-4'
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
