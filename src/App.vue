<template>
  <div id="app">
    <mg-tab></mg-tab>
    <keep-alive>
      <router-view class="content-wrapper">
      </router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import mgTab from 'components/mg-tab/mg-tab'
  import mgBottom from 'components/mg-bottom/mg-bottom'

  export default {
    components: {
      mgTab,
      mgBottom
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .content-wrapper
    margin-top 40px
</style>
