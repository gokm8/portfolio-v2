import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

// icons found at: https://react-icons.github.io/react-icons/
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import RippleLoader from '@/components/ui/RippleLoader'

function Introduction() {
  return (
    <div className='flex flex-col rounded border border-solid border-neutral-800 p-4'>
      <div className='flex flex-row items-center'>
        <div className='relative'>
          {/* rippleLoader placed behind avatar */}
          <RippleLoader className='absolute inset-0 z-0' />

          {/* avatar placed in front */}
          <Avatar className='relative z-10 h-12 w-12'>
            <AvatarImage src='https://avatars.githubusercontent.com/u/107099606?v=4' />
            <AvatarFallback>GØ</AvatarFallback>
          </Avatar>
        </div>

        {/* name + passion */}
        <div className='ml-4 flex flex-col space-y-1'>
          <h2 className='text-xl font-black text-neutral-100'>
            Gøkmen Øzbayir
          </h2>
          <p className='text-sm text-neutral-300'>
            I'm a software engineer who loves to build things.
          </p>
        </div>
      </div>

      {/* description + icons */}
      <div className='mt-4 flex items-center justify-between'>
        {/* description */}
        <p className='text-xs leading-none text-neutral-500'>
          Any inquiries? Email me @ gozbayir@hotmail.com
        </p>

        {/* ICONS */}
        <div className='flex items-center space-x-4'>
          <a
            href='https://www.linkedin.com/in/gokmenozbayir/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-100 hover:text-neutral-300'
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href='https://github.com/gokm8'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-100 hover:text-neutral-300'
          >
            <FaGithub size={20} />
          </a>
          <a
            href='https://www.linkedin.com/in/your-profile'
            target='_blank'
            rel='noopener noreferrer'
            className='text-neutral-100 hover:text-neutral-300'
          >
            <MdEmail size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Introduction
