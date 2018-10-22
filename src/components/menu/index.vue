<style lang="stylus" scoped>
.menu
  display block

  .el-menu
    border none
</style>

<template>
  <div class="menu">
    <el-menu
      :default-active="active"
      @select="handleSelect">
      <el-menu-item v-for="(item, index) in model.list[firstRouterName]" :key="index" :index="item.name" :disabled="item.disabled">
        <span slot="title">{{item.text}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import model from './model'

export default {
  data () {
    return {
      /**
       * 左侧菜单数据
       * @type {Object}
       */
      model: model()
    }
  },
  computed: {
    /**
     * 一级路由名称
     * @return {String}
     */
    firstRouterName () {
      return this.$route.meta.module
    },
    /**
     * 当前菜单
     * @returns {String}
     */
    active () {
      return this.$route.name
    }
  },
  methods: {
    /**
     * 处理菜单选择
     * @param {String} name -路由名称
     */
    handleSelect (name) {
      this.model.active = name
      this.$router.push({
        name
      })
    }
  }
}
</script>
