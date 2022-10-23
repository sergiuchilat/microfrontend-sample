import { fileURLToPath, URL } from 'node:url'
import federation from "@originjs/vite-plugin-federation"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      vueJsx(),
      federation({
        name: 'user-cabinet',
        filename: 'remoteEntry.js',
        remotes:{
          nav: 'http://localhost:3002/remoteEntry.js',
        },
        shared: ['vue']
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
