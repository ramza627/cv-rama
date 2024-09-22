export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    '~/plugins/fontawesome.js' // Letakkan plugin di sini, bukan di postcss
  ],
})
