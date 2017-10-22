<template>
  <div class="more-list-wrapper border-1px">
    <span v-html="rMsg.moduleData[0].name"></span>
    <span> > </span>
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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .more-list-wrapper
    margin 0 10px
    line-height 50px
    font-size $font-size-medium
    text-align center
    color $color-highlight-text
    border-1px(rgba(7, 17, 27, 0.1))

  /*border-top 1px solid rgba(7, 17, 27, 0.1)*/
</style>
