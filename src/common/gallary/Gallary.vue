<template>
  <div class="container" @click='handleGallaryClick'>
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in gallaryImgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 分页
        observeParents: true, // 父元素变化时swiper自动更新
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  z-index 99
  display flex
  align-items center
  background-color #000
  .wrapper
    height 0
    width 100%
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
