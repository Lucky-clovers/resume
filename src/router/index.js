import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/header.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/login.vue'
import carousel from '../components/Carousel.vue'

Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes:[
  {path:'/login', name:'login', component:Login},
  {path:'/', redirect:'/login'},
  {path:'/header', name:'header', component:Header},
  {path:'/dot', name:'carousel', component:carousel},
  {path:'*', name:'notfound', component:NotFound}
]
})