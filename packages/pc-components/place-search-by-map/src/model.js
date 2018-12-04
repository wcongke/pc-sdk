export default (data = {}) => ({
  ...data,
  /**
   * 地址
   * @type {Object}
   */
  address: {
    // 省
    province: null,
    // 市
    city: null,
    // 区域（区、县、镇...）
    district: null,
    // 街道
    street: null,
    // 街道名称
    streetName: null,
    // 详细地址
    details: null
  },
  /**
   * 地址选项
   * @type {Array}
   */
  options: [],
  /**
   * 初始状态
   * @type {Boolean}
   */
  isInit: true,
  /**
   * 地图
   * @type {Object}
   */
  map: {},
  /**
   * 标记点
   * @type {Object}
   */
  marker: null
})
