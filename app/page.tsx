import IntroductionNew from '@/components/new-home-page/Introduction'
import CompletedProjectsNew from '@/components/new-home-page/CompletedProjects'
import EducationNew from '@/components/new-home-page/Education'
import { Main } from 'components/ds'

import React from 'react'
import TechnologiesNew from '@/components/new-home-page/Technologies'
import VolunteerExperienceNew from '@/components/new-home-page/VolunteerExperience'
import WorkExperienceNew from '@/components/new-home-page/WorkExperience'

function Home() {
  return (
    <Main>
      <IntroductionNew />
      <WorkExperienceNew />
      <VolunteerExperienceNew />
      <CompletedProjectsNew />
      <EducationNew />
      <TechnologiesNew />
    </Main>
  )
}

export default Home
