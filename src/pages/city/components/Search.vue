<template>
<div>
  <div class="search">
    <input v-model='keyword' type="text" class="search-input" placeholder="输入城市名或拼音">
  </div>
  <div class="search-content" ref='search' v-show='keyword'>
    <ul>
      <li class="search-item border-bottom"
          v-for='item in list'
          :key='item.id'
          @click='handleCityClick(item.name)'
      >{{ item.name }}</li>
      <li class="search-item border-bottom" v-show="hasNoData">
      没有找到匹配数据
      </li>
    </ul>
  </div>
</div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) clearTimeout(this.timer)
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout((params) => {
        const result = []
        for (let key in this.cities) {
          // 每个字母对应的城市拼音和名称是否包含所输入的文字
          this.cities[key].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.search, {
      click: true,
      mouseWheel: true
    })
  }
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
.search-content
  z-index: 1
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search-item
    line-height: .62rem
    padding-left: .2rem
    background: #fff
    color: #666
</style>
