<style lang="stylus" scoped>
.place-search
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

  &__item-address
    font-size 12px
    color  #aaa
</style>

<template>
  <div class="place-search">
    <div class="place-search__address-input">
      <div class="place-search__address-input--left">
        <el-select
          class="place-search__select"
          placeholder="请选择"
          v-model="model.address.province"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, '中国', 'country', 1)"
          @change="
            model.address.city = null,
            model.address.district = null,
            model.address.street = null,
            model.address.streetAddress = null,
            model.address.details = null,
            isInit = false">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
        <el-select
          class="place-search__select"
          placeholder="请选择"
          v-model="model.address.city"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, model.address.province ? model.address.province.name : null, 'province', 1)"
          @change="
            model.address.district = null,
            model.address.street = null,
            model.address.streetAddress = null,
            model.address.details = null,
            isInit = false">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
        <el-select
          class="place-search__select"
          placeholder="请选择"
          v-model="model.address.district"
          value-key="adcode"
          filterable
          @visible-change="districtSearch(amapKey, model.address.city ? model.address.city.name : null, 'city', 1)"
          @change="
            model.address.street = null,
            model.address.streetAddress = null,
            model.address.details = null,
            isInit = false">
          <el-option
            v-for="item in model.options"
            v-bind:key="item.adcode"
            v-bind:label="item.name"
            v-bind:value="item"></el-option>
        </el-select>
      </div>
      <div class="place-search__address-input--right">
        <el-autocomplete
          class="place-search__input"
          placeholder="请输入地址"
          value-key="address"
          v-model="model.address.streetAddress"
          :fetch-suggestions="streetSearch"
          @select="selectStreet">
          <template slot-scope="{ item }">
            <p>{{item.name}}</p>
            <p class="place-search__item-address">{{item.address}}</p>
          </template>
        </el-autocomplete>
      </div>
    </div>
    <el-input class="place-search__details" v-model="model.address.details" v-if="hadDetails" placeholder="请输入门牌号"></el-input>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-place-search',
  mixins: [index]
}
</script>
