import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base './' lets the built site work from any folder or sub-path on any static host
export default defineConfig({
  base: './',
  plugins: [vue()],
})
