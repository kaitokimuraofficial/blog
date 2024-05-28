import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const plugins = [react()];

  const defaultConfig = {
    envPrefix: 'ENV_',
    plugins,
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
          target: env.ENV_PROXY_API_URL,
          changeOrigin: true,
        },
      },
    },
  };

  return defaultConfig;
});
