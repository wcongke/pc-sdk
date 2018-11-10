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
      @change="district.city = null">
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
      @visible-change="districtSearch(amapKey, district.province.name, 'province', 1)"
      @change="district.district = null">
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
      @visible-change="districtSearch(amapKey, district.city.name, 'city', 1)"
      @change="handleChange">
      <el-option
        v-for="item in options"
        v-bind:key="item.adcode"
        v-bind:label="item.name"
        v-bind:value="item"></el-option>
    </el-select>
  </div>
</template>

<script>
import utils from '../../utils/index'
import index from './index'

export default {
  name: 'pc-district-select',
  mixins: [index],
  props: {
    /**
     * 高德key
     * @type {String}
     */
    amapKey: {
      type: String,
      default: ''
    },
    /**
     * 默认行政区域
     * @type {Object}
     */
    defaultDistrict: {
      type: Object,
      default: () => {}
    }
  },
  created () {
    if (this.defaultDistrict) {
      utils.merge(this.district, this.defaultDistrict)
    }
  }
}
</script>
