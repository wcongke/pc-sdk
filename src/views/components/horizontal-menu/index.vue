<style lang="stylus" scoped>
.components-horizontal-menu
  display block

  &__container
    padding 20px
    background-color #eee

  &__menu
    padding 0 20px

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-horizontal-menu">
    <h2>HorizontalMenu 水平菜单</h2>
    <p class="color-grey1 mt10">水平菜单</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="components-horizontal-menu__container">
          <crm-horizontal-menu
            class="components-horizontal-menu__menu"
            title="CRM"
            color="#f44336"
            height="50px"
            :menu="menu"
            :icon-list="iconList"
            :active="active"
            :dropdown="dropdown"
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
        }
      ],
      /**
       * 当前菜单
       * @type {String}
       */
      active: '1',
      /**
       * icon列表
       * @type {Array}
       */
      iconList: [
        {
          name: 'message',
          icon: 'el-icon-message'
        }
      ],
      /**
       * 下拉菜单
       * @type {Object}
       */
      dropdown: {
        text: '小明',
        menu: [
          {
            name: '1',
            text: '个人中心'
          },
          {
            name: '2',
            text: '退出'
          }
        ]
      }
    }
  },
  methods: {
    /**
     * 选择菜单
     * @param {Number, String} index - index
     * @param {String} type - 类型
     */
    handleSelect (index, type) {
      if (type === 'menu') {
        this.active = index
      }

      global.console.log(index)
    }
  }
}
</script>
