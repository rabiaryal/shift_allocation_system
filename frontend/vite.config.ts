import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:8000',  // Proxy all requests starting with /api to the Django backend
    }
  },

  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
