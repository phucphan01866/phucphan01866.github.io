import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Base path is '/' for user/organization GitHub Pages sites (username.github.io)
  // For project sites (username.github.io/repository-name), change to '/repository-name/'
  base: '/',
})
