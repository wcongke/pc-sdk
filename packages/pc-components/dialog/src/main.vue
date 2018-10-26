<style lang="stylus" scoped>
.crm-dialog
  display block
</style>

<template>
  <div class="crm-dialog">
    <el-dialog
      append-to-body
      :title="title"
      :visible.sync="dialogVisible"
      :width="width"
      :before-close="cancel"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed">
      <slot name="body"></slot>
      <span slot="footer" v-if="showFooter">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-dialog',
  mixins: [index]
}
</script>
