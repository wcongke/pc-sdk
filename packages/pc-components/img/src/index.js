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
      default: '150px'
    },
    /**
     * 盒子高度
     */
    boxHeight: {
      type: String,
      default: '150px'
    },
    /**
     * 是否显示盒子操作框
     */
    showBoxOperation: {
      type: Boolean,
      default: true
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
  methods: {
    /**
     * 关闭图片对话框
     */
    closePcImgDialog () {
      if (this.$refs.pcImgDialog) {
        this.dialogVisible = false
        document.body.removeChild(this.$refs.pcImgDialog)
      }
    }
  },
  watch: {
    src (newVal) {
      this.imgSrc = newVal || defaultImg
    },
    dialogVisible (val) {
      if (val) {
        document.body.appendChild(this.$refs.pcImgDialog)
      }
    }
  },
  created () {
    this.imgSrc = this.src || defaultImg
  },
  destroyed () {
    if (this.$refs.pcImgDialog) {
      document.body.removeChild(this.$refs.pcImgDialog)
    }
  }
}
