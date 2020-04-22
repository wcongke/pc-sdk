export default (data = {}) => ({
  ...data,
  /**
   * 地址
   * @type {Object}
   */
  address: {
    // 省
    province: {},
    // 市
    city: {},
    // 区域（区、县、镇...）
    district: {},
    // 街道
    street: {},
    // 街道名称
    streetAddress: '',
    // 详细地址
    details: ''
  },
  /**
   * 地址选项
   * @type {Array}
   */
  options: [],
  /**
   * 地图
   * @type {Object}
   */
  map: {},
  /**
   * 标记点
   * @type {Object}
   */
  marker: null,
  /**
   * 禁用
   * @type {Boolean}
   */
  disabled: false,
  /**
   * 输入中
   * @type {Boolean}
   */
  entering: false
})
