import React, { memo } from 'react'
import { Container, Box } from 'components/craft'
import { featuredProjectsData, type Project } from 'data/projects'
import Link from 'next/link'
import Image from 'next/image'

const StatusBadge = memo(({ status }: { status: Project['status'] }) => {
  const statusConfig = {
    live: {
      label: 'Live',
      className: 'bg-green-900 text-green-300 border-green-800'
    },
    'in-development': {
      label: 'In Development',
      className: 'bg-blue-900 text-blue-300 border-blue-800'
    },
    completed: {
      label: 'Completed',
      className: 'bg-neutral-800 text-neutral-300 border-neutral-700'
    },
    archived: {
      label: 'Archived',
      className: 'bg-yellow-900 text-yellow-300 border-yellow-800'
    }
  }

  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  )
})

StatusBadge.displayName = 'StatusBadge'

const TechStackBadges = memo(({ techStack }: { techStack: string[] }) => (
  <div className='flex flex-wrap gap-1.5'>
    {techStack.map((tech) => (
      <span
        key={tech}
        className='inline-flex items-center rounded-sm border border-neutral-700 bg-neutral-800 px-2 py-1 text-xs font-medium text-neutral-300'
      >
        {tech}
      </span>
    ))}
  </div>
))

TechStackBadges.displayName = 'TechStackBadges'

const FeaturedProjectCard = memo(({ project }: { project: Project }) => (
  <div className='project-card'>
    {project.image ? (
      <div className='mb-4 aspect-video overflow-hidden rounded-sm bg-neutral-900'>
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          width={project.width || 800}
          height={project.height || 450}
          className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
          loading='lazy'
        />
      </div>
    ) : project.title === 'ayserenas.dk' ? (
      <div className='mb-4 flex aspect-video items-center justify-center rounded-sm bg-neutral-900'>
        <div className='text-6xl text-red-400'>❤️</div>
      </div>
    ) : project.title === 'teorionline.dk' ? (
      <div className='mb-4 flex aspect-video items-center justify-center rounded-sm bg-neutral-900'>
        <div className='text-6xl text-blue-400'>📚</div>
      </div>
    ) : null}

    <div className='mb-3 flex items-start justify-between gap-4'>
      <div className='flex-1'>
        <h3 className='project-title'>{project.title}</h3>
        {project.year && (
          <p className='mb-2 text-neutral-600'>{project.year}</p>
        )}
      </div>
      <StatusBadge status={project.status} />
    </div>

    <p className='mb-4 hyphens-auto text-justify'>{project.description}</p>

    {project.highlights && project.highlights.length > 0 && (
      <div className='mb-4'>
        <h4 className='mb-2 text-xs text-neutral-300'>key features:</h4>
        <ul className='space-y-1'>
          {project.highlights.slice(0, 3).map((highlight, index) => (
            <li key={index} className='flex items-start gap-2'>
              <span className='text-xs text-green-400'>•</span>
              <p className='text-xs'>{highlight}</p>
            </li>
          ))}
        </ul>
      </div>
    )}

    {project.techStack && project.techStack.length > 0 && (
      <div className='mb-4'>
        <h4 className='mb-2 text-xs text-neutral-300'>Tech Stack:</h4>
        <TechStackBadges techStack={project.techStack} />
      </div>
    )}

    <div className='flex flex-wrap gap-3 border-t border-neutral-800 pt-4'>
      {project.link && (
        <a
          href={project.link}
          target='_blank'
          rel='noopener noreferrer'
          className='link text-xs underline underline-offset-2'
        >
          view live site ↗
        </a>
      )}

      {project.githubLink && (
        <a
          href={project.githubLink}
          target='_blank'
          rel='noopener noreferrer'
          className='link text-xs underline underline-offset-2'
        >
          GitHub
        </a>
      )}
    </div>
  </div>
))

FeaturedProjectCard.displayName = 'FeaturedProjectCard'

function FeaturedProjects() {
  return (
    <Container>
      <h2>completed projects ✨</h2>
      <hr />

      <Box cols={1} className='lg:grid-cols-2' gap={6}>
        {featuredProjectsData.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </Box>
    </Container>
  )
}

export default memo(FeaturedProjects)
