<style lang="stylus" scoped>
.utils-card
  display block
  background-color #fff
  box-shadow 0 2px 12px 0 rgba(0,0,0,.1)
  border-radius 4px

  &__header
    padding 15px 20px
    border-bottom 1px solid #ebeef5
    display flex

    &--left
      flex 1
      display flex
      align-items center

  &__body
    padding 15px 20px
    border-top 1px solid #ebeef5
</style>

<template>
  <div class="utils-card">
    <div class="utils-card__header">
      <div class="utils-card__header--left">
        <slot name="top"></slot>
      </div>
      <div class="utils-card__header--right">
        <el-button type="text" @click="isShowAll = !isShowAll">{{btnName}}</el-button>
      </div>
    </div>
    <div class="utils-card__body" v-if="isShowAll">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crm-utils-card',
  props: {
    /**
     * 显示全部
     * @type {Boolean}
     */
    showAll: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮名称
     * @type {String}
     */
    btnName: {
      type: String,
      default: '高级查询'
    }
  },
  data () {
    return {
      /**
       * 是否显示全部
       * @type {Boolean}
       */
      isShowAll: false
    }
  },
  created () {
    this.isShowAll = this.showAll
  }
}
</script>
