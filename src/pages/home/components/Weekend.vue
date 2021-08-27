<template>
<div class="recommend">
  <div class="title">周末去哪儿</div>
  <div class="item" v-for='item in recommentList' :key='item.id'>
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
  name: 'HomeWeekend',
  data () {
    return {
      recommentList: [
        {
          id: '0001',
          title: '京城周末撒欢',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
          desc: '在帝都过周末，不仅仅是城中游！'
        },
        {
          id: '0002',
          title: '漂流勇进，烧烤露营',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          desc: '轻松水上漂，任我乐逍遥'
        },
        {
          id: '0003',
          title: '北京清凉避暑胜地',
          imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/53/02091f1ee43d0a.jpg_r_640x214_2e3256b1.jpg',
          desc: '到大自然中享受“天然空调”的清凉'
        }
      ]
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
