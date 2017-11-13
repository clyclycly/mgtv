<template>
  <div style="padding: 0 10px">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">1这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">2这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">3这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">4这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">4这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">4这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
    <div style="font-size: 12px;text-align: center;line-height: 30px;background-color: white">5这个地方先用图片，其他组件还没写</div>
    <img :src="playImg" style="width: 100%" alt="">
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import {getMsg} from 'api/playList'
  import {ERR_OK} from 'api/config'

  export default {
    created() {
      this._getMsg()
    },
    methods: {
      _getMsg() {
        if (this.playImg.length < 0) {
          console.log(1)
          this.$router.push({
            path: `../home`
          })
        }
        getMsg(3268264).then((res) => { // 这个地方悲剧了，3268264这种值要先进入1916345才能拿到，被加密了，日
          if (res.code === ERR_OK) {
            this.msg = res.data
          }
        })
      }
    },
    computed: {
      ...mapGetters([
        'playImg'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
