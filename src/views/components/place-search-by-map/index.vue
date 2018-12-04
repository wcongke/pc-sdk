<style lang="stylus" scoped>
.components-place-search-by-map
  display block
</style>

<template>
  <div class="components-place-search-by-map">
    <h2>PlaceSearchByMap 通过地图搜索地址</h2>
    <p class="color-grey1 pc__mt10">通过地图搜索地址</p>
    <el-row class="pc__mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="pc__mt10">
      <el-col :span="24">
        <pc-place-search-by-map :amap-key="AMAP_KEY" v-model="place"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { AMAP_KEY } from '@/common/amap'

export default {
  data () {
    return {
      AMAP_KEY,
      /**
       * 行政地址
       * @type {Object}
       */
      place: {}
    }
  }
}
</script>
