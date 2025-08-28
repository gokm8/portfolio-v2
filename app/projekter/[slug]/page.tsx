import React from 'react'
import { notFound } from 'next/navigation'
import { Main, Section, Container, Box } from 'components/craft'
import { allProjects, type Project } from 'data/projects'
import Link from 'next/link'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const StatusBadge = ({ status }: { status: Project['status'] }) => {
  const statusConfig = {
    live: {
      label: 'Live',
      className: 'bg-green-100 text-green-800 border-green-200'
    },
    'in-development': {
      label: 'In Development',
      className: 'bg-blue-100 text-blue-800 border-blue-200'
    },
    completed: {
      label: 'Completed',
      className: 'bg-gray-100 text-gray-800 border-gray-200'
    },
    archived: {
      label: 'Archived',
      className: 'bg-yellow-100 text-yellow-800 border-yellow-200'
    }
  }

  const config = statusConfig[status]

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium ${config.className}`}
    >
      {config.label}
    </span>
  )
}

const TechStackSection = ({ techStack }: { techStack: string[] }) => (
  <div className='mb-8'>
    <h2 className='mb-4 text-xl font-semibold'>tech stack</h2>
    <div className='flex flex-wrap gap-2'>
      {techStack.map((tech) => (
        <span
          key={tech}
          className='inline-flex items-center rounded-lg border border-gray-200 bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-800'
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = allProjects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <Main>
      <Section>
        <Container>
          {/* Back button */}
          <div className='mb-8'>
            <Link
              href='/'
              className='inline-flex items-center text-gray-600 transition-colors hover:text-gray-900'
            >
              <svg
                className='mr-2 h-4 w-4'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M15 19l-7-7 7-7'
                />
              </svg>
              Back to Portfolio
            </Link>
          </div>

          {/* Project Header */}
          <div className='mb-8'>
            <div className='mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
              <div>
                <h1 className='mb-2 text-3xl font-bold text-gray-900'>
                  {project.title}
                </h1>
                {project.year && (
                  <p className='text-lg text-gray-600'>{project.year}</p>
                )}
              </div>
              <StatusBadge status={project.status} />
            </div>

            <p className='text-lg leading-relaxed text-gray-700'>
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          {project.image && (
            <div className='mb-8 overflow-hidden rounded-lg border border-gray-200'>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className='h-auto w-full'
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className='mb-8 flex flex-wrap gap-4'>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition-colors hover:bg-gray-800'
              >
                Visit Live Site
                <svg
                  className='ml-2 h-4 w-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
              </a>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center rounded-lg bg-gray-100 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-200'
              >
                View on GitHub
                <svg
                  className='ml-2 h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            )}
          </div>

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <TechStackSection techStack={project.techStack} />
          )}

          {/* Key Features/Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className='mb-8'>
              <h2 className='mb-4 text-xl font-semibold'>
                Key Features & Highlights
              </h2>
              <ul className='space-y-3'>
                {project.highlights.map((highlight, index) => (
                  <li key={index} className='flex items-start gap-3'>
                    <span className='mt-0.5 text-lg text-green-500'>✓</span>
                    <span className='leading-relaxed text-gray-700'>
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project Details */}
          <div className='border-t border-gray-200 pt-8'>
            <h2 className='mb-4 text-xl font-semibold'>Project Details</h2>
            <Box cols={1} className='sm:grid-cols-2' gap={6}>
              <div>
                <h3 className='mb-2 font-medium text-gray-900'>Category</h3>
                <p className='capitalize text-gray-600'>
                  {project.category.replace('-', ' ')}
                </p>
              </div>

              <div>
                <h3 className='mb-2 font-medium text-gray-900'>Status</h3>
                <StatusBadge status={project.status} />
              </div>

              {project.year && (
                <div>
                  <h3 className='mb-2 font-medium text-gray-900'>Year</h3>
                  <p className='text-gray-600'>{project.year}</p>
                </div>
              )}
            </Box>
          </div>
        </Container>
      </Section>
    </Main>
  )
}

// Generate static params for all projects with slugs
export async function generateStaticParams() {
  return allProjects
    .filter((project) => project.slug)
    .map((project) => ({
      slug: project.slug
    }))
}
