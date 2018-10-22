export default [{
  path: '/',
  component: () => import('@/views/bc/index.vue'),
  children: [
    {
      name: 'bc.index',
      path: '',
      meta: {
        title: '基础',
        module: 'bc'
      },
      component: () => import('@/views/bc/index/index.vue')
    }
  ]
}]
