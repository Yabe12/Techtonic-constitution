import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import dotenv from 'dotenv';  // Import dotenv

// Load environment variables manually
dotenv.config();  // This will load the variables from .env into process.env

console.log('VITE_ADMIN_PASSWORD in vite.config.js:', process.env.VITE_ADMIN_PASSWORD);  // Log to check if the variable is loaded

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    outDir: 'dist',
  },
  define: {
    'import.meta.env.VITE_ADMIN_PASSWORD': JSON.stringify(process.env.VITE_ADMIN_PASSWORD),
  },
});
