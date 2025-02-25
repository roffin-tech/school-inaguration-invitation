// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title:
        process.env.PROJECT_TITLE ||
        `It is with great joy and excitement that we warmly invite you to the grand inauguration of the new building at St. Joseph's High School, Kulathoor. Your presence will make the occasion truly special!`,
      titleTemplate: '%s',
      charset: 'UTF-8',
      viewport: 'width=device-width, initial-scale=1.0',
      script: [],
    },
  },
});
