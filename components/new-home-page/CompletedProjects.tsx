import Link from 'next/link'
import { Container, Section } from '../ds'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { getBlogPosts } from '@/app/blog/utils'
import SectionHeading from './SectionHeading'

/** Strip protocol and www so the displayed host reads consistently. */
function displayHost(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
}

/** Frontmatter stores bare hosts as well as full URLs. */
function toHref(url: string) {
  return url.startsWith('http') ? url : `https://${url}`
}

function CompletedProjectsNew() {
  const blogPosts = getBlogPosts()

  return (
    <Section>
      <Container>
        <SectionHeading>Selected Projects</SectionHeading>
        {[...blogPosts]
          .sort((a, b) => {
            return new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
              ? -1
              : 1
          })
          .map((post) => (
            <div key={post.slug} className='mb-4 last:mb-0'>
              <Card className='hover:border-primary/40 transition-colors'>
                {/* Project title and website link */}
                <CardHeader>
                  {post.metadata.link && (
                    <CardDescription>
                      <p className='text-muted-foreground text-xs tracking-wide'>
                        {displayHost(post.metadata.link)}
                      </p>
                    </CardDescription>
                  )}
                  <CardTitle>
                    <h3 className='text-lg font-semibold tracking-tight'>
                      {post.metadata.title}
                    </h3>
                  </CardTitle>
                  {post.metadata.context && (
                    <p className='text-muted-foreground text-xs tracking-wide'>
                      {post.metadata.context}
                    </p>
                  )}
                </CardHeader>

                {/* Project description and tech stack */}
                <CardContent className='flex flex-col gap-4'>
                  <p className='text-muted-foreground max-w-[68ch] text-[0.9375rem] leading-relaxed'>
                    {post.metadata.summary || 'No summary available'}
                  </p>
                  {post.metadata.techStack && (
                    <div className='flex flex-row flex-wrap gap-1.5'>
                      {post.metadata.techStack
                        .split(',')
                        .map((tech) => tech.trim())
                        .filter(Boolean)
                        .map((tech) => (
                          <Badge key={tech} variant='secondary'>
                            {tech}
                          </Badge>
                        ))}
                    </div>
                  )}
                </CardContent>

                {/* Actions */}
                <CardFooter className='flex flex-col items-start gap-3'>
                  <Button
                    variant='outline'
                    className='w-full sm:w-auto'
                    asChild
                  >
                    <Link href={`/blog/${post.slug}`}>Read the write-up</Link>
                  </Button>
                  {(post.metadata.link || post.metadata.githubRepoLink) && (
                    <div className='flex flex-row flex-wrap items-center gap-x-5 gap-y-1 text-xs tracking-wide'>
                      {post.metadata.link && (
                        <Link
                          href={toHref(post.metadata.link)}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-muted-foreground hover:text-primary focus-visible:ring-ring rounded-sm underline decoration-dotted underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                        >
                          Live site
                        </Link>
                      )}
                      {post.metadata.githubRepoLink && (
                        <Link
                          href={post.metadata.githubRepoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-muted-foreground hover:text-primary focus-visible:ring-ring rounded-sm underline decoration-dotted underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden'
                        >
                          Source
                        </Link>
                      )}
                    </div>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
