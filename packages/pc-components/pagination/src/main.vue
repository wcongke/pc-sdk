<style lang="stylus" scoped>
.pc-pagination
  display inline-block

  .el-pagination__editor
    padding 0
    border 0

  .btn-next, .btn-prev, .el-pager li, button.disabled
    background-color transparent
</style>

<template>
  <el-pagination
    class="pc-pagination"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="pageSizes"
    :page-size="pageSize"
    :layout="layout"
    prev-text="上一页"
    next-text="下一页"
    :total="total">
  </el-pagination>
</template>
<script>
export default {
  name: 'pc-pagination',
  props: {
    // 每页显示数量, 默认20
    pageSize: {
      type: Number,
      default: 20
    },
    // 总数量,默认为1
    total: {
      type: Number,
      default: 1
    },
    // 当前页数，默认第1页
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页显示个数选择器配置
    pageSizes: {
      type: Array,
      default: () => [20, 40, 60, 80]
    },
    // 翻页显示风格,默认为"页面翻页"类型风格
    pageType: {
      type: Number,
      default: 1
    },
    // 组件初始化、翻页数量调整、翻页页码改变回调函数
    onChange: {
      type: Function,
      default: () => {}
    },
    // 是否初始化组件就发起请求
    autoRequest: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      layout: '',
      pageNum: this.pageSize,
      fromSync: false,
      beforeChange: false
    }
  },
  created () {
    switch (this.pageType) {
      // 页面翻页风格
      case 1:
        this.layout = 'total, sizes, prev, pager, next, jumper'
        break
      // 弹框翻页风格
      case 2:
        this.layout = 'prev, pager, next'
        break
      default:
        break
    }
    if (!this.autoRequest) return
    this.onChange({
      currentPage: this.currentPage,
      pageSize: this.pageNum
    })
  },
  watch: {
    /**
     * 每页数量变化时触发
     * @param {Number} size - 每页数量
     */
    pageSize (size) {
      if (size === this.pageNum) return
      this.handleSizeChange(size)
    },
    /**
     * 监听是否来源于sync的改变
     */
    currentPage () {
      if (this.beforeChange) {
        this.beforeChange = false
        return
      }
      this.fromSync = true
    }
  },
  methods: {
    /**
     * 每页显示数量调整时触发
     * @param {Number} pageSize - 数量
     */
    handleSizeChange (pageSize) {
      this.$emit('update:pageSize', pageSize)
      this.pageNum = pageSize
      const num = Math.ceil(this.total / pageSize)

      // 防止重复回调onChange，因为page页码改变时也会回调onChange
      if (this.currentPage <= num) {
        this.onChange({
          currentPage: this.currentPage,
          pageSize: this.pageNum
        })
      }
    },
    /**
     * 翻页时触发
     * @param {Nubmer} currentPage - 当前页
     */
    handleCurrentChange (currentPage) {
      if (this.fromSync) {
        this.fromSync = false
        return
      }
      this.beforeChange = true
      this.$emit('update:currentPage', currentPage)
      this.onChange({
        currentPage,
        pageSize: this.pageNum
      })
    }
  }
}
</script>
