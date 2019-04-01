const path = require('path')

module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  // configureWebpack: (config) => {
  //   Object.assign(config, {
  //     // 开发生产共同配置
  //     resolve: {
  //         alias: {
  //             '@': path.resolve(__dirname, './src'),
  //             '@c': path.resolve(__dirname, './src/components')
  //         }
  //     }
  //   })
  // }
}