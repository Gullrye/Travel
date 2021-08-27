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
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '0001',
          iconUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          iconDesc: '景点门票'
        },
        {
          id: '0002',
          iconUrl: '//s.qunarzz.com/homenode/images/touchheader/flight.png',
          iconDesc: '机票'
        },
        {
          id: '0003',
          iconUrl: '//s.qunarzz.com/homenode/images/touchheader/train.png',
          iconDesc: '火车票'
        },
        {
          id: '0004',
          iconUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          iconDesc: '火车票'
        },
        {
          id: '0005',
          iconUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          iconDesc: '度假'
        },
        {
          id: '0006',
          iconUrl:
            'https://picbed.qunarzz.com/f5e5770393d759578962e53ee67798c8.png',
          iconDesc: '海外酒店'
        },
        {
          id: '0007',
          iconUrl:
            'https://picbed.qunarzz.com/a36d2288f19e54562338f4d8ef986288.png',
          iconDesc: '低价门票'
        },
        {
          id: '0008',
          iconUrl:
            'https://picbed.qunarzz.com/ae617a31e0bd5803d76918b817f6d942.png',
          iconDesc: '自由行'
        },
        {
          id: '0009',
          iconUrl:
            'https://picbed.qunarzz.com/377db8cb2143aebf01869c9baad3d325.png',
          iconDesc: '汽车票船票'
        }
      ],
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      // 将每8个icon放到一页
      this.iconList.forEach((item, index) => {
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
      console.log(pages)
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
