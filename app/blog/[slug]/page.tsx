import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { CustomMDX } from '@/app/blog/__components/mdx'
import ProjectLinks from '@/app/blog/__components/project-links'
import {
  formatDate,
  getBlogPosts,
  splitTechStack,
  type BlogPost
} from '@/app/blog/utils'
import { baseUrl } from '@/app/sitemap'
import { Container, Section, Prose } from '@/components/ds'
import { TracingBeam } from '@/components/ui/tracing-beam'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export async function generateStaticParams() {
  return getBlogPosts().map((post) => ({
    slug: post.slug
  }))
}

/** Frontmatter images may be site paths or full URLs. */
function ogImageFor(post: BlogPost) {
  const { image, title } = post.metadata
  if (!image) return `${baseUrl}/og?title=${encodeURIComponent(title)}`
  return image.startsWith('http') ? image : `${baseUrl}${image}`
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
    summary: description
  } = post.metadata
  const ogImage = ogImageFor(post)
  const url = `${baseUrl}/blog/${post.slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url,
      images: [{ url: ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

const quietLinkClass =
  'text-muted-foreground hover:text-primary focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-sm text-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden'

function SiblingLink({
  post,
  direction
}: {
  post: BlogPost
  direction: 'newer' | 'older'
}) {
  const isOlder = direction === 'older'

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group hover:border-primary/40 focus-visible:ring-ring flex flex-col gap-1 border p-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden',
        isOlder && 'sm:col-start-2 sm:text-right'
      )}
    >
      <span
        className={cn(
          'text-muted-foreground inline-flex items-center gap-1.5 text-xs tracking-wide',
          isOlder && 'sm:justify-end'
        )}
      >
        {!isOlder && <ArrowLeft aria-hidden='true' className='size-3' />}
        {isOlder ? 'Older project' : 'Newer project'}
        {isOlder && <ArrowRight aria-hidden='true' className='size-3' />}
      </span>
      <span className='group-hover:text-primary text-base leading-snug font-semibold tracking-tight transition-colors'>
        {post.metadata.title}
      </span>
    </Link>
  )
}

export default async function Blog({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = getBlogPosts()
  const index = posts.findIndex((post) => post.slug === slug)

  if (index === -1) {
    notFound()
  }

  const post = posts[index]
  const { metadata } = post
  const newer = posts[index - 1]
  const older = posts[index + 1]

  return (
    <Section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: metadata.title,
            datePublished: metadata.publishedAt,
            dateModified: metadata.publishedAt,
            description: metadata.summary,
            image: ogImageFor(post),
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Gøkmen Øzbayir',
              url: baseUrl
            }
          })
        }}
      />

      <Container>
        <Link href='/blog' className={quietLinkClass}>
          <ArrowLeft aria-hidden='true' className='size-3.5' />
          All projects
        </Link>

        <header className='mt-8 flex flex-col gap-3'>
          {metadata.context && (
            <p className='text-primary text-xs tracking-wide'>
              {metadata.context}
            </p>
          )}
          <h1 className='text-3xl font-semibold tracking-tight text-balance sm:text-4xl'>
            {metadata.title}
          </h1>
          <div className='text-muted-foreground flex flex-row flex-wrap items-center gap-x-5 gap-y-1 text-xs tracking-wide'>
            <time dateTime={metadata.publishedAt}>
              {formatDate(metadata.publishedAt)}
            </time>
            <ProjectLinks metadata={metadata} />
          </div>
          {metadata.techStack && (
            <div className='mt-1 flex flex-row flex-wrap gap-1.5'>
              {splitTechStack(metadata.techStack).map((tech) => (
                <Badge key={tech} variant='secondary'>
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </header>

        <Separator className='mt-8' />
      </Container>

      <TracingBeam className='px-6'>
        <Container>
          <Prose
            isArticle
            isSpaced
            className={cn(
              // Write-ups are short; keep headings in proportion to the h1.
              '[&_h2]:text-xl sm:[&_h2]:text-2xl',
              '[&_h3]:text-lg sm:[&_h3]:text-xl',
              '[&_img]:rounded-sm [&_img]:border',
              '[&_p:has(>em:only-child)]:text-muted-foreground [&_p:has(>em:only-child)]:-mt-4 [&_p:has(>em:only-child)]:text-sm'
            )}
          >
            <CustomMDX source={post.content} />
          </Prose>
        </Container>
      </TracingBeam>

      <Container>
        <Separator className='mb-8' />
        {(newer || older) && (
          <nav aria-label='More projects' className='grid gap-4 sm:grid-cols-2'>
            {newer && <SiblingLink post={newer} direction='newer' />}
            {older && <SiblingLink post={older} direction='older' />}
          </nav>
        )}
        <Link href='/blog' className={cn(quietLinkClass, 'mt-8')}>
          <ArrowLeft aria-hidden='true' className='size-3.5' />
          All projects
        </Link>
      </Container>
    </Section>
  )
}
