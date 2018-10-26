export default {
  props: {
    /**
     * 组件显示/隐藏状态，用于双向绑定
     */
    value: {
      type: Boolean,
      default: false
    },
    /**
     * 对话框标题
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 对话框宽度
     */
    width: {
      type: String,
      default: '30%'
    },
    /**
     * 显示footer
     */
    showFooter: {
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
      dialogVisible: this.value
    }
  },
  methods: {
    /**
     * 取消
     */
    cancel () {
      this.$emit('cancel')
    },
    /**
     * 提交
     */
    submit () {
      this.$emit('submit')
    },
    /**
     * Dialog 打开的回调
     */
    open () {
      this.$emit('open')
    },
    /**
     * Dialog 打开的回调
     */
    opened () {
      this.$emit('opened')
    },
    /**
     * Dialog 关闭的回调
     */
    close () {
      this.$emit('close')
    },
    /**
     * Dialog 关闭动画结束时的回调
     */
    closed () {
      this.$emit('closed')
    }
  },
  watch: {
    /**
     * 监听组件显示隐藏状态
     * @param {Boolean} newVal - 显示/隐藏
     */
    value (newVal) {
      this.dialogVisible = newVal
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    dialogVisible (newVal) {
      this.$emit('input', newVal)
    }
  }
}
