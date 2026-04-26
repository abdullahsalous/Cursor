import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves your site from /<repo>/, not from /
  // If your repo name is different, update this value to "/<your-repo-name>/"
  base: '/my-react-app/',
  plugins: [react()],
})
