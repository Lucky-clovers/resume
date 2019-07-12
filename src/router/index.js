import Vue from 'vue'
import Router from 'vue-router'

import Header from '../components/header.vue'
import NotFound from '../views/NotFound.vue'
import Login from '../views/login.vue'
import carousel from '../components/Carousel.vue'
import tab from '../components/tabBox.vue'
import CarouselMap from '../components/CarouselMap.vue'
/* import canvas from '../components/canvas.vue' */

Vue.use(Router)

export default new Router({
  mode:'history',  //使用history防止url中出现#
  routes:[
  {path:'/login', name:'login', component:Login, meta:{
    title:'登陆'
  }},
  {path:'/car', name:'CarouselMap', component:CarouselMap, meta:{
    title:'大图'
  }},
  {path:'/tab', name:'tab', component:tab, meta:{
    title:'首页'
  }},
  /* {path:'/canvas', name:'canvas', component:canvas, meta:{
    title:'动态粒子效果'
  }}, */
  {path:'/', redirect:'/login', meta:{
    title:'登陆'
  }},
  {path:'/header', name:'header', component:Header},
  {path:'/dot', name:'carousel', component:carousel, meta: {
    title: '轮播'
  }},
  {path:'*', name:'notfound', component:NotFound, meta:{
    title:'找不到页面'
  }}
]
})
