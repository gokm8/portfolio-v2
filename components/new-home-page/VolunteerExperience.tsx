import { volunteerExperienceData } from '@/data/volunteer-experience'
import ExperienceTimeline from './ExperienceTimeline'

export default function VolunteerExperienceNew() {
  return (
    <ExperienceTimeline
      title='Volunteer Experience 🤝'
      items={volunteerExperienceData}
    />
  )
}
