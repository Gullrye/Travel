<template>
  <div class="wrapper">
    <swiper :options="swiperOptions" v-if='showSwiper'>
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="swiper-img" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true // 循环轮播
      }
    }
  },
  computed: {
    // swiper的创建是空数组创建的，需要解决swiper展示最后一张图的问题
    showSwiper () {
      return this.list.length
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
  background-color #ccc
  .swiper-img
    width 100%
</style>
