module.exports = {
  productionSourceMap: false,
  publicPath: '/txsp/',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://sy.szduopin.com',
        secure: true, // 是否为 https
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          '^/api': '' // 通过pathRewrite重写地址，将前缀/api转为/
        }
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "盛宇信达";
        return args;
      })
  },
}