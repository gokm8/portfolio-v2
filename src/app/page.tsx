'use client'

import React from 'react'
import Introduction from './component/Introduction'
import Education from './component/Education'
import Technologies from './component/Technologies'
import CurrentProjects from './component/CurrentProjects'
import CompletedProjects from './component/CompletedProjects'

function Home() {
  return (
    <div className='container space-y-10 py-16'>
      <Introduction />
      <Education />
      <Technologies />
      <CurrentProjects />
      <CompletedProjects />
    </div>
  )
}

export default Home
