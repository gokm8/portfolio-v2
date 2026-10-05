import Link from 'next/link'
import { Container, Section } from '../ds'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import {
  formatDate,
  getBlogPosts,
  splitTechStack,
  type BlogPost
} from '@/app/blog/utils'
import ProjectLinks from '@/app/blog/__components/project-links'
import SectionHeading from './SectionHeading'
import ShowMore from './ShowMore'

function ProjectCard({ post }: { post: BlogPost }) {
  const { metadata, slug } = post
  const href = `/blog/${slug}`

  return (
    // The title link stretches over the whole card, so the card is one click
    // target; the external links sit above it (z-10).
    <Card className='group hover:border-primary/40 has-[a:focus-visible]:ring-ring relative h-full transition-colors has-[a:focus-visible]:ring-2'>
      <CardHeader>
        <div className='text-muted-foreground flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-xs tracking-wide'>
          {metadata.context && <p>{metadata.context}</p>}
          <time dateTime={metadata.publishedAt} className='shrink-0'>
            {formatDate(metadata.publishedAt)}
          </time>
        </div>
        <h3 className='text-base leading-snug font-semibold tracking-tight'>
          <Link
            href={href}
            className='group-hover:text-primary transition-colors after:absolute after:inset-0 focus-visible:outline-hidden'
          >
            {metadata.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className='flex flex-col gap-4'>
        <p className='text-muted-foreground text-body line-clamp-3 max-w-[68ch]'>
          {metadata.summary}
        </p>
        {metadata.techStack && (
          <div className='flex flex-row flex-wrap gap-1.5'>
            {splitTechStack(metadata.techStack).map((tech) => (
              <Badge key={tech} variant='secondary'>
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      {(metadata.link || metadata.githubRepoLink) && (
        <CardFooter>
          <ProjectLinks metadata={metadata} className='relative z-10' />
        </CardFooter>
      )}
    </Card>
  )
}

function CompletedProjectsNew() {
  const posts = getBlogPosts()

  return (
    <Section id='projects'>
      <Container>
        <SectionHeading
          aside={
            <Link
              href='/blog'
              className='hover:text-primary focus-visible:ring-ring rounded-sm underline decoration-dotted underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
            >
              All projects
            </Link>
          }
        >
          Selected Projects
        </SectionHeading>
        <ShowMore initialCount={3} noun='projects'>
          {posts.map((post) => (
            <ProjectCard key={post.slug} post={post} />
          ))}
        </ShowMore>
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
