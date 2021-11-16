const path = require('path')
const resolvePath = (dir) => path.join(__dirname, dir)

module.exports = {
  chainWebpack: (config) => {
    // 设置别名
    config.resolve.alias
      .set('@', resolvePath('./src'))
  }
}
