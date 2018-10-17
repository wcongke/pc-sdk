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
