import IntroductionNew from '@/components/new-home-page/Introduction'
import CompletedProjectsNew from '@/components/new-home-page/CompletedProjects'
import EducationNew from '@/components/new-home-page/Education'

import Introduction from '@/components/home-page/Introduction'

import Education from 'components/home-page/Education'
import Technologies from 'components/home-page/Technologies'
import FeaturedProjects from 'components/home-page/FeaturedProjects'
import CurrentProjects from 'components/home-page/CurrentProjects'
import CompletedProjects from 'components/home-page/CompletedProjects'
import { Main } from 'components/ds'

import React from 'react'

function Home() {
  return (
    <Main>
      <IntroductionNew />
      <CompletedProjectsNew />
      {/* <Introduction /> */}
      {/* <FeaturedProjects /> */}
      {/* <Education /> */}
      <EducationNew />
      <Technologies />
      <CurrentProjects />
      <CompletedProjects />
    </Main>
  )
}

export default Home
