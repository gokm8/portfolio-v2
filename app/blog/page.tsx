import { BlogPosts } from '@/app/blog/__components/posts'
import { Container, Section } from '@/components/ds'

export const metadata = {
  title: 'Projects',
  description:
    'Selected software projects with write-ups, live sites and source code.'
}

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className='mb-8 text-3xl font-semibold tracking-tight'>Projects</h1>
        <BlogPosts />
      </Container>
    </Section>
  )
}
