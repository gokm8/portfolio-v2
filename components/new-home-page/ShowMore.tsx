'use client'

import { Children, useId, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'

interface ShowMoreProps {
  children: React.ReactNode
  /** How many items are visible before expanding. */
  initialCount?: number
  /** Plural noun for the button label, e.g. "projects". */
  noun?: string
}

/**
 * Collapses a server-rendered list to its first few items. Hidden items stay
 * in the DOM (just `hidden`), so crawlers and in-page search still see them.
 */
export default function ShowMore({
  children,
  initialCount = 3,
  noun = 'items'
}: ShowMoreProps) {
  const [expanded, setExpanded] = useState(false)
  const listId = useId()
  const items = Children.toArray(children)
  const hiddenCount = items.length - initialCount

  return (
    <>
      <div id={listId} className='flex flex-col gap-4'>
        {items.map((item, index) => (
          <div
            key={index}
            className={cn(!expanded && index >= initialCount && 'hidden')}
          >
            {item}
          </div>
        ))}
      </div>

      {hiddenCount > 0 && (
        <Button
          type='button'
          variant='outline'
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((value) => !value)}
          className='text-muted-foreground hover:text-primary mt-4 w-full border-dashed'
        >
          {expanded ? `Show fewer ${noun}` : `Show ${hiddenCount} more ${noun}`}
          <ChevronDown
            aria-hidden='true'
            className={cn('transition-transform', expanded && 'rotate-180')}
          />
        </Button>
      )}
    </>
  )
}
