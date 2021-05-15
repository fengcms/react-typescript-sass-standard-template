# react-typescript-sass-standard-template

## 项目简介

由于 `Create React App` 脚手架创建的项目过于简陋，没有集成诸如 `eslint` 等工具，致使每次在开发 `react` 项目的时候，就要颇费一番周折。针对这种不便，我搞了这个模板仓库。

### 我的构建思想

1. `css` 和 `js` 分离。我很不喜欢在 `js` 中写 `css`。所以，我在项目中构建了 `style` 文件夹，所有的 `scss` 文件均放在此处。然后在项目入口中加以引用，即可。需要注意的是，这样搞，`class` 命名就要非常规范，否则容易产生冲突。一般来说，采用`BEM`命名即可。当然，也可简化一下，适合自己的团队即可。
2. 自动注册组件，避免大段的 `import`。这点我没办法做得像 `vue` 一样，无需 `import`（使用 `vue.use()`），但我做到了简化并不影响普通引入的使用方式。
3. 多语言文件是可以拆分的，并且自动引入的。
4. 移动和PC端是分离。

当然，虽然我做了这些，如果你不喜欢的话，可以统统不要，删除即可。

## 运行命令

在项目文件夹内，运行如下命令：

```bash
# 安装依赖
yarn

# 运行项目 (默认运行于 8000 端口，可在 package.json 文件中修改)
yarn start

# 测试命令
yarn test

# 编译项目 （项目编译后，文件将在 dist 目录）
yarn build

# 编译 scss 文件（后面详细说明）
yarn style

# 实时编译 scss 文件
yarn watch
```

## 集成功能说明

- 项目基于 `react` 构建。
  - [React 官方网站](https://reactjs.org/)
- 采用 `Create React App` 创建。
  - [Create React App 官方网站](https://github.com/facebook/create-react-app)
- 采用 `eslint` 校验代码，代码风格为 `standard`
  - `standard` 风格的特点是很清晰的，如不要分号，2个空格缩进等。
  - 配合 `.eslintrc.js` 文件，已实现 Atom 和 WebStorm 编辑器的自动格式化代码
  - [StandardJS 官方网站](https://standardjs.com/readme-zhcn.html)
- 采用 `customize-cra` 实现对 `webpack` 的配置注入
  - 配置文件为 `config-overrides.js`
  - 新增别名 `@` 指向 `/src` 目录。
    - 如要新增更多别名，要同时维护 `config-overrides.js` 文件和 `tsconfig.paths.json` 文件。
  - 生产代码编译目录调整为 `/dist` 目录。
    - 不喜可移除或改名，仅作为配置示例。
  - 去除生产环境 `console.log` 等
  - [customize-cra 官方网站](https://github.com/arackaf/customize-cra#readme)
- 采用 `react-router-dom` 实现路由。
  - [react-router-dom 官方网站](https://reactrouter.com/web/guides/quick-start)
- 采用 `classnames` 工具，方便处理 `className`。
  - [classnames 官方网站](https://github.com/JedWatson/classnames#readme)
- 采用 `i18next` 实现国际化。
  - [i18next 官方网站](https://www.i18next.com/)
  - [react-i18next 官方网站](https://react.i18next.com/)
- 采用 `sass` 为 `css` 预编译语言。
  - [sass-lang 官方网站](https://sass-lang.com/)

## 目录说明

### 根目录说明

```
├── README.md
├── config-overrides.js
├── package.json
├── public                  入口以及静态资源目录
│   ├── favicon.ico
│   ├── index.html            入口 index.html
│   └── rem.js                移动端适配 rem js
├── src                     源码
├── tsconfig.json           TS 配置
├── tsconfig.paths.json     别名配置文件  
├── yarn-error.log
└── yarn.lock
```

### src 目录说明
```
├── index.tsx                 项目入口文件
├── react-app-env.d.ts        react ts 类型配置文件
├── reportWebVitals.ts        性能检查
├── components                组件文件夹
│   ├── index.ts                组件自动加载入口文件
│   ├── common                  移动端和PC端都需要使用的组件存放文件夹
│   │   └── SelectLang.tsx        切换语言演示组件
│   ├── mobile                  移动端组件文件夹
│   │   └── layout
│   │       └── layout.tsx        移动端组件演示组件
│   └── web                     PC 端组件文件夹
│       └── view                  任意深度的组件，均可自动引入
│           └── Home
│               └── count.tsx     hooks 使用演示组件
├── config                    配置参数文件夹
│   └── index.ts                配置入口演示文件
├── contexts                  自定义 contexts 文件夹
├── hooks                     自定义 hooks 文件夹
│   └── useInterval.ts          定时器 hook 演示文件
├── lang                      多语言文件夹
│   ├── index.ts                多语言入口文件
│   └── languages               多语言配置文件
│       ├── EN                    英语配置文件夹
│       │   └── home.ts             英语配置演示文件
│       ├── EN.ts                 英语配置入口文件
│       ├── ZH-CN
│       │   └── home.ts
│       └── ZH-CN.ts
├── state                     状态目录，预留
│   └── README.md
├── style                     scss 样式目录
│   ├── base                    基础 scss 文件目录
│   │   ├── _animation.scss       演示文件，下划线开头，表示不被独立编译
│   │   ├── _base.scss
│   │   ├── _color.scss
│   │   ├── _input.scss
│   │   ├── _main.scss
│   │   ├── _mixin.scss
│   │   ├── _mobile.scss
│   │   └── _reset.scss
│   ├── build.js                将所有 scss 文件集合生成 style.scss 的脚本文件
│   ├── config.scss             基础配置 scss 文件
│   ├── style.scss              生成后的 style.scss 文件，项目入口中引用他即可
│   └── watch.js                自动编译脚本 yarn watch 命令运行
├── utils                     工具目录
│   └── tools.ts                演示文件
└── views                     视图目录
    ├── App.tsx                 App 入口文件
    ├── mobile                  移动端视图文件目录
    │   ├── About.tsx             演示文件
    │   ├── Home.tsx
    │   └── index.tsx             移动端入口文件
    └── web                     PC端视图文件目录
        ├── About.tsx
        ├── Home.tsx
        └── index.tsx             PC端入口文件
```

## 自动组件说明

我比较喜欢这种方式，但是这是有优点，也有缺点的。你需要根据自己的事情情况加以判断。

**优点**

使用简便，代码量少，引用多个组件时也只要 `import` 一条即可。

**缺点**

1. 使用自动组件后，WebStorm 等 IDE 是无法通过你的引用自动跳转到该组件的。
2. 不能有重名的文件，否则后面的会取代前面的。

**如何克服缺点**

采用规范的目录组织方式以及组件命名方式，使后续开发者或者自己可以根据组件的名称等信息，迅速定位到组件文件。

> 越灵活，则不可控因素就越多，就越需要一定的规则去规避风险。我喜欢规则，但不喜欢限制，与诸君共勉。

### 新建自动注册组件

在 `@/components` 目录内，任意层级，任意位置，建立 `.tsx` 为后缀的组件文件，像普通组件一样编写即可。

以一个简单的组件为例子：

```tsx
import React, { FC } from 'react'
import classnames from 'classnames'

interface Props {
  className?: string
  children?: React.ReactElement | React.ReactElement[]
}

const Components: FC<Props> = ({ className = '', children }) => {
  return (
    <div className={classnames('mobile-layout', className)}>
      {children}
    </div>
  )
}

export default Components

// 上面的和普通组件一样，下面的代码就是自动注册的钩子
export const auto = {
  name: 'MobileLayout',
  Components
}
```

在组件中，导出一个叫 `auto` 的对象，包含 `name` 和 `Components` 两个 `key` 值，分别代表名称和组件内容。

编写好这样的组件后，这个组件就自动挂载好了。

> 某些组件可能已经不使用了，但是你也不想删了，可以将上面的 `auto` 部分给注释掉，在编译的时候，会自动摇树掉这个组件的（除非你又普通方式引用了-_-|||）

### 使用自动注册组件

**在项目任意 `tsx` 文件中，均可引用自动注册的组件并使用。**

```tsx
import React, { FC } from 'react'
// 引入自动注册组件，并命名为 C
import C from '@/components'

const About: FC = () => {
  return (
    <div className="App">
      this is about page
      {/* 以 C 开头，后面带你定义的组件名称，即可正常使用 */}
      <C.WebHomeCount />
    </div>
  )
}

export default About
```

上面命名为 `C` 是位了方便使用。如果你命名冲突，完全可以跟换为其他名字的。

## 国际化说明

### 增加新语言

在 `@/lang/languages` 文件夹内，参考现有的文件夹以及文件，即可。如要增加 `JP` 日本语，可以新建 `JP` 文件夹和 `JP.ts` 两个文件。然后对 `JP.ts` 配置文件进行微调即可。

### 增加新模块

在 `@/lang/languages/{对应语言目录}` 内，新增该模块命名的 `ts` 文件，并参考默认的 `home` 模块编写配置即可。

### 使用

#### tsx 组件内使用

```tsx
import React, { FC } from 'react'
// 引用 useTranslation
import { useTranslation } from 'react-i18next'

const Home: FC = () => {
  // 获得 t 函数
  const { t } = useTranslation()
  return (
    <div className="App">
      {/* 普通使用，第一个参数为 `{模块.键值}`，第二个为回退文字 */}
      {t('home.home', 'Home')}
      <br/>
      {/* 带变量使用，第一个参数为 `{模块.键值}`，第二个为回退文字，第三个为变量对象 */}
      {t('home.welcome', 'Welcome', { name: 'fungleo' })}
      <br/>
      {/* 带回车的文字，需要用 whiteSpace: 'pre-line' 样式控制（可以不行内内联） */}
      <span style={{ whiteSpace: 'pre-line' }}>{t('home.message')}</span>
    </div>
  )
}
```

#### 普通 ts 文件内使用

```ts
// 引用
import i18n from '@/lang'

// 使用
console.log(i18n.t('home', 'Home'))
```

更多请参考官方文档。

## style scss 说明

在项目 `@/style/` 目录中，我们可以新建多个文件夹、多个层级的文件夹，在里面编写 `scss` 文件。

然后运行 `yarn style` 命令，即可全部自动引入到 `@/style/style.scss` 文件中了。

如果你一会儿就新建一个文件，一会就新建一个文件，可以直接运行 `yarn watch` 命令。

该命令会启动一个进程，当发现有新的 `scss` 文件时，就会自动添加进去。**一般在项目稳定时，是不需要启动这个进程的。**

`@/style/base` 目录中的 `scss` 文件不会自动引入，需要再 `@/style/config.scss` 文件中手动引入。因为这些基础样式，引用是有顺序要求的，前后颠倒了会出问题。此外，一些变量等，都可以在 `@/style/config.scss` 中配置。

> 建议，除入口scss文件外的所有 `scss` 文件名以 `_` 下划线开头，表示该文件为组件文件，不需要独立编译。当然，这只是个含义，现代框架库不管这些…… 但有些传统我们是要坚持的（一位逐渐秃顶的前端如是说……）

> 同自动组件一样，在我这样的规划中，js 和 scss 文件分离了，找起来可能不太好找。因此，需要大家用一定的规则去组织文件夹以及文件，这样才能不乱。

我这样搞得好处是，无需其他配置，即可在 `scss` 文件中使用混入、引用等各种高级特性了。

## 关于我

FungLeo

Blog: http://www.fungleo.com/

## LICENSE

MIT

觉得不错，点个赞，谢谢！
