<template>
<div class="recommend">
  <div class="title">热销推荐</div>
  <div class="item" v-for='item in recommentList' :key='item.id'>
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
  name: 'HomeRecommend',
  data () {
    return {
      recommentList: [
        {
          id: '0001',
          title: '故宫',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
          desc: '世界五大宫之首，穿越与您近在咫尺'
        },
        {
          id: '0002',
          title: '北京欢乐谷',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2108/62/6215a22f18d45a3ba3.water.jpg_200x200_d266c79f.jpg',
          desc: '亚洲唯一飞行式过山车等你来挑战'
        },
        {
          id: '0003',
          title: '八达岭长城',
          imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/39/3979f1867defec4ea3.water.jpg_200x200_325a015d.jpg',
          desc: '不到长城非好汉'
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
  display flex
  padding .2rem
  border-bottom 1px solid #eee
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
