import Vue from 'vue'
import Router from '_vue-router@3.0.6@vue-router'
import Imports from '@/pages'
import indexPage from '@/pages/indexPage/indexPage'
import shopCar from '@/pages/shoppingCar/shoppingCar'
import mySelf from '@/pages/mySelf/mySelf'
import login from '@/pages/login/login'

import hotShop from '@indexPage/hotShop/hotShop'
import storeRecommend from '@indexPage/storeRecommend/storeRecommend'
import promotion from '@indexPage/promotion/promotion'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Imports,
      redirect: '/index/hotShop',
      children: [
        {
          path: '/index',
          name: 'IndexPage',
          component: indexPage,
          children: [
            {
              path: 'hotShop',
              name: 'HotShop',
              component: hotShop
            },
            {
              path: 'storeRecommend',
              name: 'StoreRecommend',
              component: storeRecommend
            },
            {
              path: 'promotion',
              name: 'Promotion',
              component: promotion
            }
          ]
        },
        {
          path: '/shoppingCar',
          name: 'ShoppingCar',
          component: shopCar
        },
        {
          path: '/mySelf',
          name: 'MySelf',
          component: mySelf
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    }
  ]
})
