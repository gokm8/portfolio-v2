'use client'

import React from 'react'
import Introduction from './component/home-page/Introduction'
import Education from './component/home-page/Education'
import Technologies from './component/home-page/Technologies'
import CurrentProjects from './component/home-page/CurrentProjects'
import CompletedProjects from './component/home-page/CompletedProjects'

function Home() {
  return (
    <div className='container mb-32 space-y-10 py-16 sm:mb-4'>
      <Introduction />
      <Education />
      <Technologies />
      <CurrentProjects />
      <CompletedProjects />
    </div>
  )
}

export default Home
