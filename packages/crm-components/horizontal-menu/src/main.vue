<style lang="stylus" scoped>
.horizontal-menu
  display flex
  background-color #ffffff
  box-shadow 0 2px 12px 0 #d1dae0

  &__left
    display flex
    align-items center
    min-width 100px

  &__center
    flex 1
    display flex
    align-items center
    justify-content center

  &__right
    display flex
    align-items center
    justify-content center
    min-width 100px

  &__icon
      margin-right 10px
      cursor pointer

  &__menu
    font-size 14px
    color #555

    li
      list-style-type none
      display inline-block
      cursor pointer

    &__item
      margin 4px 20px 0
      text-align center

      &--active
        display block
        width 20px
        height 3px
        margin 0 auto
        margin-top 4px
        box-shadow 0px 2px 2px rgba(0, 0, 0, .5)

      &:focus,
      &:hover,
      &.is-active
        font-weight 500

  &__el-dropdown
    cursor pointer

  &__el-menu
    display inline-block
    border-bottom none !important

  &__el-menu-item
    padding 0
    margin 5px 20px !important
    line-height 50px !important
    height 50px !important

    &.is-active
      box-shadow 0px 5px 1px -5px rgba(0, 0, 0, .5)
      border-bottom-width 3px !important

</style>

<template>
  <div class="horizontal-menu" :style="{height}">
    <div class="horizontal-menu__left">
      <h2 :style="{color}">{{title}}</h2>
    </div>
    <div class="horizontal-menu__center">
      <ul class="horizontal-menu__menu">
        <li v-for="(item, index) in menu" :key="index">
          <div
            class="horizontal-menu__menu__item"
            :class="{'is-active': item.name === activeIndex}"
            @click="handleSelect(item.name)">
            <span>{{item.text}}</span>
            <span
              class="horizontal-menu__menu__item--active"
              :style="{backgroundColor: color}"
              v-if="item.name === activeIndex"></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="horizontal-menu__right">
      <i
        class="horizontal-menu__icon"
        v-for="(item, index) in iconList"
        :key="index"
        :class="item.icon"
        @click="handleCommand(item.name)"></i>

      <el-dropdown class="horizontal-menu__el-dropdown" @command="handleCommand">
        <span class="el-dropdown-link">
          {{dropdown.text}} <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(item, index) in dropdown.menu"
            :key="index"
            :command="item.name">{{item.text}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'crm-horizontal-menu',
  props: {
    /**
     * 标题
     * @type {String}
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * 颜色
     * @type {String}
     */
    color: {
      type: String,
      default: '#00a0e2'
    },
    /**
     * 高
     * @type {String}
     */
    height: {
      type: String,
      default: '50px'
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
    },
    /**
     * icon列表
     * @type {Array}
     */
    iconList: {
      type: Array,
      default: () => []
    },
    /**
     * 下拉菜单
     * @type {Object}
     */
    dropdown: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      /**
       * 当前菜单
       * @type {Number, String}
       */
      activeIndex: null
    }
  },
  methods: {
    /**
     * 选择菜单项
     * @param {Number, String} index - index
     */
    handleSelect (index) {
      this.activeIndex = index
      this.$emit('selected', index, 'menu')
    },
    /**
     * 下拉菜单选择
     * @param {String} command - command
     */
    handleCommand (command) {
      this.$emit('selected', command)
    }
  },
  created () {
    this.activeIndex = this.active
  }
}
</script>
