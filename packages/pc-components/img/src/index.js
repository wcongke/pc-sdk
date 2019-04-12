const defaultImg = 'http://wb.qn.freshdayu.com/default-img@520x360.png'

export default {
  props: {
    /**
     * 图片链接
     */
    src: {
      type: String,
      default: defaultImg
    },
    /**
     * 盒子宽度
     */
    boxWidth: {
      type: String,
      default: '100px'
    },
    /**
     * 盒子高度
     */
    boxHeight: {
      type: String,
      default: '100px'
    }
  },
  data () {
    return {
      /**
       * 显示/隐藏弹出框
       * @type {Boolean}
       */
      dialogVisible: false,
      /**
       * 图片宽度
       * @type {Number}
       */
      imgWidth: 60,
      /**
       * 旋转度数
       * @type {Number}
       */
      rotate: 0
    }
  }
}
