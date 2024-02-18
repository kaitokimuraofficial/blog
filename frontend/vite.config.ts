import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import generouted from '@generouted/react-router/plugin';

export default defineConfig({
  plugins: [react(), generouted()],
  server: {
    host: 'blog_frontend',
    port: parseInt(process.env.PORT || '3000'),
    proxy: {
      '/': {
        target: process.env.API_URL,
        changeOrigin: true,
      },
    },
  },
});
