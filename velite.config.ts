import { defineCollection, defineConfig, s } from 'velite';

const works = defineCollection({
  name: 'Work',
  pattern: 'work/**/*.{md,mdx}',
  schema: s.object({
    title: s.string(),
    link: s.string(),
    tags: s.array(s.string()),
    priority: s.number(),
  }),
});

export default defineConfig({
  root: 'src/content',
  output: {
    clean: true,
  },
  collections: { works },
});
