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
        <el-form label-width="200px" label-position="left">
          <el-form-item label="上传地址">
            <el-input v-model="action"></el-input>
          </el-form-item>
          <el-form-item label="token">
            <el-input v-model="headers.accessToken"></el-input>
          </el-form-item>
          <el-form-item label="上传的请求头部">
            <!-- <el-input v-model="headers"></el-input> -->
          </el-form-item>
          <el-form-item label="上传时附带的额外参数">
            <!-- <el-input v-model="data"></el-input> -->
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-editor
          v-model="content"
          :action="action"
          :headers="headers"
          :data="data"
          response-attr="result"/>
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
      action: '',
      /**
       * 上传的请求头部
       * @type {Object}
       */
      headers: {},
      /**
       * 上传时附带的额外参数
       * @type {Object}
       */
      data: {},
      /**
       * 内容
       * @type {String}
       */
      content: '<p>测试测试测试</p>'
    }
  }
}
</script>
