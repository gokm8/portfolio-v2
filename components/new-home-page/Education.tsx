import { educationalData } from '@/data/education'
import ExperienceTimeline from './ExperienceTimeline'

export default function EducationNew() {
  return (
    <ExperienceTimeline
      title='Education'
      items={educationalData.map((entry) => ({
        date: entry.date,
        title: entry.education,
        location: entry.school,
        description: entry.description
      }))}
    />
  )
}
