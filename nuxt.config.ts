export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  
  ssr: false, // ← ВАЖНО для статики!
  
  app: {
    baseURL: '/jewelry/', // путь названия репозитория а когда будем собирать убираем  /jewelry
    buildAssetsDir: '_nuxt' 
  },

  nitro: {
    preset: 'static'
  }
})