import { defineCollection, defineConfig, s } from 'velite';

const works = defineCollection({
  name: 'Work',
  pattern: 'work/**/*.{md,mdx}',
  schema: s.object({
    slug: s.path(),
    title: s.string(),
    description: s.string(),
    tags: s.array(s.string()),
    content: s.mdx(),
  }),
});

export default defineConfig({
  root: 'src/content',
  output: {
    clean: true,
  },
  collections: { works },
});
