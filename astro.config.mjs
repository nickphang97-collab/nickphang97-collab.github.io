import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://nickphang97-collab.github.io',
  integrations: [sitemap()],
})
