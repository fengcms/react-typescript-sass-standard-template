#!/usr/bin/env node
/*
  自动将文件夹下所有 sass 文件引用并输出为 style.scss 的工具
*/
const fs = require('fs')
const os = require('os')
const path = require('path')
// const exec = require('child_process').exec

const isWindows = () => {
  return os.type() === 'Windows_NT'
}

// 获取所有文件并返回数组
const getAllFile = (dir, filesList = []) => {
  const files = fs.readdirSync(dir)
  files.forEach((item, index) => {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      getAllFile(path.join(dir, item), filesList)
    } else {
      filesList.push(fullPath)
    }
  })
  return filesList
}

// 计算文件所在一级文件夹的文件夹名称
const calcScssFileDir = path => {
  const tmp = path.split(isWindows() ? '\\' : '/')
  return tmp.length === 1 ? null : tmp[0]
}

// 获取所有需要自动引入的 sass 文件路径并返回数组
const getAllScss = () => {
  const allSassList = []
  getAllFile(__dirname, []).forEach(i => {
    const filePath = i.replace(`${__dirname}${isWindows() ? '\\' : '/'}`, '')
    // console.log(filePath, i)
    const suffix = filePath.split('.')[1]
    const dir = calcScssFileDir(filePath)
    if (suffix === 'scss' && dir && dir !== 'base') {
      allSassList.push(filePath)
    }
  })
  return allSassList
}

// 写入文件
const writeStyleScss = file => {
  const mainContent = fs.readFileSync(path.resolve(__dirname, './config.scss'))
  fs.writeFileSync(file, mainContent, e => console.error(e))
  getAllScss().forEach(i => {
    i = isWindows() ? i.replace(/\\/g, '/') : i
    fs.appendFileSync(file, `@import "${i}";${isWindows() ? '\r' : ''}\n`)
  })
  console.log(`${file} 生成完成`)
}

const main = () => {
  writeStyleScss(path.resolve(__dirname, './style.scss'))
  console.log(+new Date())
}

if (!module.parent) {
  main()
}

module.exports = main
