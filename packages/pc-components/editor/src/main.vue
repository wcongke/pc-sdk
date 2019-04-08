<style lang="stylus" scoped>
@import '~quill/dist/quill.core.css'
@import '~quill/dist/quill.snow.css'
@import '~quill/dist/quill.bubble.css'

.pc-editor
  background-color #fff

  &__uploader
    display none
</style>

<template>
  <div class="pc-editor">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption">
    </quill-editor>

    <el-upload
      class="pc-editor__uploader"
      drag
      :action="action"
      v-bind:show-file-list="false"
      v-bind:before-upload="handleBeforeUpload"
      v-bind:on-success="handleSuccess"
      multiple>
      <el-button size="small" type="primary" id="imgInput">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import Quill from 'quill'

export default {
  name: 'pc-editor',
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
  components: {
    quillEditor
  },
  data () {
    return {
      /**
       * 编辑器内容
       * @type {String}
       */
      content: '',
      /**
       * 编辑券配置
       * @type {Object}
       */
      editorOption: {
        placeholder: '请输入内容'
      }
    }
  },
  methods: {
    /**
     * 上传图片
     */
    uploadImg () {
      let fileInput = document.getElementById('imgInput')
      fileInput.click() // 加一个触发事件
    },
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
     * 文件上传成功后处理
     * @param {Object} response
     * @param {file} file
     * @param {fileList}
     */
    handleSuccess (response, file, fileList) {
      // 文件地址
      let url = response.data

      if (!url) {
        this.$message.error('插入图片失败')
        return
      }
      // 获取光标位置对象，里面有两个属性，一个是index 还有 一个length，
      // 这里要用range.index，即当前光标之前的内容长度，
      // 然后再利用 insertEmbed(length, 'image', imageUrl)，插入图片即可。
      let addRange = this.$refs.myQuillEditor.quill.getSelection()

      // 调用编辑器的 insertEmbed 方法，插入URL
      this.$refs.myQuillEditor.quill.insertEmbed(addRange !== null ? addRange.index : 0, 'image', url, Quill.sources.USER)
    }
  },
  watch: {
    /**
     * 监听父级值变化
     * @param {Boolean} newVal - 显示/隐藏
     */
    value (newVal) {
      this.content = newVal
    },
    /**
     * 双向绑定
     * @param {Boolean} newVal - 显示/隐藏
     */
    content (newVal) {
      this.$emit('input', newVal)
    }
  },
  mounted () {
    // 为图片ICON绑定事件  getModule 为编辑器的内部属性
    this.$refs.myQuillEditor.quill.getModule('toolbar').addHandler('image', this.uploadImg)
  },
  created () {
    // 初始化值
    this.content = this.value
  }
}
</script>
