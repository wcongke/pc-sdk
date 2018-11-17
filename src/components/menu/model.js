/**
 * 菜单数据
 * @type {Object}
 */
export default (data = {}) => ({
  /**
   * 菜单
   * @type {Object}
   */
  list: {
    bc: [],
    components: [
      {
        name: 'form',
        text: 'Form',
        disabled: true
      },
      {
        name: 'components.radio',
        text: 'Radio 单选框',
        disabled: false
      },
      {
        name: 'components.horizontal-menu',
        text: 'HorizontalMenu 水平菜单',
        disabled: false
      },
      {
        name: 'components.vertical-menu',
        text: 'VerticalMenu 垂直菜单',
        disabled: false
      },
      {
        name: 'components.utils-card',
        text: 'UtilsCard 工具卡片',
        disabled: false
      },
      {
        name: 'components.pagination',
        text: 'Pagination 分页',
        disabled: false
      },
      {
        name: 'components.dialog',
        text: 'Dialog 对话框',
        disabled: false
      },
      {
        name: 'components.district-select',
        text: 'DistrictSelect 行政区域选择',
        disabled: false
      },
      {
        name: 'components.upload',
        text: 'Upload 上传',
        disabled: false
      }
    ],
    utils: []
  },
  /**
   * 当前菜单
   * @type {String}
   */
  active: '',
  ...data
})
