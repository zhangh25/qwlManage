import Vue from 'vue'
import Router from 'vue-router'
import ins from '@/components/institution/index'
import test from '@/components/institution/test'
import elder from '@/components/elder'
import home from '@/components/home/index'
import device from '@/components/device'
import waiter from '@/components/waiter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/index',
      component: home
    },
    {
      path: '/ins',
      component: ins,
      children: [
        { path: '/', component: test },
        { path: 'xxx', component: test }
      ]
    },
    { path: '/elder', component: elder },
    { path: '/device', component: device },
    { path: '/waiter', component: waiter }
  ]
})
