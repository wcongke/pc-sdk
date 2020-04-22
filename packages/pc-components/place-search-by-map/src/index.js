import methods from 'can.base-utils/src/methods'
import AMAP from 'can.base-utils/tools/amap/index'

import model from './model'

export default {
  data () {
    return {
      model: model()
    }
  },
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
    },
    /**
     * 有无详情地址
     * @type {Boolean}
     */
    hadDetails: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    /**
     * 初始化地图
     * @function [initAmap]
     * @param {String} amapKey -高德key
     */
    initAmap (amapKey) {
      AMAP.ready(amapKey, (AMap) => {
        this.model.map = new AMap.Map(this.$refs.map, {
          resizeEnable: true,
          center: [120.137, 30.253],
          zoom: 10
        })
      })
    },
    /**
     * 设置地图中心点
     * @function [setMapCenter]
     * @param {Object} center - 中心点
     */
    setMapCenter (center) {
      if (!center) return

      this.model.disabled = true
      this.clearMarker()
      setTimeout(() => {
        this.model.map.setCenter(center)
        this.model.map.setFitView()

        this.model.disabled = false
      }, 500)
    },
    /**
     * 绘制地图中心点
     * @function [addMarker]
     * @param {String} amapKey -高德key
     * @param {String} lng -经度
     * @param {String} lat -纬度
     */
    addMarker (amapKey, lng, lat) {
      AMAP.ready(amapKey, (AMap) => {
        this.clearMarker()

        const marker = this.model.marker = new AMap.Marker({
          icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
          position: [lng, lat]
        })
        marker.setMap(this.model.map)
        this.model.map.setFitView()
      })
    },
    /**
     * 清除标记点
     * @function [clearMarker]
     */
    clearMarker () {
      if (this.model.marker) {
        this.model.marker.setMap(null)
        this.model.marker = null
      }
    },
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
          this.model.options = res[0].districtList
          this.$forceUpdate()
        })
    },
    /**
     * 选择省
     * @param {Object} val -选中的省
     */
    selectProvince (val) {
      this.model.entering = true
      this.model.address.province = {
        adcode: val.adcode,
        name: val.name
      }

      this.model.address.city = {}
      this.model.address.district = {}
      this.model.address.street = {}
      this.model.address.streetAddress = ''
      this.model.address.details = ''
      this.setMapCenter(val.center)
    },
    /**
     * 选择市
     * @param {Object} val -选中的省
     */
    selectCity (val) {
      this.model.entering = true
      this.model.address.city = {
        adcode: val.adcode,
        name: val.name
      }
      this.model.address.district = {}
      this.model.address.street = {}
      this.model.address.streetAddress = ''
      this.model.address.details = ''
      this.setMapCenter(val.center)
    },
    /**
     * 选择区
     * @param {Object} val -选中的省
     */
    selectDistrict (val) {
      this.model.entering = true
      this.model.address.district = {
        adcode: val.adcode,
        name: val.name
      }
      this.model.address.street = {}
      this.model.address.streetAddress = ''
      this.model.address.details = ''
      this.setMapCenter(val.center)
    },
    /**
     * 街道搜索
     * @param {String} keyword -关键词
     * @param {Function} callback -回调
     */
    streetSearch (keyword, callback) {
      this.model.entering = true
      if (!this.model.address.province) {
        this.$message.error('选择省')
        return
      } else if (!this.model.address.city) {
        this.$message.error('选择市')
        return
      } else if (!this.model.address.district) {
        this.$message.error('选择区')
        return
      } else if (!keyword) {
        this.$message.error('请输入地址')
        return
      }

      this.placeSearch(this.amapKey, keyword, this.model.address.district.adcode).then((res) => {
        callback(res.pois)
      })
    },
    /**
     * 选择街道
     * @param {String} street -街道
     */
    selectStreet (street) {
      if (street) {
        this.setMapCenter(street.location)
        this.addMarker(this.amapKey, street.location.lng, street.location.lat)
      }

      this.model.address.street = street
      this.model.address.streetAddress = street.address
      this.model.entering = false
    },
    /**
     * 搜索地址
     * @param {String} amapKey - 高德key
     * @param {String} keyword - 搜索关键词
     * @param {String} adcode - adcode
     */
    placeSearch (amapKey, keyword, adcode) {
      return new Promise((resolve, reject) => {
        AMAP.placeSearch(amapKey, keyword, {
          city: adcode,
          pageIndex: '1',
          pageSize: '40'
        }).then((res) => {
          resolve(res)
        }, reject)
      })
    }
  },
  created () {
    this.initAmap(this.amapKey)
  },
  watch: {
    /**
     * 监听组件显示隐藏状态
     * @param {Boolean} newVal - 显示/隐藏
     */
    value: {
      deep: true,
      handler (newVal) {
        // 如果正在输入就return
        if (this.model.entering) return
        // 如果street没有address就return
        if (!newVal || !newVal.streetAddress || !newVal.street.hasOwnProperty('address')) return

        methods.merge(this.model.address, newVal)
        this.districtSearch(this.amapKey, '中国', 'country', 1)
        this.districtSearch(this.amapKey, newVal.province.name, 'province', 1)
        this.districtSearch(this.amapKey, newVal.city.name, 'city', 1)
        this.model.address.streetAddress = newVal.street.address
        this.setMapCenter(newVal.street.location)
        this.addMarker(this.amapKey, newVal.street.location.lng, newVal.street.location.lat)
      }
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    'model.address': {
      deep: true,
      handler (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
