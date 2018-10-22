<style lang="stylus" scoped>
.header-nav
  display block

  .el-menu
    border-bottom none
</style>

<template>
  <div class="header-nav">
    <el-menu :default-active="active" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item, index) in menu" :key="index" :index="item.name" @click="handleSelect(item.page)">{{item.text}}</el-menu-item>
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
          name: 'bc',
          page: 'bc.index',
          text: '基础'
        },
        {
          name: 'components',
          page: 'components.index',
          text: '业务组件'
        },
        {
          name: 'utils',
          page: 'utils.index',
          text: '工具'
        }
      ]
    }
  },
  computed: {
    /**
     * 当前菜单
     * @returns {String}
     */
    active () {
      return this.$route.meta.module
    }
  },
  methods: {
    /**
     * 处理菜单选择
     * @param {String} page -页面
     */
    handleSelect (page) {
      this.$router.push({
        name: page
      })
    }
  }
}
</script>
