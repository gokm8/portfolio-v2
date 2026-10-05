import { cn } from '@/lib/utils'
import { Separator } from '../ui/separator'

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

/**
 * Shared section heading. The accent square echoes the TimelineIndicator
 * shape, so every section is marked with a motif the page already uses
 * instead of a per-section emoji.
 */
export default function SectionHeading({
  children,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-6', className)}>
      <div className='flex flex-row items-center gap-3'>
        <span aria-hidden='true' className='bg-primary size-2.5 shrink-0' />
        <h2 className='text-lg font-medium tracking-tight'>{children}</h2>
      </div>
      <Separator className='mt-3 mb-0' />
    </div>
  )
}
