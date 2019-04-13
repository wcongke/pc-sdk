const defaultImg = 'http://wb.qn.freshdayu.com/no-image@400x200.png'

export default {
  props: {
    /**
     * 图片链接
     */
    src: {
      type: String,
      default: ''
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
      rotate: 0,
      /**
       * 图片链接
       * @type {String}
       */
      imgSrc: defaultImg
    }
  },
  watch: {
    src (newVal) {
      if (!newVal) {
        this.imgSrc = defaultImg
      }
    }
  },
  created () {
    if (!this.src) {
      this.imgSrc = defaultImg
    }
  }
}
