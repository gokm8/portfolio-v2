import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  displayHost,
  isVideoLink,
  toHref,
  type BlogPost
} from '@/app/blog/utils'

const linkClass =
  'text-muted-foreground hover:text-primary focus-visible:ring-ring inline-flex items-center gap-0.5 rounded-sm underline decoration-dotted underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-hidden'

/** External links for a project: live site (or demo video) and source. */
export default function ProjectLinks({
  metadata,
  className
}: {
  metadata: BlogPost['metadata']
  className?: string
}) {
  const { link, githubRepoLink } = metadata
  if (!link && !githubRepoLink) return null

  return (
    <div
      className={cn(
        'flex flex-row flex-wrap items-center gap-x-5 gap-y-1 text-xs tracking-wide',
        className
      )}
    >
      {link && (
        <Link
          href={toHref(link)}
          target='_blank'
          rel='noopener noreferrer'
          className={linkClass}
        >
          {isVideoLink(link) ? 'Demo video' : displayHost(link)}
          <ArrowUpRight aria-hidden='true' className='size-3' />
        </Link>
      )}
      {githubRepoLink && (
        <Link
          href={githubRepoLink}
          target='_blank'
          rel='noopener noreferrer'
          className={linkClass}
        >
          Source
          <ArrowUpRight aria-hidden='true' className='size-3' />
        </Link>
      )}
    </div>
  )
}
