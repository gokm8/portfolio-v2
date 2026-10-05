import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Teach tailwind-merge that `text-body` (globals.css) is a font size, so it
// isn't mistaken for a text colour and dropped next to `text-muted-foreground`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ['body']
    }
  }
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * "Sep. 2023 - Feb. 2026 (2 yrs, 6 mos)" → { period: "Sep 2023 – Feb 2026",
 * duration: "2 yrs, 6 mos" }, so every date range on the site reads the same.
 */
export function splitDate(date: string) {
  const match = date.match(/^(.*?)\s*\((.*)\)\s*$/)
  const period = (match ? match[1] : date).replace(/\.\s/g, ' ')
  return {
    period: period.replace(/\s+-\s+/, ' – '),
    duration: match?.[2]
  }
}
