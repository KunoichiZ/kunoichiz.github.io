const pkg = require('./package');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Jazmine Nichols\'s website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og-description', name: 'og:description', content: pkg.description },
      { hid: 'og-title', property: 'og:title', content: 'Jazmine Nichols\'s website' },
      { hid: 'og-site_name', property: 'og:site_name', content: 'Jazmine Nichols\'s website'},
      { hid: 'og-type', property: 'og:type', content: 'website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/styles.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue-scrollto.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-132792196-1'
    }]
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
