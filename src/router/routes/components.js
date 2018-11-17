export default [{
  path: '/components',
  component: () => import('@/views/components/index.vue'),
  children: [
    {
      name: 'components.index',
      path: '',
      meta: {
        title: '业务组件',
        module: 'components'
      },
      component: () => import('@/views/components/index/index.vue')
    },
    {
      name: 'components.radio',
      path: 'radio',
      meta: {
        title: '单选框',
        module: 'components'
      },
      component: () => import('@/views/components/radio/index.vue')
    },
    {
      name: 'components.horizontal-menu',
      path: 'horizontal-menu',
      meta: {
        title: '水平菜单',
        module: 'components'
      },
      component: () => import('@/views/components/horizontal-menu/index.vue')
    },
    {
      name: 'components.vertical-menu',
      path: 'vertical-menu',
      meta: {
        title: '垂直菜单',
        module: 'components'
      },
      component: () => import('@/views/components/vertical-menu/index.vue')
    },
    {
      name: 'components.utils-card',
      path: 'utils-card',
      meta: {
        title: '工具卡片',
        module: 'components'
      },
      component: () => import('@/views/components/utils-card/index.vue')
    },
    {
      name: 'components.pagination',
      path: 'pagination',
      meta: {
        title: '分页',
        module: 'components'
      },
      component: () => import('@/views/components/pagination/index.vue')
    },
    {
      name: 'components.dialog',
      path: 'dialog',
      meta: {
        title: '对话框',
        module: 'components'
      },
      component: () => import('@/views/components/dialog/index.vue')
    },
    {
      name: 'components.district-select',
      path: 'district-select',
      meta: {
        title: '行政区域选择',
        module: 'components'
      },
      component: () => import('@/views/components/district-select/index.vue')
    },
    {
      name: 'components.upload',
      path: 'upload',
      meta: {
        title: '上传',
        module: 'components'
      },
      component: () => import('@/views/components/upload/index.vue')
    }
  ]
}]
