// astro.config.js

import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Site configuration
  site: 'https://www.leadgenies.de',

  // Astro integrations
  integrations: [
    react(),
    sitemap({
      filter: (page) => page !== undefined && !page.includes('admin') && !page.includes('404') && !page.includes('termin-gebucht'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],

  // Output configuration - static site
  output: 'static',

  // No trailing slashes
  trailingSlash: "never",

  // Build options
  build: {
    inlineStylesheets: 'auto',
  },

  // Vite configuration
  vite: {
    plugins: [tailwindcss()],
  },
});
