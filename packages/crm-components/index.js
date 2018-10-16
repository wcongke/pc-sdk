import Radio from './radio/index'
import HorizontalMenu from './horizontal-menu/index'

const components = [
  Radio,
  HorizontalMenu
]

const install = (Vue) => {
  if (install.installed) return
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof global !== 'undefined' && global.Vue) {
  install(global.Vue)
}

export default {
  install
}
