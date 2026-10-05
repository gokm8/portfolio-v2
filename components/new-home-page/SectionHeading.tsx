import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
  /** Page-level headings (e.g. /blog) render as h1. */
  as?: 'h1' | 'h2'
  /** Optional slot right of the title, e.g. a count or a link. */
  aside?: React.ReactNode
}

/**
 * Shared section heading. The accent square echoes the TimelineIndicator
 * shape, so every section is marked with a motif the page already uses
 * instead of a per-section emoji.
 */
export default function SectionHeading({
  children,
  className,
  as: Heading = 'h2',
  aside
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-6', className)}>
      <div className='flex flex-row items-center gap-3'>
        <span aria-hidden='true' className='bg-primary size-2.5 shrink-0' />
        <Heading className='text-lg font-medium tracking-tight'>
          {children}
        </Heading>
        {aside && (
          <div className='text-muted-foreground ml-auto text-xs tracking-wide'>
            {aside}
          </div>
        )}
      </div>
      <Separator className='mt-3 mb-0' />
    </div>
  )
}
