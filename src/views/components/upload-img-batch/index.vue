<style lang="stylus" scoped>
.components-upload-img-batch
  display block
</style>

<template>
  <div class="components-upload-img-batch">
    <h2>UploadBatch 批量上传文件</h2>
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
        <pc-upload-img-batch
          :action="action"
          :headers="headers"
          :data="data"
          :max-size="10"
          :limit="2"
          img-list-width="100%"
          img-width="400px"
          img-height="400px"
          :show-box-operation="false"
          :file-type="['image/jpg', 'image/png', 'image/jpeg']"
          fileTypeText="jpg、jpeg、png"
          response-attr="result"
          v-model="fileList"/>
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
       * url
       * @type {String}
       */
      fileList: []
    }
  }
}
</script>
