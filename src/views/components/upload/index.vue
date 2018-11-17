<style lang="stylus" scoped>
.components-upload
  display block
</style>

<template>
  <div class="components-upload">
    <h2>Upload 上传文件</h2>
    <!-- <p class="color-grey1 pc__mt10">在一组备选项中进行单选</p> -->
    <el-row class="pc__mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 pc__mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-upload :action="action" @getUrl="getUrl"/>
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
      action: 'http://interface.bananayc.com/honghealthy/file/fileUpload'
    }
  },
  methods: {
    getUrl (file) {
      console.log(file)
    }
  }
}
</script>
