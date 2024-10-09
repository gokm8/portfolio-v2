'use client'

import React from 'react'
import Introduction from './components/Introduction'
import Education from './components/Education'
import Technologies from './components/Technologies'
import CurrentProjects from './components/CurrentProjects'
import CompletedProjects from './components/CompletedProjects'

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
