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
        <pc-district-select amap-key="462486a5c1c5186befb704f32f4d22fb" :default-district="district" @district="getDistrict"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 行政区域
       * @type {Object}
       */
      district: {}
    }
  },
  methods: {
    /**
     * 获取行政区域
     * @param {Object} district -行政区域
     */
    getDistrict (district) {
      this.district = district
    }
  }
}
</script>
