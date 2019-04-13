<style lang="stylus" scoped>
.pc-img
  display inline-block

  &+&
    margin-left 5px

  &__box
    position relative
    overflow hidden
    border 1px dashed #999
    border-radius 4px
    background-color #fff
    cursor pointer

    &__operation-box
      position absolute
      right 5px
      bottom 5px

  &__original-img-box
    position relative
    margin auto
    height 100%
    width 100%

  &__original-img
    position absolute
    width 90%
    transform translate(-50%, -50%)
    left 50%
    top 50%

  &__dialog

    &__img-box
      max-height 400px
      overflow hidden
      overflow-x auto
      overflow-y auto
      text-align center

    &__operation-box
      text-align center
</style>

<template>
  <div class="pc-img">
    <div class="pc-img__box" :style="{width: boxWidth, height: boxHeight}">
      <div class="pc-img__original-img-box" :style="{width: `${imgWidth}%`, transform: `rotate(${rotate}deg)`}"  @click="dialogVisible = true, imgWidth = 60">
        <img class="pc-img__original-img" :src="imgSrc">
      </div>
      <el-button-group class="pc-img__box__operation-box">
        <el-button icon="el-icon-search" size="mini" circle @click="dialogVisible = true, imgWidth = 60"></el-button>
        <el-button icon="el-icon-zoom-in" size="mini" circle @click="imgWidth += 5"></el-button>
        <el-button icon="el-icon-zoom-out" size="mini" circle @click="imgWidth -= 5"></el-button>
        <el-button icon="el-icon-refresh" size="mini" circle @click="rotate += 90"></el-button>
      </el-button-group>
    </div>
    <el-dialog
      append-to-body
      :visible.sync="dialogVisible"
      width="80%"
      :close-on-click-modal="true"
      :close-on-press-escape="false">
      <div class="pc-img__dialog">
        <el-row>
          <el-col :span="24">
            <div class="pc-img__dialog__operation-box">
              <el-button-group>
                <el-button icon="el-icon-zoom-in" @click="imgWidth += 5"></el-button>
                <el-button icon="el-icon-zoom-out" @click="imgWidth -= 5"></el-button>
                <el-button icon="el-icon-refresh" @click="rotate += 90"></el-button>
              </el-button-group>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="pc-img__dialog__img-box">
              <img class="pc-img__dialog__img" :src="imgSrc" :style="{width: `${imgWidth}%`, transform: `rotate(${rotate}deg)`}">
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-img',
  mixins: [index]
}
</script>
