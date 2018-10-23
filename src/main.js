import Vue from 'vue'
import ElementUI from 'element-ui'
import PCComponents from '../packages/pc-components/'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/global.styl'

import './components/index'

import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(PCComponents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
