<template>
<div class="recommend">
  <div class="title">热销推荐</div>
  <div class="item border-bottom" v-for='item in list' :key='item.id'>
    <img :src='item.imgUrl' class="item-img">
    <div class="item-info">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-desc">{{ item.desc }}</p>
      <button class="item-button">查看详情</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeRecommend',
  data () {
    return {
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  height .44rem
  line-height .44rem
  padding .1rem .2rem
  background-color #f4f4f4
.item
  display flex
  padding .2rem
  height 1.5rem
  .item-img
    width 1.5rem
    height 1.5rem
  .item-info
    min-width 0
    padding-left .2rem
    display flex
    flex-direction column
    justify-content space-between
    .item-title
      height .5rem
      line-height .5rem
      font-size .32rem
      color #212121
    .item-desc
      height .4rem
      line-height .4rem
      color #616161
      ellipsis()
    .item-button
      width 1.2rem
      border-radius .06rem
      color #fff
      background-color orange
</style>
