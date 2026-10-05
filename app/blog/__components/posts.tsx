import Link from 'next/link'
import { formatDate, getBlogPosts, splitTechStack } from '@/app/blog/utils'

export function BlogPosts() {
  const posts = getBlogPosts()

  return (
    <ul className='divide-border border-border divide-y border-y'>
      {posts.map(({ slug, metadata }) => (
        <li key={slug}>
          <Link
            href={`/blog/${slug}`}
            className='group focus-visible:ring-ring grid gap-1 py-5 focus-visible:ring-2 focus-visible:outline-hidden sm:grid-cols-[6rem_1fr] sm:gap-6'
          >
            <time
              dateTime={metadata.publishedAt}
              className='text-primary pt-1 text-xs tracking-wide tabular-nums'
            >
              {formatDate(metadata.publishedAt)}
            </time>
            <div className='flex flex-col gap-1.5'>
              <h2 className='group-hover:text-primary text-base font-semibold tracking-tight transition-colors'>
                {metadata.title}
              </h2>
              {metadata.context && (
                <p className='text-muted-foreground text-xs tracking-wide'>
                  {metadata.context}
                </p>
              )}
              <p className='text-muted-foreground text-body line-clamp-2 max-w-[68ch]'>
                {metadata.summary}
              </p>
              {metadata.techStack && (
                <p className='text-muted-foreground text-xs tracking-wide'>
                  {splitTechStack(metadata.techStack).join(' · ')}
                </p>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
