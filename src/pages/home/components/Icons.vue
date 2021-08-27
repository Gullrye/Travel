<template>
  <div class="icons">
    <swiper class="icon-swiper" :options="swiperOption">
      <swiper-slide v-for="page of pages" :key="page.pageId" >
        <div class="icon" v-for="item in page.pageIcons" :key="item.id">
          <div class="icon-img-wrapper">
            <img :src="item.iconUrl" class="icon-img" />
          </div>
          <p class="icon-desc">{{ item.iconDesc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      // 将每8个icon放到一页
      this.list.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          // 每页设置初始空数组和id
          pages[page] = {
            pageIcons: [],
            pageId: page
          }
        }
        pages[page].pageIcons.push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons
  width 100%
  height 0
  padding-bottom 50%
  margin-top .1rem
  .icon
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img-wrapper
      box-sizing border-box
      width 50%
      height 0
      margin .1rem auto
      padding-bottom 50%
      .icon-img
        display block
        width 100%
        margin .1rem auto
    .icon-desc
      text-align center
      color $darkTextColor
      ellipsis()
</style>
