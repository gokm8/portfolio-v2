import { workExperienceData } from '@/data/work-experience'
import ExperienceTimeline from './ExperienceTimeline'

export default function WorkExperienceNew() {
  return (
    <ExperienceTimeline title='Work Experience 💼' items={workExperienceData} />
  )
}
