/**
 * 发送ajax底层封装
 * @class Base
 */
export default class Ajax {
  /**
   * 初始化参数
   * @memberof Base
   * @param {Object} axios - ajax请求库
   * @param {String} prefix - ajax url 请求前缀
   */
  constructor (axios, prefix = '') {
    this.cancelRequest = {}
    this.axios = axios
    this.prefix = prefix
  }

  /**
   * 发送ajax请求
   * @param {String}   type       - 请求类型
   * @param {String}   url        - 请求地址
   * @param {Object}   params     - 请求参数
   * @param {Object}   headers    - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  __send (type, url, params = {}, headers = {}) {
    const _data = type === 'post' ? params : {
      params
    }

    if (this.cancelRequest[url]) {
      const e = {
        msg: '请稍后一下哦',
        code: '-1',
        data: null
      }

      return Promise.reject(e)
    };

    this.cancelRequest[url] = true
    return new Promise((resolve, reject) => {
      this.axios[type](`${this.prefix}${url}`, _data, {
        headers
      }).then((data) => {
        delete this.cancelRequest[url]
        if (data.code === 0) {
          resolve(data.data)
          return
        }
        const e = {
          code: data.code,
          msg: data.msg
        }
        reject(e)
      }).catch((err) => {
        delete this.cancelRequest[url]
        const e = {
          code: err.code,
          msg: err.msg,
          data: err.data
        }
        reject(e)
      })
    })
  }

  /**
   * ajax get请求
   * @param {String}   url         - 请求地址
   * @param {Object}   params      - 请求参数
   * @param {Object}   headers     - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  get (url, params, headers) {
    return this.__send('get', url, params, headers)
  }

  /**
   * ajax post请求
   * @param {String}   url           - 请求地址
   * @param {Object}   params        - 请求参数
   * @param {Object}   headers       - 添加请求头
   * @returns {Promise} 请求成功/失败promise对象
   */
  post (url, params, headers) {
    return this.__send('post', url, params, headers)
  }

  /**
   * 设置token
   * @param {Object} axios - ajax请求库
   * @param {String} token -token
   */
  setToken (axios, token) {
    axios.defaults.headers.common['token'] = token
  }

  /**
   * 挂载到vue原型中
   * @param {Object} Vue - vue对象
   */
  install (Vue) {
    Vue.prototype.$ajax = this
  }
}
