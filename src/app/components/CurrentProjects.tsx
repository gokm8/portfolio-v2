import React from 'react'

function CurrentProjects() {
  const currentProjectsData = [
    {
      title: 'project: qr generator',
      description: "a simple tool to generate qr codes from text or url's."
    },
    {
      title: 'project: pending',
      description: 'pending'
    }
  ]

  return (
    <div>
      <h2 className='text-lg text-neutral-100'>current projects 🛠️</h2>
      <hr className='my-2.5 h-px border-0 bg-neutral-800' />

      {/* current projects data */}
      {currentProjectsData.map((data, index) => (
        <div key={index} className='mb-8'>
          <div className='flex flex-col'>
            <h3 className='text-sm text-neutral-300'>{data.title}</h3>
            <p className='text-sm text-neutral-500'>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CurrentProjects
