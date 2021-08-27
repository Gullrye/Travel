<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">A</div>
        <div class="item-list">
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
          <div class="item border-bottom">阿根廷</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  data () {
    return {
      hot: [
        {
          id: '0001',
          name: '北京'
        },
        {
          id: '0002',
          name: '北京'
        },
        {
          id: '0003',
          name: '北京'
        },
        {
          id: '0004',
          name: '北京'
        },
        {
          id: '0005',
          name: '北京'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  overflow hidden
  position absolute
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #f5f5f5
  .title
    height .54rem
    line-height .54rem
    padding .06rem .2rem
    font-size .266rem
  .button-list
    overflow hidden
    padding: .1rem .6rem .1rem .1rem
    background-color #fff
    .button-wrapper
      float left
      width 33.3%
      .button
        margin .1rem
        padding .1rem 0
        border .02rem solid #ccc
        text-align center
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
      background-color #fff
</style>
