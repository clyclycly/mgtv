<template>
  <div ref="mg">
    <slot>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    props: {
      click: {
        type: Boolean,
        default: true
      },
      scrollX: {
        type: Boolean,
        default: true
      },
      scrollY: {
        type: Boolean,
        default: true
      }
    },
    created() {
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
>>>>>>> cly
      this.$nextTick(() => { /* $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调 */
        this.$nextTick(() => {
          this.Scroll()
        })
      })
<<<<<<< eeb5b85106dfcc449a6a767f272da33f2a13e32b
=======
=======
      setTimeout(() => {
        this.Scroll()
      }, 20)
>>>>>>> cly
>>>>>>> cly
    },
    methods: {
      Scroll() {
        this.GScroll = new BScroll(this.$refs.mg, {
          click: this.click,
          scrollX: this.scrollX,
          scrollY: this.scrollY
        })
      }
    },
    components: {
      BScroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
