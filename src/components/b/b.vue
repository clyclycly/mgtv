<template>
  <transition name="fade">
    <scroll class="b-wrapper">
      <router-view>
      </router-view>
    </scroll>
  </transition>
</template>
<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .b-wrapper
    position absolute
    top -40px
    left 0
    right 0
    bottom 0
    z-index 100
    overflow hidden
    background-color white

  .fade-enter-active, .fade-leave-active
    transition all 0.3s

  .fade-enter, .fade-leave-to
    transform rotate(-20deg) scale(0.5)
</style>


<!--
<template>
  <div class="b-wrapper">
    <scroll :scrollY="true">
      <div style="width: 1000px;overflow: hidden;height: 100px">
        <div>111111111112</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>11111111111</div>
        <div>111111111112</div>
       &lt;!&ndash; <router-view></router-view>&ndash;&gt;
      </div>
       &lt;!&ndash; <router-view></router-view>&ndash;&gt;
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .b-wrapper
    position absolute
    z-index 100
    height 300px
    overflow hidden

  .fade-enter-active, .fade-leave-active
    transition all 0.3s

  .fade-enter, .fade-leave-to
    transform rotate(-20deg) scale(0.5)
</style>
-->
