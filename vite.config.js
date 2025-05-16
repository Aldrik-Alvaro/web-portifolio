import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/web-portifolio/', // <- coloque aqui o nome do seu repositório
  plugins: [vue()],
})
