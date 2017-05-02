// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import VueScroller from 'vue-scroller'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'

import './common/reset.css'
import './common/remFit'

import home from './components/home/home'
import all from './components/all/all'
import stroll from './components/stroll/stroll'
import cart from './components/cart/cart'
import usercenter from './components/usercenter/usercenter'
import register from './components/register/register'
import login from './components/login/login'
import newGoods from './components/new-goods/new-goods'

/* Vue.config.productionTip = false */

Vue.use(Router)
Vue.use(VueScroller)
Vue.use(VueLazyload, {
  error: '../static/image/error.jpg',
  loading: '../static/image/loading.png',
  try: 3
})
Vue.prototype.$ajax = Axios

let router = new Router({
  linkActiveClass: 'selected',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/stroll',
      name: 'stroll',
      component: stroll
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: usercenter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/new',
      name: 'newGoods',
      component: newGoods,
      alias: '/channel/:id'
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
