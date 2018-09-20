export default [{
  path: '/components',
  component: () => import('@/views/components/index.vue'),
  children: [
    {
      name: 'components.index',
      path: '',
      meta: {
        title: '业务组件'
      },
      component: () => import('@/views/components/index/index.vue')
    },
    {
      name: 'components.radio',
      path: '/radio',
      meta: {
        title: '单选框'
      },
      component: () => import('@/views/components/radio/index.vue')
    }
  ]
}]
