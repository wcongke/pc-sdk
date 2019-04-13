<style lang="stylus" scoped>
@import '../../../../packages/pc-bc/stylus/index'

.components-img
  display block

  // &__container
  //   padding 20px
  //   background-color $color-grey5

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-img">
    <h2>img 图片</h2>
    <p class="color-grey1 mt10">图片</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="components-img__container">
          <pc-img box-width="400px" box-height="300px" :src="img"/>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      img: 'http://wb.qn.freshdayu.com/orange-tech-logo@600x200-black.png'
    }
  }
}
</script>
