import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/shared/config/setup-tests.js',
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    sourcemap: true,
  },
});
