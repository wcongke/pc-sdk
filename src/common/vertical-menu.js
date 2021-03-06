/**
 * 菜单数据
 * @type {Object}
 */
export default (data = {}) => ({
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
      name: 'components.upload',
      text: 'Upload 上传',
      disabled: false
    },
    {
      name: 'components.upload-img-batch',
      text: 'UploadImgBatch 批量上传图片',
      disabled: false
    },
    {
      name: 'components.upload-img',
      text: 'UploadImg 上传图片',
      disabled: false
    },
    {
      name: 'components.editor',
      text: 'Editor 编辑器',
      disabled: false
    },
    {
      name: 'components.place-search',
      text: 'PlaceSearch 搜索地址',
      disabled: false
    },
    {
      name: 'components.place-search-by-map',
      text: 'PlaceSearchByMap 通过地图搜索地址',
      disabled: false
    },
    {
      name: 'components.district-select',
      text: 'DistrictSelect 行政区域选择',
      disabled: false
    },
    {
      name: 'nav',
      text: 'Nav',
      disabled: true
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
      name: 'data',
      text: 'Data',
      disabled: true
    },
    {
      name: 'components.pagination',
      text: 'Pagination 分页',
      disabled: false
    },
    {
      name: 'others',
      text: 'Others',
      disabled: true
    },
    {
      name: 'components.utils-card',
      text: 'UtilsCard 工具卡片',
      disabled: false
    },
    {
      name: 'components.dialog',
      text: 'Dialog 对话框',
      disabled: false
    },
    {
      name: 'components.img',
      text: 'Img 图片',
      disabled: false
    }
  ]
  // utils: []
})
