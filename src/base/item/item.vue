<template>
  <div>
    <ul>
      <li v-for="{(item,$index) in msg">
        <component :is="moduleStyle($index)" :rMsg="msg[$index]" v-if="msg[$index]"></component>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import {getMsg} from 'api/discList'
  import {ERR_OK} from 'api/config'
  import MinTitle from 'base/min-title/min-title'
  import MediumTitle from 'base/medium-title/medium-title'
  import MgList from 'base/mg-list/mg-list'
  import Slider from 'base/slider/slider'
  import MortList from 'base/more-list/more-list'
  import MgStar from 'base/mg-star/mg-star'

  export default {
    props: {
      id: {
        type: Number,
        default: 143
      }
    },
    created() {
      this._getMsg()
    },
    data() {
      return {
        msg: []
      }
    },
    methods: {
      _getMsg() {
        getMsg(this.id).then((res) => {
          if (res.code === ERR_OK) {
            this.msg = res.data
          }
        })
      },
      moduleStyle($index) {
        if (this.msg.length) { /* 保证在有数据情况下的渲染 */
          if (this.msg[$index].moduleType === 'more') {
            return 'mort-list'
          }
          if (this.msg[$index].moduleType === 'banner') {
            return 'Slider'
          }
          if (this.msg[$index].moduleType === 'ipmodel') {
            return 'medium-title'
          }
          if (this.msg[$index].moduleType.indexOf('cross') > -1 || this.msg[$index].moduleType === 'hypsog') {
            /* index0f返回第一次出现'crossm'的位置 */
            return 'mg-list'
          }
          if (this.msg[$index].moduleType === 'title') {
            return 'min-title'
          }
          if (this.msg[$index].moduleType === 'circle') {
            return 'mg-star'
          }
        }
      }
    },
    components: {
      MinTitle,
      MgList,
      Slider,
      MediumTitle,
      MortList,
      MgStar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
