<style lang="stylus" scoped>
.district-select
  display inline-block

  &__select
    margin-right 10px
    width 150px

    &:last-child
      margin-right 0
</style>

<template>
  <div class="district-select">
    <el-select
      class="district-select__select"
      placeholder="请选择"
      v-model="district.province"
      value-key="adcode"
      @visible-change="districtSearch(amapKey, '中国', 'country', 1)"
      @change="selectProvince">
      <el-option
        v-for="item in options"
        v-bind:key="item.adcode"
        v-bind:label="item.name"
        v-bind:value="item"></el-option>
    </el-select>
    <el-select
      class="district-select__select"
      placeholder="请选择"
      v-model="district.city"
      value-key="adcode"
      @visible-change="districtSearch(amapKey, district.province ? district.province.name : null, 'province', 1)"
      @change="selectCity">
      <el-option
        v-for="item in options"
        v-bind:key="item.adcode"
        v-bind:label="item.name"
        v-bind:value="item"></el-option>
    </el-select>
    <el-select
      class="district-select__select"
      placeholder="请选择"
      v-model="district.district"
      value-key="adcode"
      @visible-change="districtSearch(amapKey, district.city ? district.city.name : null, 'city', 1)"
      @change="selectDistrict">
      <el-option
        v-for="item in options"
        v-bind:key="item.adcode"
        v-bind:label="item.name"
        v-bind:value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-district-select',
  mixins: [index]
}
</script>
