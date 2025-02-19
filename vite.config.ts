import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './dist',
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      pages: resolve(__dirname, './src/pages'),
    },
  },
});
