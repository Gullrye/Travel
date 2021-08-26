<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-ico">&#xe685;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe67d;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      <span>城市</span>
      <span class="iconfont arrow-ico">&#xe688;</span>
    </div>
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
  line-height .86rem
  align-items center
  background-color $bgColor
  color #fff
  .header-left
    float left
    width .64rem
    text-align center
    // .back-ico
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    margin-left .2rem
    padding-left .2rem
    background-color #fff
    border-radius .1rem
    color #ccc
  .header-right
    float right
    width 1.24rem
    text-align center
    .arrow-ico
      font-size .24rem
      margin-left -0.04rem
</style>
