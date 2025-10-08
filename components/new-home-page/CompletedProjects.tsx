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
import { Separator } from '../ui/separator'
import { Button } from '../ui/button'
import { ShineBorder } from '../ui/shine-border'
import { getBlogPosts } from '@/app/blog/utils'

function CompletedProjectsNew() {
  const blogPosts = getBlogPosts()

  return (
    <Section>
      <Container>
        <h2 className='text-2xl font-bold'>Projects 💻</h2>
        <Separator orientation='horizontal' />
        {blogPosts
          .sort((a, b) => {
            return new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
              ? -1
              : 1
          })
          .map((post) => (
            <div key={post.slug} className='mb-4'>
              <Card className='relative overflow-hidden'>
                <ShineBorder shineColor={['#A855F7', '#FF5E9A', '#ff6900']} />

                {/* Project title and website link */}
                <CardHeader>
                  <CardDescription>
                    <p className='text-muted-foreground text-sm'>
                      {post.metadata.link}
                    </p>
                  </CardDescription>
                  <CardTitle>
                    <h3 className='text-xl'>{post.metadata.title}</h3>
                  </CardTitle>
                </CardHeader>

                {/* Project tech stack and description */}
                <CardContent>
                  <p className='text-muted-foreground line-clamp-2 text-base'>
                    {post.metadata.summary || 'No summary available'}
                  </p>
                </CardContent>

                {/* Button and Links */}
                <CardFooter className='flex flex-col gap-1'>
                  <Button className='w-full' asChild>
                    <Link href={`/blog/${post.slug}`}>Read more →</Link>
                  </Button>
                  <Separator orientation='horizontal' />
                  <div className='flex h-5 w-full flex-row items-center gap-2 text-sm'>
                    <Link
                      href={
                        post.metadata.link
                          ? `https://${post.metadata.link}`
                          : ''
                      }
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-muted-foreground hover:text-primary flex items-center gap-2'
                    >
                      view live site ↗
                    </Link>
                    {post.metadata.githubRepoLink && (
                      <>
                        <Separator orientation='vertical' />
                        <Link
                          href={post.metadata.githubRepoLink}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-muted-foreground hover:text-primary flex items-center gap-2'
                        >
                          view on github ↗
                        </Link>
                      </>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
      </Container>
    </Section>
  )
}

export default CompletedProjectsNew
