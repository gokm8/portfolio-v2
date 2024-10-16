import { motion } from 'framer-motion'

interface RippleLoaderProps {
  className?: string
}

export default function RippleLoader({ className = '' }: RippleLoaderProps) {
  const rippleVariants = {
    start: {
      opacity: 1,
      scale: 0
    },
    end: {
      opacity: 0,
      scale: 3.3
    }
  }

  const rippleTransition = {
    duration: 2,
    ease: 'easeInOut',
    repeat: Infinity,
    repeatDelay: 1
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className='relative h-6 w-6'>
        <motion.div
          className='absolute h-full w-full rounded-full bg-blue-700 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={rippleTransition}
        ></motion.div>
        <motion.div
          className='absolute h-full w-full rounded-full bg-blue-700 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={{ ...rippleTransition, delay: 0.5 }}
        ></motion.div>
        <motion.div
          className='absolute h-full w-full rounded-full bg-blue-700 opacity-0'
          variants={rippleVariants}
          initial='start'
          animate='end'
          transition={{ ...rippleTransition, delay: 1 }}
        ></motion.div>
      </div>
    </div>
  )
}
