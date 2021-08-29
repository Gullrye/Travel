<template>
  <div>
    <router-link to="/" class="header-abs" v-show='showAbs'>
      <span class="iconfont header-abs-back">&#xe685;</span>
    </router-link>
    <div class="header-fixed" v-show='!showAbs' :style='opacityStyle'>
      <router-link to="/">
        <span class="iconfont header-fixed-back">&#xe685;</span>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
  position absolute
  top .2rem
  left .2rem
  width .8rem
  height .8rem
  line-height .8rem
  text-align center
  border-radius .4rem
  background-color rgba(0,0,0,.8)
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  z-index 2
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  text-align center
  font-size .32rem
  background-color $bgColor
  color #fff
  .header-fixed-back
    position absolute
    top 0
    left 0
    padding 0 .2rem
    height $headerHeight
    color #fff
</style>
