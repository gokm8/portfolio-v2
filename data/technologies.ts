const devicon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}`

export interface Technology {
  name: string
  img: string
  className?: string
}

export interface TechnologyGroup {
  id: number
  category: string
  technologies: Technology[]
}

/**
 * Logo-only by design: every item here has a recognisable mark. Capabilities
 * without one (REST API, ETL, SQL) are evidenced in the experience timeline
 * and project cards instead of being given a stand-in icon.
 */
export const technologyGroups: TechnologyGroup[] = [
  {
    id: 1,
    category: 'Languages',
    technologies: [
      {
        name: 'TypeScript',
        img: devicon('typescript/typescript-original.svg')
      },
      {
        name: 'JavaScript',
        img: devicon('javascript/javascript-original.svg')
      },
      { name: 'C#', img: devicon('csharp/csharp-original.svg') },
      { name: '.NET', img: devicon('dotnetcore/dotnetcore-original.svg') }
    ]
  },
  {
    id: 2,
    category: 'Frontend',
    technologies: [
      { name: 'React', img: devicon('react/react-original.svg') },
      {
        name: 'Next.js',
        img: devicon('nextjs/nextjs-original.svg'),
        className: 'dark:invert'
      }
    ]
  },
  {
    id: 3,
    category: 'Backend',
    technologies: [
      { name: 'Node.js', img: devicon('nodejs/nodejs-original.svg') },
      {
        name: 'EF Core',
        img: devicon('entityframeworkcore/entityframeworkcore-original.svg')
      }
    ]
  },
  {
    id: 4,
    category: 'Data',
    technologies: [
      {
        name: 'PostgreSQL',
        img: devicon('postgresql/postgresql-original.svg')
      },
      {
        name: 'SQL Server',
        img: devicon('microsoftsqlserver/microsoftsqlserver-original.svg')
      },
      { name: 'Redis', img: devicon('redis/redis-original.svg') }
    ]
  },
  {
    id: 5,
    category: 'Cloud & DevOps',
    technologies: [
      { name: 'Azure', img: devicon('azure/azure-original.svg') },
      {
        name: 'Azure DevOps',
        img: devicon('azuredevops/azuredevops-original.svg')
      },
      { name: 'Docker', img: devicon('docker/docker-original.svg') },
      { name: 'Git', img: devicon('git/git-original.svg') }
    ]
  }
]
