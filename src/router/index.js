import Vue from 'vue'
import Router from 'vue-router'
import VsStage from '@/components/VsStage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'VsStage',
      component: VsStage
    }
  ]
})
