<style lang="stylus" scoped>
.upload-img
  display block

  &__img
    width 100%
</style>

<template>
  <div class="upload-img">
    <el-upload
      class="upload-img__uploader"
      drag
      :action="action"
      v-bind:show-file-list="false"
      v-bind:before-upload="handleBeforeUpload"
      v-bind:on-success="handleSuccess"
      v-loading="!img && onProgress"
      multiple>
      <img class="upload-img__img" v-if="img" :src="img"/>
      <div v-else>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: 'pc-upload-img',
  props: {
    /**
      * 默认值
      */
    value: {
      type: String,
      default: ''
    },
    /**
     * 上传地址
     * @type {String}
     */
    action: ''
  },
  data () {
    return {
      /**
       * 图片链接
       * @type {String}
       */
      img: '',
      /**
       * 文件上传中
       * @type {Boolean}
       */
      onProgress: false
    }
  },
  methods: {
    /** @argument
     * 上传文件前处理
     * @param {file} file
     */
    handleBeforeUpload (file) {
      const isOurType = ['image/jpg', 'image/png', 'image/jpeg'].includes(file.type)
      const isLt = file.size / 1024 / 1024 < 2

      if (!isOurType) {
        this.$message.error(`上传文件只能是JPG、PNG、JPEG格式!`)
      }
      if (!isLt) {
        this.$message.error(`上传文件大小不能超过2MB!`)
      }

      return isOurType && isLt
    },
    /** @argument
     * 文件上传时处理
     */
    handleProgress () {
      this.onProgress = true
    },
    /** @argument
     * 文件上传成功后处理
     * @param {Object} response
     * @param {file} file
     * @param {fileList}
     */
    handleSuccess (response, file, fileList) {
      this.img = response.data
      this.onProgress = false
    }
  },
  mounted () {
    this.img = this.value
  },
  watch: {
    /**
     * 监听父级值变化
     * @param {Boolean} newVal - 显示/隐藏
     */
    value (newVal) {
      this.img = newVal
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    img (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
