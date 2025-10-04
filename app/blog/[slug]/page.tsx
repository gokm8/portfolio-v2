import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/blog/__components/mdx'
import { formatDate, getBlogPosts } from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import { Container, Section, Prose } from '@/components/ds'
import { TracingBeam } from '@/components/ui/tracing-beam'
import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export async function generateStaticParams() {
  const posts = getBlogPosts()

  return posts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)
  if (!post) {
    return
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image
  } = post.metadata
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default async function Blog({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPosts().find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <Section>
      <Section>
        <Container>
          <Link href='/blog'>
            <p className='text-muted-foreground hover:text-primary text-base'>
              ⟵ Back to blog
            </p>
          </Link>
        </Container>
      </Section>
      <TracingBeam className='px-6'>
        <Container>
          <script
            type='application/ld+json'
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'BlogPosting',
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.summary,
                image: post.metadata.image
                  ? `${baseUrl}${post.metadata.image}`
                  : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${baseUrl}/blog/${post.slug}`,
                author: {
                  '@type': 'Person',
                  name: 'My Portfolio'
                }
              })
            }}
          />
          <Prose>
            <h1 className='text-primary'>{post.metadata.title}</h1>
          </Prose>
          <div className='mt-2 mb-8 flex items-center justify-between'>
            <Prose className='text-muted-foreground'>
              {formatDate(post.metadata.publishedAt)}
            </Prose>
          </div>
          <Prose isArticle={true} isSpaced={true}>
            <CustomMDX source={post.content} />
          </Prose>
        </Container>
      </TracingBeam>
      <Section>
        <Container>
          <Prose className='mb-6'>
            <p>Thanks for reading! ✨</p>
          </Prose>

          <Separator orientation='horizontal' />
          <p className='text-base'>1.203 people has seen this blog post</p>
        </Container>
        <Container>
          <Link href='/blog'>
            <p className='text-muted-foreground hover:text-primary text-base'>
              ⟵ Back to blog
            </p>
          </Link>
        </Container>
      </Section>
    </Section>
  )
}
