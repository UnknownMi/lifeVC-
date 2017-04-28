import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import all from '../components/all/all'
import stroll from '../components/stroll/stroll'
import cart from '../components/cart/cart'
import usercenter from '../components/usercenter/usercenter'

Vue.use(Router)

export default new Router({
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
        }
    ]
})

