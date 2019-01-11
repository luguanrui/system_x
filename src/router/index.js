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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      redirect: 'project-profile',
      children: [
        {
          path: 'project-profile',
          component: projectProfile
        },
        {
          path: 'model-iview',
          component: modelIview
        },
        {
          path: 'model-manage',
          component: modelManage
        },
        {
          path: 'schedule-query',
          component: scheduleQuery
        },
        {
          path: 'schedule-control',
          component: scheduleControl
        },
        {
          path: 'simplement-desc',
          component: implementDesc
        },
        {
          path: 'visual-simulation',
          component: visualSimulation
        },
        {
          path: 'crash-detection',
          component: crashDetection
        },
        {
          path: 'quantitative-statistics',
          component: quantitativeStatistics
        },
        {
          path: 'risk-query',
          component: riskQuery
        },
        {
          path: 'safety-precaution',
          component: safetyPrecaution
        },
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
