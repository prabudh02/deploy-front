import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': {
        target: 'https://back-chi-two.vercel.app/', // Adjust this to your backend server URL
        
      },
    },
  },
  plugins: [react()],
})
