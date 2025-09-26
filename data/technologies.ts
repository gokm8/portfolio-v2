export interface Technology {
  technology: string
  img: string
  className?: string
  alt?: string
}

// export const technologiesData: Technology[] = [
//   {
//     technology: 'html5',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
//   },
//   {
//     technology: 'css3',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
//   },
//   {
//     technology: 'tailwindcss',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg'
//   },
//   {
//     technology: 'bootstrap',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
//   },
//   {
//     technology: 'javascript',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
//   },
//   {
//     technology: 'react',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
//   },
//   {
//     technology: 'mui',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
//   },
//   {
//     technology: 'node.js',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
//   },
//   {
//     technology: 'express',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg',
//     className: 'invert-logo'
//   },
//   {
//     technology: 'postgresql',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
//   },
//   {
//     technology: 'mongodb',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
//   },
//   {
//     technology: 'c#',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
//   },
//   {
//     technology: 'java',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
//   },
//   {
//     technology: '.net core',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
//   },
//   {
//     technology: 'asp.net',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'
//   },
//   {
//     technology: 'git',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
//   },
//   {
//     technology: 'docker',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
//   },
//   {
//     technology: 'kubernetes',
//     img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg'
//   }
// ]

export const frontendTechnologies: Technology[] = [
  {
    technology: 'html5',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    technology: 'css3',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    alt: 'css3'
  },
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
  },

  {
    technology: 'tailwindcss',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
  },

  {
    technology: 'bootstrap',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg'
  },

  {
    technology: 'mui',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg'
  },
  {
    technology: 'shadcn/ui',
    img: '/programming-logos/shadcn-ui.svg',
    className: 'dark:invert'
  }
]

export const backendTechnologies: Technology[] = [
  {
    technology: 'node.js',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
  },
  {
    technology: 'express',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    className: 'dark:invert'
  },
  {
    technology: 'nextjs',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
  },
  {
    technology: 'c#',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
  },
  {
    technology: '.NET Core',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg'
  },
  {
    technology: 'ASP.NET',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg'
  },
  {
    technology: 'Java',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
  },
  {
    technology: 'entity framework',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg'
  }
]

export const databaseTechnologies: Technology[] = [
  {
    technology: 'postgresql',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg'
  },
  {
    technology: 'mysql',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg'
  },
  {
    technology: 'azure sql',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
  },
  {
    technology: 'mongodb',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg'
  }
]

export const cloundAndDevOpsTechnologies: Technology[] = [
  {
    technology: 'azure',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg'
  },
  {
    technology: 'git',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
  },
  {
    technology: 'docker',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'
  },
  {
    technology: 'kubernetes',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg'
  }
]
