import methods from 'can.base-utils/src/methods'
import AMAP from 'can.base-utils/tools/amap/index'

export default {
  props: {
    /**
     * 默认行政区域
     */
    value: {
      type: Object,
      default: () => {}
    },
    /**
     * 高德key
     * @type {String}
     */
    amapKey: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      /**
       * 地区
       * @type {Object}
       */
      district: {
        // 省
        province: null,
        // 市
        city: null,
        // 区
        district: null
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
      isInit: true
    }
  },
  methods: {
    /**
     * 行政区信息信息搜索
     * @function [districtSearch]
     * @param {String} amapKey - 高德key
     * @param {String} keyword - 搜索关键词
     * @param {String} level - 要查询的关键字对应的行政级别或商圈(可选值：country、province、city、district、biz_area)
     * @param {Int} subdistrict - 期望返回多少级下级行政区信息(可选值：0、1、2、3)
     */
    districtSearch (amapKey, keyword, level, subdistrict) {
      if (!amapKey) {
        global.console.error('no amapKey')
        return
      } else if (!keyword) {
        global.console.error('no keyword')
        return
      } else if (!level) {
        global.console.error('no level')
        return
      } else if (!subdistrict) {
        global.console.error('no subdistrict')
        return
      }

      AMAP.districtSearch(amapKey, keyword, level, subdistrict)
        .then((res) => {
          this.options = res[0].districtList
        })
    },
    /**
     * 选择省
     * @param {Object} val -选中的省
     */
    selectProvince (val) {
      this.district.province = {
        adcode: val.adcode,
        name: val.name
      }
      this.district.city = null
      this.district.district = null
      this.isInit = false
    },
    /**
     * 选择市
     * @param {Object} val -选中的省
     */
    selectCity (val) {
      this.district.city = {
        adcode: val.adcode,
        name: val.name
      }
      this.district.district = null
      this.isInit = false
    },
    /**
     * 选择区
     * @param {Object} val -选中的省
     */
    selectDistrict (val) {
      this.district.district = {
        adcode: val.adcode,
        name: val.name
      }
      this.isInit = false
    }
  },
  watch: {
    /**
     * 监听组件显示隐藏状态
     * @param {Boolean} newVal - 显示/隐藏
     */
    value: {
      deep: true,
      handler (newVal) {
        if (!newVal || (newVal && !newVal.district) || !this.isInit) return

        methods.merge(this.district, newVal)
        this.districtSearch(this.amapKey, '中国', 'country', 1)
        this.districtSearch(this.amapKey, newVal.province.name, 'province', 1)
        this.districtSearch(this.amapKey, newVal.city.name, 'city', 1)
      }
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    district: {
      deep: true,
      handler (newVal) {
        this.isInit = false
        this.$emit('input', newVal)
      }
    }
  }
}
