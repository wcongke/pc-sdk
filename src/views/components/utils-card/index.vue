<style lang="stylus" scoped>
@import '../../../../packages/crm-bc/stylus/index'

.components-utils-card
  display block

  &__container
    padding 20px
    background-color $color-grey5

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-utils-card">
    <h2>UtilsCard 工具卡片</h2>
    <p class="color-grey1 mt10">工具卡片</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <!-- <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p> -->
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <div class="components-utils-card__container">
          <crm-utils-card btn-name="高级" :show-all="false">
            <div slot="top">top</div>
            <div slot="body">body</div>
          </crm-utils-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>
