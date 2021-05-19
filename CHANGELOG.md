# 项目变更统计文档

## 2021-05-19

### Bug Fixes

1. 新增 `yarn start:win` 命令，解决项目在 Windows 系统启动报错的BUG

## 2021-05-18

### Bug Fixes

1. 解决了语言切换失效的BUG
2. 解决了路由跳转失效的BUG（跟 vue 实现不太不一样，不能层层空的下去-_-|||）

### Features

1. 页面组件加载使用 lazy 方式懒加载
2. 使用 Suspense 组件的回退函数实现 Loading
3. 新增 404 异常处理
4. 新增变更日志说明文档
5. 新增单 `tsx` 文件，多组件自动导出功能，参考 `src/components/mobile/layout/Flex.tsx` 演示文件

## 2021-05-14

1. 项目基础构架完成
2. 项目说明文档完成
