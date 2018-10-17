<style lang="stylus" scoped>
.vertical-menu
  display block

  &__el-menu
    border-right none
</style>

<template>
  <div class="vertical-menu">
    <el-menu
      class="vertical-menu__el-menu"
      :style="{width}"
      :default-active="activeIndex"
      :active-text-color="color"
      @select="handleSelect">
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.name">
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'crm-vertical-menu',
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
    }
  },
  created () {
    this.activeIndex = this.active
  }
}
</script>
