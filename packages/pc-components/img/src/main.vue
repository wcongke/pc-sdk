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

  &__original-img-box-1
    position relative
    width 100%
    height 100%
    overflow-x auto
    overflow-y auto
  
  &__original-img-box-2
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
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    z-index 9999

    &__modal
      position absolute
      width 100%
      height 100%
      left 0
      top 0
      background #000
      opacity .5
      z-index 9995

    &__img-box-1
      position relative
      width 100%
      height 100%
      overflow-x auto
      overflow-y auto
    
    &__img-box-2
      position relative
      margin auto
      height 100%
      width 100%
      z-index 9996

    &__img
      position absolute
      left 50%
      top 50%
      width 100%
      box-shadow 0 0 10px 5px rgba(0, 0, 0, 0.2)
      transform translate(-50%, -50%)
      padding 20px
      background-color #fff

    &__operation-box
      position absolute
      left 50%
      bottom 40px
      transform translateX(-50%)
      z-index 9997
</style>

<template>
  <div class="pc-img">
    <div class="pc-img__box" :style="{width: boxWidth, height: boxHeight}">
      <div class="pc-img__original-img-box-1">
        <div class="pc-img__original-img-box-2" :style="{width: `${imgWidth}%`, transform: `rotate(${rotate}deg)`}"  @click="dialogVisible = true, imgWidth = 60">
          <img class="pc-img__original-img" :src="imgSrc">
        </div>
      </div>
      <el-button-group class="pc-img__box__operation-box" v-if="showBoxOperation">
        <el-button icon="el-icon-zoom-in" size="mini" circle @click="imgWidth += 5"></el-button>
        <el-button icon="el-icon-zoom-out" size="mini" circle @click="imgWidth -= 5"></el-button>
        <el-button icon="el-icon-refresh" size="mini" circle @click="rotate += 90"></el-button>
        <el-button icon="el-icon-search" size="mini" circle @click="dialogVisible = true, imgWidth = 60"></el-button>
      </el-button-group>
    </div>

    <div class="pc-img__dialog" v-show="dialogVisible" ref="pcImgDialog">
      <div class="pc-img__dialog__img-box-1">
        <div class="pc-img__dialog__img-box-2" :style="{transform: `rotate(${rotate}deg)`}">
          <img class="pc-img__dialog__img" :style="{width: `${imgWidth}%`}" :src="imgSrc">
        </div>
      </div>
      <el-button-group class="pc-img__dialog__operation-box">
        <el-button icon="el-icon-zoom-in" circle @click="imgWidth += 5"></el-button>
        <el-button icon="el-icon-zoom-out" circle @click="imgWidth -= 5"></el-button>
        <el-button icon="el-icon-refresh" circle @click="rotate += 90"></el-button>
        <el-button icon="el-icon-close" circle @click="closePcImgDialog()"></el-button>
      </el-button-group>
      <div class="pc-img__dialog__modal" @click="closePcImgDialog()"></div>
    </div>
  </div>
</template>

<script>
import index from './index'

export default {
  name: 'pc-img',
  mixins: [index]
}
</script>
