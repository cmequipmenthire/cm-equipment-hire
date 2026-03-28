import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';
import node from '@astrojs/node';

const isDev = process.env.NODE_ENV !== 'production' && !process.argv.includes('build');

export default defineConfig({
  output: 'static',
  site: 'https://cmequipmenthire.com.au',
  adapter: isDev ? node({ mode: 'standalone' }) : undefined,
  integrations: [react(), sitemap(), ...(isDev ? [keystatic()] : [])],
  vite: {
    plugins: [tailwindcss()],
  },
});
