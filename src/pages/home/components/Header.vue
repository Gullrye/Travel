<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-ico">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <span>{{ this.$store.state.city }}</span>
        <span class="iconfont arrow-ico">&#xe688;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  display flex
  height $headerHeight
  line-height $headerHeight
  align-items center
  background-color $bgColor
  color #fff
  .header-left
    float left
    padding 0 .2rem
    height $headerHeight
    text-align center
  .header-input
    flex 1
    height .6rem
    line-height .6rem
    padding-left .2rem
    background-color #fff
    border-radius .06rem
    color #ccc
  .header-right
    float right
    padding 0 .16rem
    text-align center
    color #fff
    ellipsis()
    .arrow-ico
      font-size .24rem
</style>
