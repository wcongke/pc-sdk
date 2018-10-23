<style lang="stylus" scoped>
.components-radio
  display block

  .mt10
    margin-top 10px

  .mt40
    margin-top 40px
</style>

<template>
  <div class="components-radio">
    <h2>Radio 单选框</h2>
    <p class="color-grey1 mt10">在一组备选项中进行单选</p>
    <el-row class="mt40">
      <el-col :span="24">
        <h3>基础用法</h3>
        <p class="color-grey1 mt10">由于选项默认可见，不宜过多。</p>
      </el-col>
    </el-row>
    <el-row class="mt10">
      <el-col :span="24">
        <pc-radio name="active1" v-model="active1" :options="options1"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active1: '1',
      options1: [
        {
          label: '男',
          value: '1'
        }, {
          label: '女',
          value: '2'
        }
      ]
    }
  }
}
</script>
