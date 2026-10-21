import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` to the real production domain before deploying —
// it feeds canonical URLs, Open Graph tags and the sitemap.
export default defineConfig({
  site: 'https://proparking.mx',
  server: { port: 4321 },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
