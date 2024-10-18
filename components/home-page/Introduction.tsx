import React, { useState, useEffect, useCallback } from 'react'
import { useToast } from 'hooks/use-toast'

// icons found at: https://react-icons.github.io/react-icons/
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { Container } from 'components/craft'
import RippleLoader from 'components/ui/RippleLoader'
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar'

function Introduction() {
  const { toast } = useToast()
  const [isClicked, setIsClicked] = useState(false)

  // function to copy email to clipboard
  const copyEmailToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText('gozbayir@hotmail.com')
      .then(() => {
        toast({
          title: 'Email has been copied to clipboard',
          description: 'You can email me regarding any inquiries.',
          variant: 'success'
        })
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err)
        toast({
          title: 'Failed to copy email',
          description: 'Something went wrong. Please try again.',
          variant: 'destructive'
        })
      })
  }, [toast])

  // useEffect to copy email to clipboard
  useEffect(() => {
    if (isClicked) {
      copyEmailToClipboard()
      setIsClicked(false)
    }
  }, [isClicked, copyEmailToClipboard])

  return (
    <Container>
      <div className='rounded-md border border-neutral-800 p-4'>
        <div className='flex flex-row items-center'>
          <div className='relative'>
            {/* RippleLoader placed behind avatar */}
            <RippleLoader className='absolute inset-0 z-0' />

            {/* avatar placed in front */}
            <Avatar className='relative z-10 h-12 w-12'>
              <AvatarImage src='https://avatars.githubusercontent.com/u/107099606?v=4' />
              <AvatarFallback>GØ</AvatarFallback>
            </Avatar>
          </div>

          {/* name + passion */}
          <div className='ml-4 flex flex-col space-y-1'>
            <h1>Gøkmen Øzbayir</h1>
            <p className='text-sm text-neutral-300'>
              I&rsquo;m a software engineer who loves to build things.
            </p>
          </div>
        </div>

        {/* description + icons */}
        <div className='mt-4 flex items-center justify-between'>
          {/* description */}
          <p>Any inquiries? Email me @ gozbayir@hotmail.com</p>

          {/* icons */}
          <div className='flex items-center space-x-4'>
            <a
              href='https://www.linkedin.com/in/gokmenozbayir/'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href='https://github.com/gokm8'
              target='_blank'
              rel='noopener noreferrer'
              className='link'
            >
              <FaGithub size={20} />
            </a>
            <a className='link' onClick={() => setIsClicked(true)}>
              <MdEmail size={24} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Introduction
