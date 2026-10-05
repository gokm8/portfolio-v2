import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container, Section } from '../ds'
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
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
    <Card className='hover:border-primary/40 h-full transition-colors'>
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
            className='hover:text-primary focus-visible:ring-ring rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
          >
            {metadata.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent className='flex flex-col gap-4'>
        <p className='text-muted-foreground text-body max-w-[68ch]'>
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

      <CardFooter className='flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <Button variant='outline' className='group w-full sm:w-auto' asChild>
          <Link href={href}>
            Read the write-up
            <ArrowRight
              aria-hidden='true'
              className='transition-transform group-hover:translate-x-0.5'
            />
          </Link>
        </Button>
        <ProjectLinks metadata={metadata} />
      </CardFooter>
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
