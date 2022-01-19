const path = require("path"); //文件头部引入path
module.exports = {
  devServer: {
    open: true
  },
  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = "多品";
        return args;
      })
  },
}