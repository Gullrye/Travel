<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://p0.qhimg.com/bdr/__85/t01a28d4b7b5a3d90b3.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://p0.qhimg.com/bdr/__85/t01c54879c46ecaf2a9.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background-color #fff
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 56.3%
  .swiper-img
    width 100%
</style>
