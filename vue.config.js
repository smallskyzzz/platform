const path = require('path')
const resolvePath = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@', resolvePath('./src'))

    config.plugins.delete('prefetch')
  },
  // 基本路径
  publicPath: "./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径
  outputDir: "dist",  //打包时生成的生产环境构建文件的目录
  assetsDir: 'static',  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
}
