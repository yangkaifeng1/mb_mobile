import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import targetDeatil from 'components/target-detail/target-detail'
import targetInvest from 'components/target-invest/target-invest'
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
import questionDetail from 'components/question-detail/question-detail'
import About from 'components/about/about'
import companyDes from 'components/company-des/company-des'
import Contact from 'components/contact/contact'
import scoreLog from 'components/score-log/score-log'


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
          component: targetInvest,
          children: [
            {
              path: 'targetdetail',
              component: targetDeatil
            }
          ]
        }
      ]
    },
    {
      path: '/welfare',
      component: Welfare,
      children: [
        {
          path: 'scorelog',
          component: scoreLog
        }
      ]
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
              path: ':url',
              component: questionDetail
            }
          ]
        },
        {
          path: 'about',
          component: About,
          children: [
            {
              path: 'companydes',
              component: companyDes
            },
            {
              path: 'contact',
              component: Contact
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
