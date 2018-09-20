export default [{
  path: '/utils',
  component: () => import('@/views/utils/index.vue'),
  children: [
    {
      name: 'utils.index',
      path: '',
      meta: {
        title: '基础'
      },
      component: () => import('@/views/utils/index/index.vue')
    }
  ]
}]
