import '@babel/polyfill'
import Es6Promise from 'es6-promise'

import Vue from 'vue'
import ElementUI from 'element-ui'
import BaseComponents from 'can.base-components'
import PCComponents from '../packages/pc-components/'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/global.styl'

import './components/index'

import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(BaseComponents)
Vue.use(PCComponents)
Es6Promise.polyfill()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
