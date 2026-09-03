export interface Technology {
  technology: string
  img: string
  className?: string
  alt?: string
}

export const frontendTechnologies: Technology[] = [
  {
    technology: 'javascript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    alt: 'javascript'
  },
  {
    technology: 'typescript',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    alt: 'typescript'
  },
  {
    technology: 'react',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    alt: 'react'
  },
  {
    technology: 'next.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
  }
]

export const backendTechnologies: Technology[] = [
  {
    technology: 'node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
  },
  {
    technology: 'c#',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
  },
  {
    technology: '.net',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
  },
  {
    technology: 'rest api',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
    alt: 'rest api'
  },
  {
    technology: 'ef core',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg',
    alt: 'entity framework core'
  }
]

export const databaseTechnologies: Technology[] = [
  {
    technology: 'postgresql',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  {
    technology: 'sql server',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg',
    alt: 'sql server'
  },
  {
    technology: 'redis',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg'
  }
]

export const cloundAndDevOpsTechnologies: Technology[] = [
  {
    technology: 'azure',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
  },
  {
    technology: 'azure devops',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
    alt: 'azure devops'
  },
  {
    technology: 'ci/cd',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg',
    alt: 'ci/cd'
  },
  {
    technology: 'docker',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  },
  {
    technology: 'git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  }
]
