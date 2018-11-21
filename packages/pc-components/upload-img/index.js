import UploadImg from './src/main.vue'

UploadImg.install = (Vue) => {
  Vue.component(UploadImg.name, UploadImg)
}

export default UploadImg
