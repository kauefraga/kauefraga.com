import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://kauefraga.netlify.app',
  integrations: [
    react(),
    tailwind(),
    icon({
      include: {
        mdi: ['linkedin', 'github', 'twitter', 'instagram'],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'tokyo-night',
    },
  },
  server: {
    open: true,
  },
});
