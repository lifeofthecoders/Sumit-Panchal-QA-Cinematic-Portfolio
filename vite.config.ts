import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Sumit-Panchal-QA-Cinematic-Portfolio/',
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    open: '/Sumit-Panchal-QA-Cinematic-Portfolio/',
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
  },
});