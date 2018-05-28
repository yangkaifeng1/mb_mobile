import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import targetDeatil from 'components/target-detail/target-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/target-detail'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/target-detail',
      component: targetDeatil
    }
  ]
})
