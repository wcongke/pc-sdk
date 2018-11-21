<style lang="stylus" scoped>
.pc-upload
  display inline-block

  &__input
    .el-loading-mask
      display inline-block
      width 68px
      height 28px

  &__warning
    display table
    font-size 12px
    margin-top 10px
    color #999
</style>

<template>
  <div class="pc-upload">
    <el-upload
      class="pc-upload__input"
      :action="action"
      name="file"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-progress="handleProgress"
      v-loading="!fileUrl && onProgress">
      <el-button size="small" type="primary">点击上传</el-button>
    </el-upload>
    <div class="pc-upload__warning" v-if="showNote">{{note}}支持{{fileTypeText}}格式，大小在{{maxSize}}M之内</div>
  </div>
</template>

<script>
export default {
  name: 'pc-upload',
  props: {
    /**
      * 默认值
      */
    value: {
      type: String,
      default: ''
    },
    /**
     * 注意事项
     * @type {String}
     */
    note: {
      type: String,
      default: '上传文件，'
    },
    /**
     * 显示注意事项
     * @type {Boolean}
     */
    showNote: {
      type: Boolean,
      default: false
    },
    /**
     * 上传地址
     * @type {String}
     */
    action: '',
    /**
     * 文件大小尺寸
     * @type {Int}
     */
    maxSize: {
      type: Number,
      default: 2
    },
    /**
     * 文件类型
     * @type {Array}
     */
    fileType: {
      type: Array,
      default: () => []
    },
    /**
     * 文件类型文案
     * @type {String}
     */
    fileTypeText: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      /**
       * 文件链接
       * @type {String}
       */
      fileUrl: null,
      /**
       * 文件上传中
       * @type {Boolean}
       */
      onProgress: false
    }
  },
  methods: {
    /**
     * 文件上传前处理
     * @param {Object} file - file
     * @returns {Boolean} - true or false
     */
    beforeUpload (file) {
      const isOurType = this.fileType.includes(file.type) || this.fileType.length === 0
      const isLt = file.size / 1024 / 1024 < this.maxSize

      if (!isOurType) {
        this.$message.error(`上传文件只能是 ${this.fileTypeText} 格式!`)
      }
      if (!isLt) {
        this.$message.error(`上传文件大小不能超过 ${this.maxSize}MB!`)
      }

      return isOurType && isLt
    },
    /**
     * 文件上传时处理
     */
    handleProgress () {
      this.onProgress = true
    },
    /**
     * 文件上传成功处理
     * @param {Object} response - response
     */
    handleSuccess (response) {
      this.fileUrl = response.data
      this.onProgress = false
    }
  },
  watch: {
    /**
     * 监听父级值变化
     * @param {Boolean} newVal - 显示/隐藏
     */
    value (newVal) {
      this.fileUrl = newVal
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    fileUrl (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
