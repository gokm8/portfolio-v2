import { Main } from '@/components/ds'
import IntroductionNew from '@/components/new-home-page/Introduction'
import CompletedProjectsNew from '@/components/new-home-page/CompletedProjects'
import WorkExperienceNew from '@/components/new-home-page/WorkExperience'
import EducationNew from '@/components/new-home-page/Education'
import TechnologiesNew from '@/components/new-home-page/Technologies'

function Home() {
  return (
    <Main>
      <IntroductionNew />
      <CompletedProjectsNew />
      <WorkExperienceNew />
      <EducationNew />
      <TechnologiesNew />
    </Main>
  )
}

export default Home
