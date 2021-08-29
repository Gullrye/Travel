<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
  </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
div
  height 50rem
</style>
