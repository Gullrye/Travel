<template>
  <div>
    <div class="banner" @click='handleBannerClick'>
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{ sightName }}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe77b; {{ gallaryImgs.length }}</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary @close='handleGallaryClose' v-show='showGallary' :gallaryImgs='gallaryImgs'>gallary</common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleGallaryClose () {
      this.showGallary = false
    },
    handleBannerClick () {
      this.showGallary = true
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 56%
  background-color #f4f4f4
  .banner-img
    width 100%
  .banner-info
    display flex
    align-items center
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .2rem
    .banner-number
      height: .32rem
      line-height: .32rem
      padding .06rem .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .6)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
</style>
