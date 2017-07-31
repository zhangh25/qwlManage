import Vue from 'vue'
import Router from 'vue-router'
import ins from '@/components/institution/index'
import test from '@/components/institution/test'
import elderList from '@/components/elder/elderList'
import elderHome from '@/components/elder/index'
import elderDetails from '@/components/elder/details'
import assess from '@/components/elder/assess'
import home from '@/components/home/index'
import device from '@/components/device'
import waiter from '@/components/waiter'
import step1 from '@/components/elder/step1'

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
    { path: '/elder', component: elderList },
    {
      path: '/elder/elderhome',
      redirect: '/elder/elderhome/details',
      component: elderHome,
      children: [
        { path: 'details', component: elderDetails },
        {
          path: 'asses',
          redirect: 'asses/step1',
          component: assess,
          children: [
            { path: 'step1', component: step1 }
          ]
        }
      ]
    },
    { path: '/device', component: device },
    { path: '/waiter', component: waiter }
  ]
})
