
// 自动注册组件文件
const modulesFiles = require.context('./', true, /.tsx$/)

interface Props {
  name?: string
  Components?: Function
}

const modules = modulesFiles.keys().reduce((modules: {[index: string]: any}, path) => {
  const auto: Props = modulesFiles(path)?.auto
  if (auto?.name != null && auto?.Components != null) {
    modules[auto.name] = auto.Components
  }
  // if (name != null && Components != null) {
  //   modules[name] = Components
  // }
  return modules
}, {})

export default {
  ...modules
}
