export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  store: {
    // Modules to include in the store
    // (Make sure to include 'metaemails' here)
    // modules: ['metaemails'],
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Megan',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loadingIndicator: {
    name: 'circle',
    color: '#ffffff00',
    background: 'white'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    '@/assets/css/main.css',
    '@/assets/css/grid.css',
    '@/assets/css/images.css',
    '@/assets/css/transitions.css',
    '@/assets/css/typography.css',
    // SCSS file in the project
    // '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@plugins/masonry', mode: 'client' },
    { src: '@plugins/lazy', mode: 'client' },
    { src: '@plugins/slider', mode: 'client' },
    '~/plugins/preview.client.js',
  ],
  gsap: {
    /* Module Options */
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // "@nuxtjs/sanity",
    // '@nuxtjs/sanity/module',
    'nuxt-gsap-module',
    '@nuxtjs/sanity/module',
    '@nuxt/image'
  ],

  sanity: {
    // module options
    projectId: 'xezmn8bb',
    apiVersion: '2023-09-05',
    useCdn: false, 
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isDev, isClient }) {
      // Check if the IGNORE_BUILD_ERRORS environment variable is set to true
      if (process.env.IGNORE_BUILD_ERRORS === 'true') {
        // Skip some build steps or perform custom logic here
      }
    },
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  image: {
    sanity: {
      projectId: 'xezmn8bb',
      dataset: 'production',
      useCdn: false, 
    },
  },
}
