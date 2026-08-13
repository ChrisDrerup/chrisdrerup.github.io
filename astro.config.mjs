import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://chrisdrerup.github.io',
  base:
    process.env.NODE_ENV === 'production'
      ? '/christiandrerup.github.io'
      : '',
  integrations: [mdx(), tailwind()]
});