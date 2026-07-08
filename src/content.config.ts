import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    topic: z.string(),
    tool: z.string(),
    date: z.coerce.date(),
    placeholder: z.boolean().default(false),
  }),
})

export const collections = { guides }
