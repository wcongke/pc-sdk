export default [{
  path: '/utils',
  component: () => import('@/views/utils/index.vue'),
  children: [
    {
      name: 'utils.index',
      path: '',
      meta: {
        title: '工具',
        module: 'utils'
      },
      component: () => import('@/views/utils/index/index.vue')
    }
  ]
}]
