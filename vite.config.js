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
        peakactive: resolve(__dirname, 'peakactive.html'),
      },
    },
  },
  server: {
    port: 5005,
    host: true
  }
})