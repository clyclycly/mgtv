<template>
  <div class="medium-title-wrapper">
    <div class="img-wrapper">
      <img class="img" :src="rMsg.moduleData[0].phoneImgUrl"
           alt="">
      <div class="text">
        <div class="item" v-html="rMsg.moduleData[0].name"></div>
        <div class="item"  v-html="rMsg.moduleData[0].subName"></div>
      </div>
    </div>
    <div class="change"> ></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      rMsg: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {}
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .medium-title-wrapper
    position relative
    padding 10px
    font-size $font-size-min-d
    color $color-content-text-d
    border-top 10px solid $color-interval-background
    .img-wrapper
      .img
        width 40px
        height 40px
        border-radius 20px
        display inline-block
        vertical-align: top
      .text
        display inline-block
        line-height 20px
        & .item:nth-child(1)
          font-size $font-size-medium-d
          color $color-text
    .change
      position absolute
      top 10px
      right 10px
      line-height 40px
      font-size 0.7rem
</style>

