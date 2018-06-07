import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import targetDeatil from 'components/target-detail/target-detail'
import Target from 'components/target/target'
import Welfare from 'components/welfare/welfare'
import Mine from 'components/mine/mine'
import investLog from 'components/invest-log/invest-log'
import moneyLog from 'components/money-log/money-log'
import accountMsg from 'components/account-msg/account-msg'
import accountSafe from 'components/account-safe/account-safe'
import Login from 'components/login/login'
import Register from 'components/register/register'
import Question from 'components/question/question'
import Reglog from 'components/question-detail/reglog'
import Realcheck from 'components/question-detail/realcheck'
import Invest from 'components/question-detail/invest'
import Score from 'components/question-detail/score'
import Recharge from 'components/question-detail/recharge'
import Carry from 'components/question-detail/carry'
import Freecard from 'components/question-detail/freecard'
import Packets from 'components/question-detail/packets'

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
          path: 'investlog',
          component: investLog
        },
        {
          path: 'moneylog',
          component: moneyLog
        },
        {
          path: 'accountmsg',
          component: accountMsg
        },
        {
          path: 'accountsafe',
          component: accountSafe
        },
        {
          path: 'question',
          component: Question,
          children: [
            {
              path: 'reglog',
              component: Reglog
            },
            {
              path: 'realcheck',
              component: Realcheck
            },
            {
              path: 'invest',
              component: Invest
            },
            {
              path: 'score',
              component: Score
            },
            {
              path: 'recharge',
              component: Recharge
            },
            {
              path: 'carry',
              component: Carry
            },
            {
              path: 'freecard',
              component: Freecard
            },
            {
              path: 'packets',
              component: Packets
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    }

  ]
})
