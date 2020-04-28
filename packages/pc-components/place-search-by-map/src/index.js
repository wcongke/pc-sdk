import AMapLoader from '@amap/amap-jsapi-loader'
import methods from 'can.base-utils/src/methods'

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
     * 高德版本
     * @type {String}
     */
    amapVersion: {
      type: String,
      default: '2.0'
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
     * @param {String} amapVersion -高德版本
     */
    initAmap (amapKey, amapVersion) {
      AMapLoader.load({
        key: amapKey,
        version: amapVersion,
        plugins: []
      }).then((AMap) => {
        this.model.map = new AMap.Map(this.$refs.map)
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
     * @param {String} amapVersion -高德版本
     * @param {String} lng -经度
     * @param {String} lat -纬度
     */
    addMarker (amapKey, amapVersion, lng, lat) {
      if (this.model.inAddMarker) return

      return new Promise((resolve) => {
        this.model.inAddMarker = true

        AMapLoader.load({
          key: amapKey,
          version: amapVersion,
          plugins: ['AMap.Marker']
        }).then((AMap) => {
          this.clearMarker()
  
          const marker = this.model.marker = new AMap.Marker({
            icon: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png',
            position: [lng, lat]
          })
  
          this.model.map.add(marker)
          this.model.map.setFitView()

          resolve('success')
        })
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
     * @param {String} amapVersion -高德版本
     * @param {String} keyword - 搜索关键词
     * @param {String} level - 要查询的关键字对应的行政级别或商圈(可选值：country、province、city、district、biz_area)
     * @param {Int} subdistrict - 期望返回多少级下级行政区信息(可选值：0、1、2、3)
     */
    districtSearch (amapKey, amapVersion, keyword, level, subdistrict) {
      if (!amapKey) {
        global.console.error('no amapKey')
        return
      } else if (!amapVersion) {
        global.console.error('no amapVersion')
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

      AMapLoader.load({
        key: amapKey,
        version: amapVersion,
        plugins: ['AMap.DistrictSearch']
      }).then((AMap) => {
        const districtSearch = new AMap.DistrictSearch({
          level,
          subdistrict,
          showbiz: false
        })

        districtSearch.search(keyword, (status, result) => {
          if (status === 'complete' && result.info === 'OK') {
            this.model.options = result.districtList[0].districtList
            this.$forceUpdate()
          } else {
            this.$message({
              type: 'error',
              message: '获取失败！'
            })
          }
        })
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
     */
    streetSearch (keyword) {
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

      this.model.streetLoading = true
      this.placeSearch(this.amapKey, this.amapVersion, keyword, this.model.address.district.adcode).then((res) => {
        this.model.streetLoading = false
        this.model.streetOptions = res.pois
      })
    },
    /**
     * 选择街道
     * @param {String} street -街道
     */
    selectStreet (street) {
      if (!street) return

      this.setMapCenter(street.location)
      this.addMarker(this.amapKey, this.amapVersion, street.location.lng, street.location.lat).then(() => {
        this.model.address.street = street
        this.model.address.streetAddress = street.address
        this.model.entering = false
        this.model.inAddMarker = false
      })
    },
    /**
     * 搜索地址
     * @param {String} amapKey - 高德key
     * @param {String} amapVersion -高德版本
     * @param {String} keyword - 搜索关键词
     * @param {String} adcode - adcode
     */
    placeSearch (amapKey, amapVersion, keyword, adcode) {
      return new Promise((resolve) => {
        AMapLoader.load({
          key: amapKey,
          version: amapVersion,
          plugins: ['AMap.PlaceSearch']
        }).then((AMap) => {
         const placeSearch = new AMap.PlaceSearch({
          city: adcode,
          pageIndex: 1,
          pageSize: 40
         })

         placeSearch.search(keyword, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result.poiList)
            } else {
              this.$message({
                type: 'error',
                message: '未搜到匹配的地址'
              })
            }
         })
        })
      })
    },
    /**
     * 监听数据和初始化数据的处理
     * @param {Object} data
     */
    watchValueHandle (data) {
      if (data === null) {
        this.model.address = {
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
        }
  
        return
      }
  
      // 如果正在输入就return
      if (this.model.entering) return
      // 如果street没有address就return
      if (!data || !data.streetAddress || !data.street.hasOwnProperty('address')) return
  
      methods.merge(this.model.address, data)
      this.districtSearch(this.amapKey, this.amapVersion, '中国', 'country', 1)
      this.districtSearch(this.amapKey, this.amapVersion, data.province.name, 'province', 1)
      this.districtSearch(this.amapKey, this.amapVersion, data.city.name, 'city', 1)
      this.model.address.streetAddress = data.street.address
      this.setMapCenter(data.street.location)
      this.addMarker(this.amapKey, this.amapVersion, data.street.location.lng, data.street.location.lat)
    }
  },
  created () {
    this.initAmap(this.amapKey, this.amapVersion)

    this.watchValueHandle(this.value)
  },
  watch: {
    /**
     * 监听组件显示隐藏状态
     * @param {Boolean} newVal - 显示/隐藏
     */
    value: {
      deep: true,
      handler (newVal) {
        this.watchValueHandle(newVal)
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
