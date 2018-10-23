const toString = Object.prototype.toString

/**
 * 判断一个变量哪种类型
 * @param {*} obj - 待判断变量
 * @returns {string} 类型名称
 */
const typeOf = (obj) => {
  return toString.call(obj).slice(8, -1).toLowerCase()
}

/**
 * 判断一个变量是否是非null对象
 * @param {*} obj - 待判断变量
 * @returns {boolean} 是与否
 */
const isObject = (obj) => {
  return typeof obj === 'object' && obj !== null
}

const encodeURIComponent = global.encodeURIComponent

/**
 * 拼接对象为请求字符串
 * @param {Object} obj - 待拼接的对象
 * @returns {string} - 拼接成的请求字符串
 */
const encodeSearchParams = (obj) => {
  const params = []

  Object.keys(obj).forEach((key) => {
    let value = obj[key]

    if (typeof value === 'undefined') {
      value = ''
    }

    params.push([key, encodeURIComponent(value)].join('='))
  })

  return params.join('&')
}

const REGEXP_HTML_ENTITIES = /&lt;(\/?)(\w+)(.*?)(\/?)&gt;/ig

/**
 * 解码HTML实体
 * @param {string} html - 待解码的HTML字符串
 * @returns {string} 已解码的HTML字符串
 */
const decodeHTMLEntities = (html) => {
  return String(html).replace(REGEXP_HTML_ENTITIES, (tag, startSprit, tagName, attrs, endSprit) => {
    if (tagName.toLowerCase() === 'script') {
      return tag
    }

    return `<${startSprit}${tagName}${attrs}${endSprit}>`
  })
}
/**
 * 格式化日期
 * @param  {date} value 日期
 * @param  {string} fmt   需要转换的日期格式，如yyyy-MM-dd HH:mm:ss，yyyy-MM-dd HH:mm，yyyy-MM-dd
 * @return {date}       根据特定的格式转换的日期
 */
const formatDate = (value, fmt = 'yyyy-MM-dd HH:mm:ss') => {
  if (value) {
    let _date = value
    if (typeof value !== 'object') {
      _date = Number(value) ? new Date(value * 1000) : new Date(value.replace(/-/g, '/'))
    }
    const o = {
      'M+': _date.getMonth() + 1, // 月份
      'd+': _date.getDate(), // 日
      'H+': _date.getHours(), // 小时
      'm+': _date.getMinutes(), // 分
      's+': _date.getSeconds(), // 秒
      'q+': Math.floor((_date.getMonth() + 3) / 3), // 季度
      S: _date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, String(_date.getFullYear()).substr(4 - RegExp.$1.length))
    }
    for (const k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1)
          ? o[k] : `00${o[k]}`.substr(String(o[k]).length))
      }
    }
    return fmt
  }
  return ''
}
/**
 * 克隆一个对象
 * @param {object|array} obj 要克隆的对象
 * @returns {object|array} 克隆后的对象
 */
const clone = (obj) => {
  if (obj && typeof obj === 'object') {
    return JSON.parse(JSON.stringify(obj))
  }
  return obj
}

// eslint-disable-next-line
const REGEXP_IMAGE_TAG = /<img(.+?)src="((?:https?:)?\/\/[\w-\.]+\.(?:upaiyun\.com|xkeshi\.cn)\/\S+?)"(.*?)>/img

/**
 * v-html 图片处理 又拍云上传的图片加载优化
 * @param {string} tag  待处理的html tag
 * @param {string} value 又拍云优化参数 例如 '!/fw/750/rotate/auto'
 * @returns {string} 优化后的html字符串
 */
const imgHtmlProcess = (tag, value) => {
  return tag.replace(REGEXP_IMAGE_TAG, (img, start, url, end) => {
    return `<img${start}src="${url}${value}"${end}>`
  })
}

/**
 * 深度合并多个对象到目标对象
 * @param {Object} target - 目标对象
 * @param {Array} args - 待合并对象列表
 * @returns {Object} 合并后的目标对象
 */
const merge = (target, ...args) => {
  if (isObject(target)) {
    args.forEach((arg) => {
      if (isObject(arg)) {
        Object.keys(arg).forEach((key) => {
          const value = arg[key]

          if (Array.isArray(value)) {
            target[key] = value.map(val => (isObject(val) ? merge({}, val) : val))
          } else if (isObject(value)) {
            target[key] = merge(target[key] || {}, value)
          } else {
            target[key] = value
          }
        })
      }
    })
  }

  return target
}

export default {
  clone,
  typeOf,
  isObject,
  encodeSearchParams,
  decodeHTMLEntities,
  formatDate,
  imgHtmlProcess,
  merge
}
