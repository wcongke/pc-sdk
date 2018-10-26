<style lang="stylus" scoped>
.components-dialog
  display block

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-dialog">
    <h2>Dialog 对话框</h2>
    <p class="color-grey1 mt10">对话框</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <el-button @click="isShow = true">点击打开对话框</el-button>
        <pc-dialog
          title="测试"
          width="40%"
          :show-footer="true"
          v-model="isShow"
          @cancel="isShow = false"
          @submit="isShow = false">
          <div slot="body">body</div>
        </pc-dialog>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
