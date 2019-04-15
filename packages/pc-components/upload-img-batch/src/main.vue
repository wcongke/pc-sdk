<style lang="stylus" scoped>
.pc-upload-img-batch
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

  &__img-list
    margin-top 10px

  &__img-item
    position relative
    list-style-type none

    &--del
      position absolute
      z-index 1001
      background-color #f00
      width 20px
      height 20px
      line-height 16px
      text-align center
      border-radius 10px
      color #fff
      cursor pointer
      right -10px
      top -10px
      box-shadow 1px 1px 2px rgba(153, 153, 153, .5)

  &__img
    width 100%
    margin-bottom 10px
</style>

<template>
  <div class="pc-upload-img-batch">
    <el-upload
      class="pc-upload-img-batch__input"
      name="file"
      ref="uploadBatch"
      v-loading="!fileList && onProgress"
      multiple
      :limit="limit"
      :action="action"
      :headers="headers"
      :data="data"
      :show-file-list="false"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :on-success="handleSuccess"
      :on-progress="handleProgress">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    </el-upload>
    <div class="pc-upload-img-batch__warning" v-if="showNote">{{note}}</div>
    <ul class="pc-upload-img-batch__img-list" :style="{width: imgListWidth}">
      <li class="pc-upload-img-batch__img-item"
          v-for="(item, index) in fileList"
          :key="index">
        <i class="pc-upload-img-batch__img-item--del" @click="del(index)">&#215;</i>
        <img
          class="pc-upload-img-batch__img"
          :src="item">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pc-upload-img-batch',
  props: {
    /**
      * 默认值
      */
    value: {
      type: Array,
      default: () => ([])
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
    action: {
      type: String,
      default: ''
    },
    /**
     * 设置上传的请求头部
     */
    headers: {
      type: Object,
      default: () => ({})
    },
    /**
     * 上传时附带的额外参数
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * 文件数量限制
     * @type {String}
     */
    limit: {
      type: Number,
      default: 5
    },
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
      default: () => ([])
    },
    /**
     * 文件类型文案
     * @type {String}
     */
    fileTypeText: {
      type: String,
      default: ''
    },
    /**
     * 图片列表宽度
     * @type {String}
     */
    imgListWidth: {
      type: String,
      default: '400px'
    }
  },
  data () {
    return {
      /**
       * 文件列表
       * @type {String}
       */
      fileList: [],
      /**
       * 文件名列表
       * @type {String}
       */
      fileNameList: [],
      /**
       * 文件上传中
       * @type {Boolean}
       */
      onProgress: false,
      /**
       * 上传文件次数
       * @type {Number}
       */
      uploadNum: 0
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
    handleProgress (event, file, fileList) {
      this.onProgress = true
    },
    /**
     * 文件上传成功处理
     * @param {Object} response - response
     */
    handleSuccess (response, file, fileList) {
      this.fileList.push(response.data)

      this.$message({
        type: 'success',
        message: '上传文件成功'
      })
    },
    /**
     * 文件超出个数限制时的钩子
     */
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 ${this.limit} 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    /**
     * 删除图片
     */
    del (index) {
      this.fileList.splice(index, 1)
    }
  },
  mounted () {
    this.fileList = this.value
  },
  watch: {
    /**
     * 监听父级值变化
     * @param {Boolean} newVal - 显示/隐藏
     */
    value: {
      deep: true,
      handler (newVal) {
        this.fileList = newVal
      }
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    fileList: {
      deep: true,
      handler (newVal) {
        this.$emit('input', newVal)
      }
    }
  }
}
</script>
