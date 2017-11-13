<template>
  <div id="app">
    <mg-tab></mg-tab>
    <keep-alive>
      <router-view class="content-wrapper">
      </router-view>
    </keep-alive>
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
    <mg-bottom></mg-bottom>
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
    <mg-bottom></mg-bottom>
=======
>>>>>>> cly
>>>>>>> cly
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
