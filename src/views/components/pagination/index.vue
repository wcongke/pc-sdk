<style lang="stylus" scoped>
.components-pagination
  display block

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-pagination">
    <h2>Pagination 分页</h2>
    <p class="color-grey1 mt10">分页</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <pc-pagination
          :pageSize="pagination.pageSize"
          :total="pagination.total"
          :currentPage.sync="pagination.currentPage"
          :on-change="handleCurrentChange"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /**
       * 分页信息
       * @type {Object}
       */
      pagination: {
        // 每页条数
        pageSize: 20,
        // 当前页数
        currentPage: 1,
        // 总数
        total: 1000,
        // 总页数
        pageCount: 1
      }
    }
  },
  methods: {
    /**
     * 改变当前页数
     * @param {Object} info -info
     */
    handleCurrentChange (info) {
      global.console.log(info)
    }
  }
}
</script>
