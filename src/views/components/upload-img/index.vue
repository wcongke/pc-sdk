<style lang="stylus" scoped>
.components-upload-img
  display block
</style>

<template>
  <div class="components-upload-img">
    <h2>Upload 上传图片</h2>
    <!-- <p class="color-grey1 pc__mt10">在一组备选项中进行单选</p> -->
    <el-row class="pc__mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 pc__mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-upload-img v-model="url" :action="action"/>
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
       * url
       */
      url: ''
    }
  }
}
</script>
