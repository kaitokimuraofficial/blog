import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
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
  plugins: [react()],
});
