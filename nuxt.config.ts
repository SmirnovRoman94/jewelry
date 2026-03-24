export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  
  ssr: true, // ← ВАЖНО для статики!
  
  app: {
    baseURL: '/', // путь названия репозитория
    buildAssetsDir: '_nuxt' 
  },

  nitro: {
    preset: 'static'
  }
})