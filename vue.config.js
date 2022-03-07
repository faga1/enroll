const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
    configureWebpack: {
      plugins: [
        AutoImport({
          resolvers: [ElementPlusResolver()],
        }),
        Components({
          resolvers: [ElementPlusResolver()],
        }),
      ],
    },
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    },
    devServer: {
      port: 8080,
      // proxy: { // 设置代理
      //     '/api': {
      //         target: 'http://www.xxxxx.com/',
      //         changeOrigin: true,
      //         pathRewrite: {
      //             '^/api': '/api'
      //         }
      //     }
      // },
      disableHostCheck: true
  },
}