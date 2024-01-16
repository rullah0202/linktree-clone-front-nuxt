// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  pages: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    'nuxt-icon',
    '@vite-pwa/nuxt',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  // pwa: {
  //   manifest: {
  //     name: 'Linktree Clone',
  //     short_name: 'Linktree Clone',
  //     description: 'This is Linktree Clone',
  //     theme_color: '#32CD32',
  //     icons: [
  //       {
  //         src: "pwa-192x192.png",
  //         sizes: "192x192",
  //         type: "image/png"
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png"
  //       },
  //     ]
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: "module"
  //   }
  // },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
    }
  }
})
