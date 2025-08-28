import Introduction from 'components/home-page/Introduction'
import Education from 'components/home-page/Education'
import Technologies from 'components/home-page/Technologies'
import FeaturedProjects from 'components/home-page/FeaturedProjects'
import CurrentProjects from 'components/home-page/CurrentProjects'
import CompletedProjects from 'components/home-page/CompletedProjects'
import { Section } from 'components/craft'

import React from 'react'

function Home() {
  return (
    <Section>
      <Introduction />
      <FeaturedProjects />
      <Education />
      <Technologies />
      <CurrentProjects />
      <CompletedProjects />
    </Section>
  )
}

export default Home
