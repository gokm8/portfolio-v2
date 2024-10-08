'use client'

import React from 'react'
import Introduction from './components/Introduction'
import Education from './components/Education'

function Home() {
  return (
    <section className='py-16'>
      <div className='container'>
        <div className='mb-4'>
          <Introduction />
        </div>
        <div className='mb-4'>
          <Education />
        </div>
      </div>
    </section>
  )
}

export default Home
