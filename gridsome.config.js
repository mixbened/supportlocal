module.exports = {
  siteName: 'Support your local',
  siteDescription: 'Gemeinsam halten wir unsere Lieblingsläden am überleben',
  templates: {
    ContentfulCafe: '/cafe/:title'
  },
  siteUrl: 'https://www.supportyourlocal.de',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: 'j9wd5upy5wxy', // required
        accessToken: 'mBAgPq-ATR_44rr4e0G_7QGVFByULKrZZW2YEF1WhXk', // required
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-141593661-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  mode: 'spa',
  build: { 
    html: { 
      minify: { 
        collapseWhitespace: true 
      }
    }
  },
  chainWebpack (config) {
    config.mode('development')
  }

}
