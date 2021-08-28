<template>
  <div class="header">
    <div class="header-left">
      <router-link to='/'>
        <span class="iconfont back-ico">&#xe685;</span>
      </router-link>
    </div>
    <span>城市选择</span>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header
  height $headerHeight
  line-height $headerHeight
  text-align center
  background-color $bgColor
  color #fff
  .header-left
    position absolute
    top 0
    left 0
    padding 0 .2rem
    height $headerHeight
    .back-ico
      color #fff
</style>
