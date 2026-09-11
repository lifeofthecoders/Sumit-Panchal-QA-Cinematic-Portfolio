import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/Sumit-Panchal-QA-Cinematic-Portfolio/',
  plugins: [react(), tailwindcss()],
});