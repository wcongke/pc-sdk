import bc from './bc'
import components from './components'
import utils from './utils'

export default [
  ...bc,
  ...components,
  ...utils,
  {
    path: '/404',
    name: '404',
    component: () => import('../../views/not-found/index.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]
