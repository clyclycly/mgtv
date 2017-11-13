<template>
  <div>
    <ul class="mg-star-wrapper">
      <li class="mg-star" v-for="item in rMsg.moduleData">
        <img class="img" :src="item.phoneImgUrl" alt="">
        <span class="name" v-html="item.name"></span>
      </li>
    </ul>
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

  .mg-star-wrapper
    display flex
    padding 0 10px
    margin-bottom 10px
    .mg-star
      padding 12px
      width 25%
      .img
        display block
        width 2.5rem
        margin 0 auto
        margin-bottom 10px
        border-radius 50%
      .name
        display block
        width 100%
        text-align center
        line-height 1.5
        color $color-content-text
        font-size $font-size-min-d
</style>
