import { BlogPosts } from '@/app/blog/__components/posts'
import { Container, Section } from '@/components/ds'

export const metadata = {
  title: 'Projects 💻',
  description: 'Read my projects.'
}

export default function Page() {
  return (
    <Section>
      <Container>
        <h1 className='text-h1 mb-8'>Projects 💻</h1>
        <BlogPosts />
      </Container>
    </Section>
  )
}
