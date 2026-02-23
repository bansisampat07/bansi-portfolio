
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // For custom domains, the base path should be the root '/'
  base: '/',
  server: {
    port: 3000,
  },
  define: {
    // This shims process.env to prevent ReferenceErrors in the browser
    'process.env': {
      API_KEY: JSON.stringify(process.env.API_KEY || '')
    }
  }
});
