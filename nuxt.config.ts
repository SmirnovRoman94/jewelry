export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  
  ssr: true, //(false) ← ВАЖНО для статики!
  
  app: {
    baseURL: process.env.NUXT_BASE_URL || '/jewelry/',
    buildAssetsDir: '_nuxt',
  },

  nitro: {
    preset: 'static'
  }
})