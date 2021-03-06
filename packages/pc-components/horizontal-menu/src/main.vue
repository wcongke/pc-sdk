<style lang="stylus" scoped>
.horizontal-menu
  display flex
  background-color #ffffff
  box-shadow 0 2px 12px 0 #d1dae0

  &__logo
    height 34px

  &__container
    display flex
    margin 0 auto

  &__left
    display flex
    align-items center
    min-width 100px

  &__center
    flex 1
    display flex
    align-items center
    justify-content center
    overflow hidden
    overflow-x auto

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
    white-space nowrap

    li
      list-style-type none
      display inline-block
      cursor pointer

    &__item
      margin 0 20px
      text-align center
      position relative

      &--active
        position absolute
        width 70%
        height 2px
        left 50%
        bottom 8px
        transform translateX(-50%)
        box-shadow 0px 1px 6px rgba(0, 0, 0, 0.4)

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
  <div class="horizontal-menu" :style="{height, backgroundColor}">
    <div class="horizontal-menu__container" :style="{width: containerWidth, padding: containerPadding}">
      <div class="horizontal-menu__left">
        <h2 v-if="title" :style="{color}">{{title}}</h2>
        <img v-else-if="logo" class="horizontal-menu__logo" :src="logo"/>
      </div>
      <div class="horizontal-menu__center">
        <ul class="horizontal-menu__menu">
          <li v-for="(item, index) in menu" :key="index">
            <div
              class="horizontal-menu__menu__item"
              :class="{'is-active': item.name === active}"
              :style="{height, lineHeight: height}"
              @click="handleSelect(item.name, item.page)">
              <span :style="{color: textColor}">{{item.text}}</span>
              <span
                class="horizontal-menu__menu__item--active"
                :style="{backgroundColor: color}"
                v-if="item.name === active"></span>
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
          :style="{color: textColor}"
          @click="handleSelect(item.name, item.page)"></i>

        <el-dropdown class="horizontal-menu__el-dropdown" @command="handleCommand">
          <span class="el-dropdown-link" :style="{color: textColor}">
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
  </div>
</template>

<script>
export default {
  name: 'pc-horizontal-menu',
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
     * logo
     * @type {String}
     */
    logo: {
      type: String,
      default: ''
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
     * 颜色
     * @type {String}
     */
    color: {
      type: String,
      default: '#00a0e2'
    },
    /**
     * 字体颜色
     * @type {String}
     */
    textColor: {
      type: String,
      default: '#333'
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
     * 菜单容器宽度
     * @type {String}
     */
    containerWidth: {
      type: String,
      default: '100%'
    },
    /**
     * 菜单容器内边距
     * @type {String}
     */
    containerPadding: {
      type: String,
      default: '0 20px'
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
     * @type {Array}
     */
    dropdownMenu: {
      type: Array,
      default: () => []
    },
    /**
     * 下拉菜单名称
     * @type {String}
     */
    dropdownName: {
      type: String,
      default: ''
    }
  },
  computed: {
    /**
     * 下拉菜单
     */
    dropdown () {
      return {
        text: this.dropdownName,
        menu: this.dropdownMenu
      }
    }
  },
  methods: {
    /**
     * 选择菜单项
     * @param {Number, String} index - index
     * @param {String} page - 页面
     */
    handleSelect (index, page) {
      this.$emit('selected', index, page)
    },
    /**
     * 下拉菜单选择
     * @param {String} command - command
     */
    handleCommand (command) {
      this.$emit('selected', command)
    }
  }
}
</script>
