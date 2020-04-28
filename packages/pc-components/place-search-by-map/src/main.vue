<style lang="stylus" scoped>
.place-search-by-map
  display inline-block
  height 100%
  width 100%

  &__select
    width 150px
    margin-right 10px

    // &:last-child
    //   margin-right 0

  &__input
    width 100%

  &__address-input
    display flex

    &--right
      flex 1

  &__details
    margin-top 10px
    width 100%

  &__map
    margin-top 10px
    background-color #eee
    width 100%
    min-height 300px

  &__item-address
    font-size 12px
    color  #aaa
</style>

<template>
  <div class="place-search-by-map">
    <div class="place-search-by-map__address-input">
      <div class="place-search-by-map__address-input--left">
        <el-select
          class="place-search-by-map__select"
          placeholder="请选择"
          v-model="model.address.province"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, amapVersion, '中国', 'country', 1)"
          @change="selectProvince"
          :disabled="model.disabled">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
        <el-select
          class="place-search-by-map__select"
          placeholder="请选择"
          v-model="model.address.city"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, amapVersion, model.address.province ? model.address.province.name : null, 'province', 1)"
          @change="selectCity"
          :disabled="model.disabled">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
        <el-select
          class="place-search-by-map__select"
          placeholder="请选择"
          v-model="model.address.district"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, amapVersion, model.address.city ? model.address.city.name : null, 'city', 1)"
          @change="selectDistrict"
          :disabled="model.disabled">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
      </div>
      <div class="place-search-by-map__address-input--right">
        <el-select
          class="place-search-by-map__input"
          v-model="model.address.streetAddress"
          value-key="address"
          filterable
          remote
          reserve-keyword
          placeholder="请输入地址"
          @change="selectStreet"
          :disabled="model.disabled"
          :remote-method="streetSearch"
          :loading="model.streetLoading">
          <el-option
            v-for="item in model.streetOptions"
            :key="item.id"
            :label="item.name"
            :value="item">
          </el-option>
        </el-select>
      </div>
    </div>
    <el-input class="place-search-by-map__details" v-model="model.address.details" v-if="hadDetails" placeholder="请输入门牌号" :disabled="model.disabled" @focus="model.entering = true" @blur="model.entering = false"></el-input>
    <div class="place-search-by-map__map" ref="map"></div>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-place-search-by-map',
  mixins: [index]
}
</script>
