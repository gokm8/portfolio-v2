import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  link?: string
  githubRepoLink?: string
  /** Short context line, e.g. "Bachelor's Project, University of Southern Denmark" */
  context?: string
  /** Comma-separated tech stack, e.g. "React, Node.js, MySQL" */
  techStack?: string
}

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content
    }
  })
}

/** All posts, newest first. */
export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts')).sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )
}

export type BlogPost = ReturnType<typeof getBlogPosts>[number]

/** Project dates are month-precise, so "Aug 2025" rather than a fake day. */
export function formatDate(date: string) {
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  return new Date(date).toLocaleString('en-us', {
    month: 'short',
    year: 'numeric'
  })
}

/** Frontmatter stores bare hosts as well as full URLs. */
export function toHref(url: string) {
  return url.startsWith('http') ? url : `https://${url}`
}

/** Hostname without www, e.g. "teorionline.dk". */
export function displayHost(url: string) {
  return new URL(toHref(url)).hostname.replace(/^www\./, '')
}

/** A YouTube link is a demo recording, not a live site. */
export function isVideoLink(url: string) {
  return /(^|\.)(youtube\.com|youtu\.be)$/.test(displayHost(url))
}

export function splitTechStack(techStack?: string) {
  return (techStack ?? '')
    .split(',')
    .map((tech) => tech.trim())
    .filter(Boolean)
}
