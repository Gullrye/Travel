<template>
<div class="weekend">
  <div class="title">周末去哪儿</div>
  <div class="item" v-for='item in list' :key='item.id'>
    <div class="item-img-wrapper">
      <img :src='item.imgUrl' class="item-img">
    </div>
    <div class="item-info">
      <p class="item-title">{{ item.title }}</p>
      <p class="item-desc">{{ item.desc }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeWeekend',
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
  margin-bottom .1rem
  .item-img-wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 38%
    .item-img
      width 100%
  .item-info
    padding .1rem
    padding-left .2rem
    .item-title
      height .5rem
      line-height .5rem
      font-size .28rem
      color #212121
    .item-desc
      height .4rem
      line-height .4rem
      font-size .24rem
      color #616161
      ellipsis()
</style>
