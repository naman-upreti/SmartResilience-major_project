import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'frontend'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './frontend/src')
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
