// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  app: {
    baseURL: '/jewelry/', // ЗАМЕНИ на имя репозитория!
    buildAssetsDir: 'assets',
  },
})