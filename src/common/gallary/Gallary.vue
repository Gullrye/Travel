<template>
  <div class="container" @click='handleGallaryClick'>
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
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
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/2004/18/18f1f942c9c17720a3.water.jpg_350x240_483b5185.jpg', 'http://img1.qunarzz.com/sight/p0/2004/1a/1a97d6c109be646a3.water.jpg_350x240_1ab976d9.jpg'],
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
