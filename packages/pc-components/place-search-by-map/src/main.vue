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
          @visible-change="districtSearch(amapKey, '中国', 'country', 1)"
          @change="
            model.address.city = null,
            model.address.district = null,
            model.address.street = null,
            model.address.details = null,
            setMapCenter(model.address.province.center)
            isInit = false">
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
          @visible-change="districtSearch(amapKey, model.address.province ? model.address.province.name : null, 'province', 1)"
          @change="
            model.address.district = null,
            model.address.street = null,
            model.address.details = null,
            setMapCenter(model.address.city.center)
            isInit = false">
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
          @visible-change="districtSearch(amapKey, model.address.city ? model.address.city.name : null, 'city', 1)"
          @change="
            model.address.street = null,
            model.address.details = null
            setMapCenter(model.address.district.center),
            isInit = false">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
      </div>
      <div class="place-search-by-map__address-input--right">
        <el-autocomplete
          class="place-search-by-map__input"
          placeholder="请输入地址"
          value-key="name"
          v-model="model.address.streetAddress"
          :fetch-suggestions="streetSearch"
          @select="selectStreet">
          <template slot-scope="{ item }">
            <p>{{item.address}}</p>
          </template>
        </el-autocomplete>
      </div>
    </div>
    <el-input class="place-search-by-map__details" v-model="model.address.details" v-if="hadDetails" placeholder="请输入门牌号"></el-input>
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
