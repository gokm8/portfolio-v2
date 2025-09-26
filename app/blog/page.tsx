import { BlogPosts } from '@/app/blog/__components/posts'
import { Container, Section } from '@/components/ds'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.'
}

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className='text-h1 mb-8'>My Blog</h1>
        <BlogPosts />
      </Container>
    </Section>
  )
}
