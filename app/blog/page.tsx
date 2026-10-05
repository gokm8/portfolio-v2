import { BlogPosts } from '@/app/blog/__components/posts'
import { Container, Section } from '@/components/ds'
import SectionHeading from '@/components/new-home-page/SectionHeading'

export const metadata = {
  title: 'Projects',
  description:
    'Selected software projects with write-ups, live sites and source code.'
}

export default function Page() {
  return (
    <Section>
      <Container>
        <SectionHeading as='h1' className='mb-4'>
          Projects
        </SectionHeading>
        <p className='text-muted-foreground text-body mb-8 max-w-[62ch]'>
          Write-ups of things I have built: what the problem was, how it was
          solved and what came out of it.
        </p>
        <BlogPosts />
      </Container>
    </Section>
  )
}
