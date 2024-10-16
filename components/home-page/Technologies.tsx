import React from 'react'
import Image from 'next/image'
import { Box, Container } from 'components/craft'

function Technologies() {
  const technologiesData = [
    {
      technology: 'html5',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
    },
    {
      technology: 'css3',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
    },
    {
      technology: 'tailwindcss',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg'
    },
    {
      technology: 'bootstrap',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
    },
    {
      technology: 'javascript',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
    },
    {
      technology: 'react',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    },
    {
      technology: 'mui',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
    },
    {
      technology: 'node.js',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
    },
    {
      technology: 'express',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
      className: 'invert-logo'
    },
    {
      technology: 'postgresql',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
    },
    {
      technology: 'mongodb',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
    },
    {
      technology: 'c#',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
    },
    {
      technology: 'java',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
    },
    {
      technology: '.net core',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
    },
    {
      technology: 'asp.net',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'
    },
    {
      technology: 'git',
      img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
    }
  ]

  return (
    <Container>
      <h2 className='text-lg text-neutral-100'>technologies 💡</h2>
      <hr className='my-2.5 h-px border-0 bg-neutral-800' />

      {/* technologies data */}
      <Box cols={{ sm: 3, md: 4 }} rows={{ sm: 3, md: 4 }} gap={12}>
        {technologiesData.map((data, index) => (
          <Box
            key={index}
            direction='col'
            className='items-center justify-center opacity-65 hover:opacity-100'
          >
            <Image
              src={data.img}
              alt={data.technology}
              width={80}
              height={80}
              priority={false}
              className=''
            />
            <p className='mt-2 text-sm text-neutral-500'>{data.technology}</p>
          </Box>
        ))}
      </Box>
    </Container>
  )
}

export default Technologies
