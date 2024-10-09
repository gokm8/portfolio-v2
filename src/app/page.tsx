'use client'

import React from 'react'
import Introduction from './components/Introduction'
import Education from './components/Education'
import Technologies from './components/Technologies'
import CurrentProjects from './components/CurrentProjects'

function Home() {
  return (
    <section className='py-16'>
      <div className='container'>
        <div className='mb-10'>
          <Introduction />
        </div>
        <div className='mb-10'>
          <Education />
        </div>
        <div className='mb-10'>
          <Technologies />
        </div>
        <div className='mb-10'>
          <CurrentProjects />
        </div>
      </div>
    </section>
  )
}

export default Home
