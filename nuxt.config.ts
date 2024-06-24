// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'dayjs-nuxt',
    'nuxt-svgo',
    '@use-wagmi/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  colorMode: {
    preference: 'light',
  },
  googleFonts: {
    families: {},
  },
  css: ['~/assets/css/main.css'],
  plugins: [
    "~/plugins/global.js",
  ],
  ui: {
    global: true,
  },
  svgo: {
    autoImportPath: './assets/icons',
    componentPrefix: 'Icon',
  },
  imports: {
    autoImport: true,
  },
  components: [
    { path: '~/components/charts', pathPrefix: false },
    { path: '~/components/pages', prefix: '' },
    '~/components',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'Tanssi',
      meta: [
        {
          charset: 'utf-8',
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          hid: 'apple-mobile-web-app-status-bar-style',
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'apple-mobile-web-app-title', content: 'NFT' },
        {
          hid: 'description',
          content: 'NFT',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js',
          type: 'text/javascript',
        },
        { src: 'https://terminal.jup.ag/main-v2.js', type: 'text/javascript' },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js',
          integrity:
            'sha512-Eak/29OTpb36LLo2r47IpVzPBLXnAMPAVypbSZiZ4Qkf8p/7S/XRG5xp7OKWPPYfJT6metI+IORkR5G8F900+g==',
          crossorigin: 'anonymous',
          referrerpolicy: 'no-referrer',
        },
        {
          src: 'https://code.jquery.com/jquery-3.7.0.min.js',
          type: 'text/javascript',
        },
        {
          src: 'https://embed.hel.io/assets/index-v1.js',
          type: 'module',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
})
