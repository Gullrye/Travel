<template>
  <div class="list" ref='wrapper'>
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.$store.state.city }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hot" :key="item.id" @click='handleCityClick(item.name)'>
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for='(item, key) of cities' :key='key' :ref='key'>
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key='innerItem.id' @click='handleCityClick(innerItem.name)'>{{ innerItem.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  props: {
    cities: Object,
    hot: Array,
    letter: String
  },
  name: 'CityList',
  data () {
    return {
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      // 改变城市后跳转到首页
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
      mouseWheel: true
    })
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
    padding-left .2rem
    font-size .26rem
    background-color #f5f5f5
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
        border: .02rem solid #ccc
        border-radius .06rem
  .item-list
    .item
      line-height .76rem
      padding-left .2rem
      background-color #fff
</style>
