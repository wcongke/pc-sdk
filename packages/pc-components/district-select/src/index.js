import amap from '../../utils/amap'

export default {
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
      options: []
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
      }

      amap.districtSearch(amapKey, keyword, level, subdistrict)
        .then((res) => {
          this.options = res[0].districtList
        })
    },
    /**
     * 处理地址改变结果
     * @function [handleChange]
     */
    handleChange () {
      this.$emit('district', this.district)
    }
  }
}
