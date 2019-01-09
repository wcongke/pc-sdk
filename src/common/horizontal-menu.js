/**
 * 菜单数据
 * @type {Object}
 */
export default (data = {}) => ({
  ...data,
  list: [
    {
      name: 'bc',
      page: 'bc.index',
      text: '基础'
    },
    {
      name: 'components',
      page: 'components.index',
      text: '业务组件'
    }
  ]
})
