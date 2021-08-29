<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list='list'></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [
        {title: '成人票1'},
        {title: '成人票2', children: [{title: '成人票2-1', children: [{title: '成人票2-1-1'}]}]},
        {title: '成人票3', children: [{title: '成人票3-1'}]},
        {title: '成人票4', children: [{title: '成人票4-1'}]},
        {title: '成人票5', children: [{title: '成人票5-1'}]}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.content
  height 20rem
</style>
