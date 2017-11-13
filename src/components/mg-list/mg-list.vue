<template>
  <div>
    <ul class="mg-list-wrapper">
      <li class="mg-list" v-for="item in rMsg.moduleData" :class="{sign:rMsg.moduleData.length<2}">
        <img @click="detail(item.videoId,item.imgHUrl)" v-show="!item.phoneImgUrl" class="img" v-lazy="item.imgHUrl"
             alt="">
        <img @click="detail(item.videoId,item.imgHUrl)" v-show="item.phoneImgUrl" class="img" v-lazy="item.phoneImgUrl"
             alt="">
        <span class="text" v-html="item.name"></span>
        <span v-show="rMsg.moduleData.length>1" class="text" v-html="item.subName"></span>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'

  export default {
    methods: {
      detail(id, img) {
        this.$router.push({
          path: `b/${id}`
        })
        this.qwe(img)
      },
      ...mapMutations({
        qwe: 'PLAY_IMG'
      })
    },
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

  .mg-list-wrapper
    display flex
    padding 0 10px
    margin-bottom 10px
    & .mg-list:nth-child(n+2)
      margin-left 10px
    .mg-list
      width 50%
      overflow hidden
      &.sign
        width 100%
      .img
        width 100%
      .text
        display block
        width 100%
        no-wrap()
        line-height 1.5
        color $color-content-text
        font-size $font-size-min-d
</style>
