/**
 * 运行环境检测
 */

const userAgent = global.navigator.userAgent
const inAndroid = /Android/i.test(userAgent)
const inIOS = /iPhone|iPad|iPod/i.test(userAgent)
const inMicroMessenger = /MicroMessenger/i.test(userAgent)
const inWindowsWechat = /WindowsWechat/i.test(userAgent)
const isIcbcElifeAndroid = /ICBCAndroidBS/i.test(userAgent)
const isIcbcElifeIphone = /ICBCiPhoneBS/i.test(userAgent)
const inAliApp = /aliapp/i.test(userAgent.toLowerCase())

/**
 * 判断是否是在支付宝app中
 * @returns {Boolean} - true || false
 */
export function isAliApp () {
  return inAliApp
}

/**
 * 判断当前系统是否是Android系统
 * @returns {boolean} 是与否
 */
export function isAndroid () {
  return inAndroid
}

/**
 * 判断当前系统是否是iOS系统
 * @returns {boolean} 是与否
 */
export function isIOS () {
  return inIOS
}

/**
 * 判断当前浏览器环境是否是微信
 * @returns {boolean} 是与否
 */
export function isWeChat () {
  return inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是Android版微信
 * @returns {boolean} 是与否
 */
export function isAndroidWeChat () {
  return inAndroid && inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是iOS版微信
 * @returns {boolean} 是与否
 */
export function isIOSWeChat () {
  return inIOS && inMicroMessenger
}

/**
 * 判断当前浏览器环境是否是Windows版微信
 * @returns {boolean} 是与否
 */
export function isWindowsWechat () {
  return inWindowsWechat && inMicroMessenger
}

/**
 * 判断当前浏览器环境是否在工银E生活支付环境中
 * @returns {boolean} 是与否
 */
export function isIcbcElife () {
  return isIcbcElifeAndroid || isIcbcElifeIphone
}

export default {
  isAliApp,
  isAndroid,
  isIOS,
  isWeChat,
  isAndroidWeChat,
  isIOSWeChat,
  isWindowsWechat,
  isIcbcElife
}
