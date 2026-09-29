const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Cepa Sur'
    }
  },
  devServer: {
    host: '0.0.0.0',
    allowedHosts: 'all',
    open: true
  }
})
