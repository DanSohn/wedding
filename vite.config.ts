import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.tsx'),
      name: 'CarinaDanielWeddingPlanning',
      formats: ['es'],
      fileName: 'index',
    },
  },
  resolve: {
    alias: {
      assets: resolve(__dirname, './src/assets'),
      pages: resolve(__dirname, './src/pages'),
    },
  },
});
