import Radio from './radio/index'
import HorizontalMenu from './horizontal-menu/index'
import VerticalMenu from './vertical-menu/index'
import UtilsCard from './utils-card/index'
import Pagination from './pagination/index'
import Dialog from './dialog/index'

const components = [
  Radio,
  HorizontalMenu,
  VerticalMenu,
  UtilsCard,
  Pagination,
  Dialog
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
