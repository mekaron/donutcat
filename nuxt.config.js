
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Roboto:100,300,400,400italic,700' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Patua+One:100,300,400,400italic,700' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Lato:400,400italic,700,700italic,900' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=DM+Sans:100,300,400,400italic,700,700italic,900' },
      { rel: 'stylesheet', href: 'http://fonts.googleapis.com/css?family=Titan+One:100,300,400,400italic,700,700italic,900' }
    ],
    script: [
        {url: '@/assets/js/jquery-2.1.4.min.js'},
    ],
    bodyAttrs: {
      class: 'home page-template-default page template-slider color-custom style-default button-round layout-full-width no-content-padding no-shadows header-transparent header-fw minimalist-header-no sticky-tb-color ab-hide subheader-both-left menu-link-color menuo-no-borders footer-copy-center mobile-tb-hide mobile-side-slide mobile-mini-mr-ll tablet-sticky mobile-header-mini mobile-sticky'
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
     '@/assets/css/global.css',
     '@/assets/content/icecream2/css/structure.css',
     '@/assets/content/icecream2/css/icecream2.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
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
