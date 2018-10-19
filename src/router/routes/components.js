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
    },
    {
      name: 'components.horizontal-menu',
      path: '/horizontal-menu',
      meta: {
        title: '水平菜单'
      },
      component: () => import('@/views/components/horizontal-menu/index.vue')
    },
    {
      name: 'components.vertical-menu',
      path: '/vertical-menu',
      meta: {
        title: '垂直菜单'
      },
      component: () =>
        import('@/views/components/vertical-menu/index.vue')
    },
    {
      name: 'components.utils-card',
      path: '/utils-card',
      meta: {
        title: '工具卡片'
      },
      component: () =>
        import('@/views/components/utils-card/index.vue')
    }
  ]
}]
