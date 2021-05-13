const fs = require('fs')
const build = require('./build.js')
// 需要忽略的文件夹
const ignores = '.git'.split(',')

// 有时候修改文件后会连续回调两次，用这个时间过滤掉第二次重复的回调
let lastUpdateTime = 0

function watch (dir) {
  fs.watch(dir, (event, filename) => {
    if (ignores.includes(filename)) return
    const diff = Date.now() - lastUpdateTime
    lastUpdateTime = Date.now()
    if (diff < 100) return
    // TODO: do anything ...
    build() // 编译 style.scss
  })

  // 原生监控不能监控到子文件夹中的文件改变事件，遍历之
  const files = fs.readdirSync(dir)
  for (let i = 0; i < files.length; i++) {
    if (ignores.includes(files[i])) continue
    const file = dir + '/' + files[i]
    const stat = fs.statSync(file)
    if (stat.isDirectory()) {
      watch(file)
    }
  }
}

// 开始监控当前目录
build()
watch(__dirname)
console.log('start watch...')
