import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kaestria.fr',
  vite: {
    plugins: [tailwindcss()],
  },
});
