import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import patternDatesPlugin from './vite-plugin-pattern-dates.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    patternDatesPlugin(), // Inject git-based dates into pattern files
    react()
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
  server: {
    port: 5005,
    host: true,
    // Vercel Functions in api/ run under `vercel dev` (npm run dev:api) on port 3005.
    proxy: {
      '/api': { target: 'http://localhost:3005', changeOrigin: false },
    },
    watch: { ignored: ['**/.vercel/**'] },
  }
})