<style lang="stylus" scoped>
.vertical-menu
  display inline-block

  &__menu
    list-style-type none

  &__item
    padding 15px 20px
    font-size 14px
    color #333
    cursor pointer

    &:focus,
    &:hover,
    &.is-active
      font-weight 500
</style>

<template>
  <div class="vertical-menu">
    <ul class="vertical-menu__menu" :style="{backgroundColor, width}">
      <li
        class="vertical-menu__item"
        v-for="(item, index) in menu"
        :key="index"
        :style="{color: item.name === active ? color : '#333'}"
        :class="{'is-active': item.name === active}"
        @click="handleSelect(item.name)">
        <span>{{item.text}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'pc-vertical-menu',
  props: {
    /**
     * 颜色
     * @type {String}
     */
    color: {
      type: String,
      default: '#00a0e2'
    },
    /**
     * 背景色
     * @type {String}
     */
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    /**
     * 宽
     * @type {String}
     */
    width: {
      type: String,
      default: '200px'
    },
    /**
     * 菜单
     * @type {Array}
     */
    menu: {
      type: Array,
      default: () => []
    },
    /**
     * 当前激活菜单的index
     * @type {Number, String}
     */
    active: {
      type: [Number, String],
      default: null
    }
  },
  methods: {
    /**
     * 选择菜单项
     * @param {Number, String} index - index
     */
    handleSelect (index) {
      this.$emit('selected', index, 'menu')
    }
  }
}
</script>
