import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://www.gokm8.xyz'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }))

  const routes = ['', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.9
  }))

  return [...routes, ...blogs]
}
