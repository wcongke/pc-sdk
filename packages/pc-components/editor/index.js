import Editor from './src/main.vue'

Editor.install = (Vue) => {
  Vue.component(Editor.name, Editor)
}

export default Editor
