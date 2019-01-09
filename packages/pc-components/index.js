import Radio from './radio/index'
import HorizontalMenu from './horizontal-menu/index'
import VerticalMenu from './vertical-menu/index'
import UtilsCard from './utils-card/index'
import Pagination from './pagination/index'
import Dialog from './dialog/index'
import DistrictSelect from './district-select/index'
import PlaceSearch from './place-search/index'
import PlaceSearchByMap from './place-search-by-map/index'
import Upload from './upload/index'
import UploadImg from './upload-img/index'
import UploadImgBatch from './upload-img-batch/index'
import Editor from './editor/index'

const components = [
  Radio,
  HorizontalMenu,
  VerticalMenu,
  UtilsCard,
  Pagination,
  Dialog,
  DistrictSelect,
  PlaceSearch,
  PlaceSearchByMap,
  Upload,
  UploadImg,
  UploadImgBatch,
  Editor
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
