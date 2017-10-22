<template>
  <scroll :scrollY="false">
    <div class="tab-wrapper" ref="mg">
      <router-link class="tab-item" to="/home"><!--tag="div"后在手机百度app看不字-->
        <span class="tab-link">精选</span>
      </router-link>
      <router-link class="tab-item" to="/tv">
        <span class="tab-link">电视剧</span>
      </router-link>
      <router-link class="tab-item" to="/show">
        <span class="tab-link">综艺</span>
      </router-link>
      <router-link class="tab-item" to="/music">
        <span class="tab-link">音乐</span>
      </router-link>
      <router-link class="tab-item" to="/news">
        <span class="tab-link">新闻</span>
      </router-link>
      <router-link class="tab-item" to="/edu">
        <span class="tab-link">教育</span>
      </router-link>
      <router-link class="tab-item" to="/doc">
        <span class="tab-link">记录片</span>
      </router-link>
      <router-link class="tab-item" to="/child">
        <span class="tab-link">少儿</span>
      </router-link>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    mounted() {
      this.$nextTick(() => {
        this.children = this.$refs.mg.children
        let width = 0
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i].clientWidth
          width += child
        }
        this.$refs.mg.style.width = (width + 20 + 2) + 'px' // 加2兼容安卓android
      })
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .tab-wrapper
    position fixed
    top 0
    line-height 40px
    height 40px
    font-size 0
    padding 0 10px
    background-color rgba(255, 255, 255, 0.8)
    z-index 100
    .tab-item
      display inline-block
      font-size $font-size-medium
      color $color-text
      padding 0 10px
      &.router-link-active
        color $color-highlight-text
</style>
