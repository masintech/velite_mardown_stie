import { defineConfig, defineCollection, s } from 'velite'

const posts = defineCollection({
  name: 'Post', 
  pattern: 'content/posts/**/*.md',
  schema: s.object({
    title: s.string().max(99),
    slug: s.string(),
    description: s.string().optional(),
    date: s.isodate(),
    published: s.boolean().default(false)
  })
})

export default defineConfig({
  collections: { posts }
})
