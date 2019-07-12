import Vue from 'vue'
import App from './App.vue'
import router from './router/index' 
import store from './store'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
