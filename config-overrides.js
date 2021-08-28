const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')
function resolve (dir) {
  return path.resolve(__dirname, dir)
}

/**
 * @param target: 要遍历的对象
 * @param name: 插件名
 * @param callback: 回调函数，第一个参数为该插件对象
 * @return null
 */
function invade (target, name, callback) {
  target.forEach(
    item => {
      if (item.constructor.name === name) {
        callback(item)
      }
    }
  )
}

module.exports = {
  paths: function (paths) {
    paths.appBuild = resolve('./dist')
    return paths
  },
  webpack: override(
    addWebpackAlias({
      '@': resolve('./src')
    }),
    config => {
      if (process.env.NODE_ENV === 'production') {
        config.devtool = false
        invade(config.optimization.minimizer, 'TerserPlugin', (e) => {
          // 去除 LICENSE.txt
          e.options.extractComments = false
          // 去除生产环境 console.log
          e.options.terserOptions.compress.drop_console = true
        })
      }
      return config
    }
  )
}
