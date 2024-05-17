import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  envPrefix: 'ENV_',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      cmp: path.resolve(__dirname, './src/components'),
      img: path.resolve(__dirname, 'src/images'),
    },
  },
  server: {
    host: true,
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://blog_backend:8080',
        changeOrigin: true,
      },
    },
  },
});
