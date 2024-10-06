import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],  // React plugin for Vite
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],  // PostCSS plugins (Tailwind CSS and autoprefixer)
    },
  },
  build: {
    outDir: 'dist',  // Set your custom output directory for the build
  },
});
