import { workExperienceData } from '@/data/work-experience'
import { volunteerExperienceData } from '@/data/volunteer-experience'
import ExperienceTimeline from './ExperienceTimeline'

/** Paid roles first, then volunteer work, in one list. */
export default function WorkExperienceNew() {
  return (
    <ExperienceTimeline
      title='Experience'
      items={[...workExperienceData, ...volunteerExperienceData]}
    />
  )
}
