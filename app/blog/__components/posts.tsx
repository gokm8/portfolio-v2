import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'

export function BlogPosts() {
  const allBlogs = getBlogPosts()

  return (
    <div>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className='mb-4 flex flex-col space-y-1'
            href={`/blog/${post.slug}`}
          >
            <div className='flex w-full flex-col space-x-0 md:flex-row md:space-x-2'>
              <p className='text-muted-foreground w-[180px] text-base tabular-nums'>
                {formatDate(post.metadata.publishedAt, false)}
              </p>

              <p className='text-foreground hover:text-primary text-base tracking-tight underline'>
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  )
}
