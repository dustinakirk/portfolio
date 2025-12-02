import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import patternDatesPlugin from './vite-plugin-pattern-dates.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    patternDatesPlugin(), // Inject git-based dates into pattern files
    react()
  ],
  server: {
    port: 5005,
    host: true
  }
})