<style lang="stylus" scoped>
.components-editor
  display block
</style>

<style lang="stylus">
.ql-editor
  min-height 400px
</style>

<template>
  <div class="components-editor">
    <h2>Editor 编辑器</h2>
    <!-- <p class="color-grey1 pc__mt10">在一组备选项中进行单选</p> -->
    <el-row class="pc__mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 pc__mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-editor v-model="content" :action="action"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 上传地址
       * @type {String}
       */
      action: 'http://orange.bananayc.com/honghealthy/file/fileUpload',
      /**
       * 内容
       * @type {String}
       */
      content: '<p>测试测试测试</p>'
    }
  },
  methods: {
  }
}
</script>
