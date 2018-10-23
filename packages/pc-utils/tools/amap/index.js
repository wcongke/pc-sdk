/**
 * @file 高德地图JavaScript API封装
 */

import loadScript from '../../src/load-script'

/**
 * 高德key
 * [Vincent web] 462486a5c1c5186befb704f32f4d22fb
 * [Vincent web-service] 2c5a773cd39db15654611956fb74f6e5
 */
const amapKey = '462486a5c1c5186befb704f32f4d22fb'

export default {
  AMap: null,
  promise: null,

  /**
   * 初始化（异步加载依赖脚本文件）
   * @function [init]
   * @returns {Promise} Promise实例
   */
  init () {
    if (!this.promise) {
      this.promise = new Promise((resolve, reject) => {
        if (this.AMap) {
          resolve(this.AMap)
          return
        }

        const callback = `initAMap${Date.now()}`

        global[callback] = () => {
          global[callback] = null
          this.promise = null
          resolve(this.AMap = global.AMap)
        }
        loadScript(`//webapi.amap.com/maps?v=1.4.0&key=${amapKey}&callback=${callback}`, {
          async: true,
          defer: true
        }).catch(() => {
          this.promise = null
          reject(new Error('地图服务不可用'))
        })
      })
    }

    // 确保同时多次调用时，只进行一次初始化
    return this.promise
  },

  /**
   * init的简化版
   * @function [ready]
   * @param {Function} resolve - 初始化成功回调函数
   * @param {Function} reject - 初始化失败回调函数
   * @returns {Promise} Promise实例
   */
  ready (resolve, reject) {
    return this.init().then(resolve).catch(reject)
  },

  /**
   * 地址搜索
   * @function [placeSearch]
   * @see {@link http://lbs.amap.com/api/javascript-api/reference/search/}
   * @param {string} keyword - 关键词
   * @param {Object} options - 配置项
   * @returns {Promise} Promise实例
   */
  placeSearch (keyword, options) {
    return new Promise((resolve, reject) => {
      this.ready((AMap) => {
        AMap.service('AMap.PlaceSearch', () => {
          const placeSearch = new AMap.PlaceSearch(Object.assign({}, options))
          placeSearch.search(keyword, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result.poiList)
            } else {
              reject(new Error('未搜到匹配的地址'))
            }
          })
        })
      }, reject)
    })
  },

  /**
   * 行政区划查询
   * @function [districtSearch]
   * @see {@link http://lbs.amap.com/api/javascript-api/guide/map-data/cministrative_division}
   * @param {String} keyword - 搜索关键词
   * @param {String} level - 要查询的关键字对应的行政级别或商圈(可选值：country、province、city、district、biz_area)
   * @param {Int} subdistrict - 期望返回多少级下级行政区信息(可选值：0、1、2、3)
   * @returns {Promise} Promise实例
   */
  districtSearch (keyword, level, subdistrict) {
    return new Promise((resolve, reject) => {
      this.ready((AMap) => {
        AMap.service('AMap.DistrictSearch', () => {
          const districtSearch = new AMap.DistrictSearch({
            level: level,
            subdistrict: subdistrict
          })
          districtSearch.search(keyword, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result.districtList)
            } else {
              reject(new Error('获取失败'))
            }
          })
        })
      })
    })
  },

  /**
   * 逆地理编码服务
   * @function [geocoder]
   * @see {@link http://lbs.amap.com/api/javascript-api/reference/lnglat-to-address/}
   * @param {Array} lnglat - 经纬度
   * @param {Object} options - 配置项
   * @returns {Promise} Promise实例
   */
  geocoder (lnglat, options) {
    return new Promise((resolve, reject) => {
      this.ready((AMap) => {
        AMap.service('AMap.Geocoder', () => {
          const geocoder = new AMap.Geocoder(Object.assign({}, options))

          geocoder.getAddress(lnglat, (status, result) => {
            if (status === 'complete' && result.info === 'OK') {
              resolve(result.regeocode)
            } else {
              reject(new Error('当前位置信息解析失败'))
            }
          })
        })
      }, reject)
    })
  },

  /**
   * 定位服务
   * @function [geolocation]
   * @see {@link http://lbs.amap.com/api/javascript-api/reference/location/}
   * @param {Object} options - 配置项
   * @returns {Promise} Promise实例
   */
  geolocation (options) {
    return new Promise((resolve, reject) => {
      this.ready((AMap) => {
        AMap.service('AMap.Geolocation', () => {
          const geolocation = new AMap.Geolocation(Object.assign({}, options))

          if (geolocation.isSupported()) {
            geolocation.getCurrentPosition()
            AMap.event.addListener(geolocation, 'complete', resolve)
            AMap.event.addListener(geolocation, 'error', (e) => {
              const eventMessages = {
                NOT_SUPPORTED: '当前浏览器不支持定位功能',
                FAILED: '定位失败'
              }
              const errorMessages = {
                // PERMISSION_DENIED
                'Geolocation permission denied.': '访问地理位置权限被拒绝',

                // POSITION_UNAVAILABLE
                'Geolocation position unavailable.': '无法获取当前位置',

                // TIMEOUT
                'Geolocation timeout.': '定位超时',

                // UNKNOWN_ERROR
                'Geolocation unknown error.': '定位失败'
              }

              reject(errorMessages[e.message] || eventMessages[e.info])
            })
          } else {
            reject(new Error('定位服务不可用'))
          }
        })
      }, reject)
    })
  }
}
