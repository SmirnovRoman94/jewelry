export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/main.css'],
  
  app: {
    baseURL: '/jewelry/',
    buildAssetsDir: '_nuxt', // ← ВЕРНИ '_nuxt' (стандарт)
    head: {
      link: [
        { rel: 'stylesheet', href: '/jewelry/_nuxt/entry.css' } // если нужно форсировать
      ]
    }
  },

  // ДОБАВЬ ЭТО для production:
  nitro: {
    preset: 'static' // для статической генерации
  },

  // Убедись что Tailwind правильно собирается:
  tailwindcss: {
    cssPath: '~/assets/main.css',
    configPath: 'tailwind.config.js'
  }
})