<style lang="stylus" scoped>
.header-nav
  display block

  .el-menu
    border-bottom none
</style>

<template>
  <div class="header-nav">
    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.name">{{item.text}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 菜单
       * @type {Array}
       */
      menu: [
        {
          name: 'bc.index',
          text: '基础'
        },
        {
          name: 'components.index',
          text: '业务组件'
        },
        {
          name: 'utils.index',
          text: '工具'
        }
      ],
      /**
       * 当前菜单
       * @type {String}
       */
      active: 'bc.index'
    }
  },
  methods: {
    /**
     * 处理菜单选择
     * @param {String} name -路由名称
     */
    handleSelect (name) {
      this.active = name
      this.$router.push({
        name
      })
    }
  }
}
</script>
