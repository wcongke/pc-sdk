<style lang="stylus" scoped>
@import '../packages/pc-bc/stylus/index.styl'

.app-view
  overflow-y hidden

  &__container
    width 1140px
    padding 0
    margin 0 auto
    height 100%
    box-sizing border-box

  &__logo
    font-size $fs-xxl
    color $color-blue2
    float left

  &__nav
    float right

  &__header-wrapper
    position fixed
    left 0
    right 0
    top 0
    z-index 2000
    // border-bottom 1px solid $color-grey5

  &__header
    height 60px
    background-color $color-white
    position relative
    line-height 60px
    width 100%
    top 0
    left 0

  &__body-wrapper
    padding 0
    margin-top 0
    height 100%
    min-height auto

  &__body
    height calc(100% - 60px)
    margin-top 60px

  .sdk
    &-scrollbar
      position relative
      overflow hidden

      &__warp
        overflow scroll
        overflow-x auto
        height 100%

    &-component

      &__menu
        width 240px
        position fixed
        top 0
        bottom 0
        margin-top 60px
        margin-left -20px
        margin-bottom 20px
        padding-top 20px
        transition padding-top .3s
        overflow-y auto
        // border-right 1px solid $color-grey5

        &--title
          margin-left 20px

      &__content
        padding-top 20px
        padding-left 270px
        padding-bottom 100px
        box-sizing border-box
</style>

<template>
  <div id="app" class="app-view">
    <div class="app-view__header-wrapper">
      <header class="app-view__header">
        <div class="app-view__container">
          <h1 class="app-view__logo">CAN PC SDK</h1>
          <div class="app-view__nav">
            <base-horizontal-menu :menu="HorizontalMenu.list"/>
          </div>
        </div>
      </header>
    </div>
    <div class="app-view__body-wrapper">
      <div class="app-view__body sdk-scrollbar">
        <div class="sdk-scrollbar__warp">
          <div class="app-view__container sdk-component">
            <div class="sdk-component__menu">
              <h4 class="sdk-component__menu--title">组件</h4>
              <base-vertical-menu :menu="VerticalMenu"/>
            </div>
            <div class="sdk-component__content">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalMenu from './common/horizontal-menu'
import VerticalMenu from './common/vertical-menu'

export default {
  data () {
    return {
      HorizontalMenu: HorizontalMenu(),
      VerticalMenu: VerticalMenu()
    }
  }
}
</script>
