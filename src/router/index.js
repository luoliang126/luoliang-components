import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/template/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }
  ]
})
