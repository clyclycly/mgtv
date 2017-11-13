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
      setTimeout(() => {
        this.Scroll()
      }, 20)
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
