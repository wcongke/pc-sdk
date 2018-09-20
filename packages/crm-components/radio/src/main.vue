<style lang="stylus" scoped>
.crm-radio
  display inline-block

  &__input
    width 18px
    display inline-block

    input[type='radio']
      width 20px
      height auto
      opacity 0
      cursor pointer

      &:checked+label
        background-color #007fff
        border 1px solid #007fff

        &::after
          position absolute
          content ""
          width 4px
          height 8px
          top 2px
          left 5px
          border 2px solid #fff
          border-top none
          border-left none
          transform rotate(45deg)

    label
      position absolute
      left 0
      top 50%
      transform translateY(-50%)
      width 16px
      height 16px
      border-radius 50%
      border 1px solid #999

  &__item
    display inline-block
    cursor pointer
    position relative
    line-height 1.5
    min-width 80px

    &--label
      margin-left 10px
      vertical-align middle

    &+&
      margin-left 30px
</style>

<template>
  <div class="crm-radio">
    <div
      class="crm-radio__item"
      :style="{ minWidth: minWidth + 'px' }"
      v-for="(item, index) in options"
      :key="index"
      @click="active = item.value">
      <span class="crm-radio__input">
        <input :id="`${name}-${index}`" :name="name" type="radio" :value="item.value" :checked="item.value === active"/>
        <label :for="`${name}-${index}`"></label>
      </span>
      <span class="crm-radio__item--label">{{item.label}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crm-radio',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    },
    minWidth: {
      type: Number,
      default: 80
    }
  },
  data () {
    return {
      active: this.value
    }
  },
  watch: {
    /**
     * 监听input变化
     * @param {Boolean} val - 隐藏、显示状态
     */
    value (val) {
      this.active = val
    },
    /**
     * 监听active变化
     * @param {Boolean} val - 隐藏、显示状态
     */
    active (val) {
      this.$emit('input', val)
    }
  }
}
</script>
