<template>
  <div class="search">
    <input type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.search
  height .72rem
  line-height .72rem
  padding 0 .1rem
  background-color $bgColor
  .search-input
    box-sizing border-box
    width 100%
    padding 0 .1rem
    text-align center
    border-radius .1rem
    color #666
</style>
