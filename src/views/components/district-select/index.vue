<style lang="stylus" scoped>
.components-district-select
  display block
</style>

<template>
  <div class="components-district-select">
    <h2>DistrictSelect 行政区域选择</h2>
    <p class="color-grey1 pc__mt10">行政区域选择</p>
    <el-row class="pc__mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-district-select :amap-key="amapInfo.key" v-model="district"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import amapInfo from '@/common/amap'

export default {
  data () {
    return {
      amapInfo: amapInfo(),
      /**
       * 行政区域
       * @type {Object}
       */
      district: {}
    }
  }
}
</script>
