import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import targetDeatil from 'components/target-detail/target-detail'
import Target from 'components/target/target'
import Welfare from 'components/welfare/welfare'
import Mine from 'components/mine/mine'
import investLog from 'components/invest-log/invest-log'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/target',
      component: Target,
      children: [
        {
          path: ':id',
          component: targetDeatil
        }
      ]
    },
    {
      path: '/welfare',
      component: Welfare
    },
    {
      path: '/mine',
      component: Mine,
      children: [
        {
          path: '/investlog',
          component: investLog
        }
      ]
    }
  ]
})
