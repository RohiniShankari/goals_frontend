// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Required for Render to access the app
    port: 5173,       // Optional, but keeps it predictable
    allowedHosts: ['goals-frontend-7wob.onrender.com'] // Allow Render's domain
  }
})

