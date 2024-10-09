import React from 'react'

function Education() {
  const educationalData = [
    {
      school: 'university of southern denmark, sdu',
      date: 'sep. 2022 - feb. 2026',
      education: 'bachelor of engineering, software technology'
    },
    {
      school: 'zealand academy of technologies and business',
      date: 'sep. 2018 - sep. 2020',
      education: 'ap graduate in marketing management'
    },
    {
      school: 'zealand academy of technologies and business',
      date: 'okt. 2019 - okt. 2019',
      education: 'exchange program in midwest, usa'
    }
  ]

  return (
    <div>
      <h2 className='text-lg text-neutral-100'>education 🏛️</h2>
      <hr className='my-2.5 h-px border-0 bg-neutral-800' />

      {/* educational data */}
      {educationalData.map((data, index) => (
        <div key={index} className='mb-8'>
          <div className='flex flex-col justify-between sm:flex-row'>
            <h3 className='text-sm text-neutral-300'>{data.school}</h3>
            <p className='mb-1.5 text-xs text-neutral-600 sm:text-left'>
              {data.date}
            </p>
          </div>
          <p className='text-sm text-neutral-500'>{data.education}</p>
        </div>
      ))}
    </div>
  )
}

export default Education
