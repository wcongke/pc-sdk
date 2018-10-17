<style lang="stylus" scoped>
.components-vertical-menu
  display block

  &__container
    padding 20px
    background-color #eee

  &__menu
    padding 0 20px
    z-index 1000

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-vertical-menu">
    <h2>VerticalMenu 垂直菜单</h2>
    <p class="color-grey1 mt10">垂直菜单</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="components-vertical-menu__container">
          <crm-vertical-menu
            color="#f44336"
            width="200px"
            :menu="menu"
            :active="active"
            @selected="handleSelect"/>
        </div>
      </el-col>
    </el-row>
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
          name: '1',
          text: '指南'
        },
        {
          name: '2',
          text: '组件'
        },
        {
          name: '3',
          text: '资源'
        },
        {
          name: '4',
          text: 'TIPS'
        }
      ],
      /**
       * 当前菜单
       * @type {String}
       */
      active: '1'
    }
  },
  methods: {
    /**
     * 选择菜单
     * @param {Number, String} index - index
     */
    handleSelect (index) {
      this.active = index
      global.console.log(index)
    }
  }
}
</script>
