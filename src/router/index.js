import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/application/home'
import Login from '@/application/login'
import projectProfile from '@/application/project-profile'
import modelIview from '@/application/model-iview'
import modelManage from '@/application/model-manage'
import scheduleQuery from '@/application/schedule-query'
import scheduleControl from '@/application/schedule-control'
import implementDesc from '@/application/implement-desc'
import visualSimulation from '@/application/visual-simulation'
import crashDetection from '@/application/crash-detection'
import quantitativeStatistics from '@/application/quantitative-statistics'
import riskQuery from '@/application/risk-query'
import safetyPrecaution from '@/application/safety-precaution'

import { getCookie } from 'utils-library'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home,
    redirect: 'project-profile',
    children: [
      {
        path: 'project-profile',
        meta: {
          requireAuth: true,
        },
        component: projectProfile
      },
      {
        path: 'model-iview',
        meta: {
          requireAuth: true,
        },
        component: modelIview
      },
      {
        path: 'model-manage',
        meta: {
          requireAuth: true,
        },
        component: modelManage
      },
      {
        path: 'schedule-query',
        meta: {
          requireAuth: true,
        },
        component: scheduleQuery
      },
      {
        path: 'schedule-control',
        meta: {
          requireAuth: true,
        },
        component: scheduleControl
      },
      {
        path: 'implement-desc',
        meta: {
          requireAuth: true,
        },
        component: implementDesc
      },
      {
        path: 'visual-simulation',
        meta: {
          requireAuth: true,
        },
        component: visualSimulation
      },
      {
        path: 'crash-detection',
        meta: {
          requireAuth: true,
        },
        component: crashDetection
      },
      {
        path: 'quantitative-statistics',
        meta: {
          requireAuth: true,
        },
        component: quantitativeStatistics
      },
      {
        path: 'risk-query',
        meta: {
          requireAuth: true,
        },
        component: riskQuery
      },
      {
        path: 'safety-precaution',
        meta: {
          requireAuth: true,
        },
        component: safetyPrecaution
      },
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new Router({
  routes: routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    let user = getCookie('user')
    if (user) {
      if (to.path === '/login') {
        next('/project-profile');
      } else {
        next();
      }
    } else {
      console.log('没有');
      next('/login');
    }
  } else {
    next();
  }
});

export default router
