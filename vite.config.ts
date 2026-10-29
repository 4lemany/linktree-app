import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Serve the app at root when deployed
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // simple chunking for this small app
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  }
});
