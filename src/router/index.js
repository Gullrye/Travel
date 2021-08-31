import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  // 热销推荐下的列表，点击后的页面都从头开始显示
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// error: Avoided redundant navigation to current location: "/"
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
