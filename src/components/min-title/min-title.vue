<template>
  <div class="min-title-wrapper">
    <div v-html="rMsg.moduleData[0].name"></div>
    <div class="change">换一换</div>
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

  .min-title-wrapper
    position relative
    padding 0 10px
    line-height 42px
    font-size $font-size-medium
    color $color-text
    border-top 10px solid $color-interval-background
    .change
      position absolute
      top 0
      right 10px
      font-size 12px
      color $color-highlight-text
</style>
