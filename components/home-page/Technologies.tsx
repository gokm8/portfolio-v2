import React, { memo } from 'react'
import Image from 'next/image'
import { Box, Container } from 'components/craft'
// import { technologiesData } from 'data/technologies'

const TechnologyCard = memo(
  ({
    technology,
    img,
    className
  }: {
    technology: string
    img: string
    className?: string
  }) => (
    <Box
      direction='col'
      className='items-center justify-center transition-all duration-300 hover:scale-110 hover:opacity-100'
      role='listitem'
    >
      <Image
        src={img}
        alt={`${technology} icon`}
        width={80}
        height={80}
        loading='lazy'
        className={className}
      />
      <p className='mt-2 text-center'>{technology}</p>
    </Box>
  )
)

TechnologyCard.displayName = 'TechnologyCard'

function Technologies() {
  return (
    <Container>
      <h2>technologies 💡</h2>
      <hr />

      {/* <Box
        cols={{ sm: 3, md: 4 }}
        rows={{ sm: 3, md: 4 }}
        gap={12}
        role='list'
        aria-label='Technologies grid'
      > */}
      {/* {technologiesData.map((data) => (
          <TechnologyCard key={data.technology} {...data} />
        ))} */}
      {/* </Box> */}
    </Container>
  )
}

export default memo(Technologies)
