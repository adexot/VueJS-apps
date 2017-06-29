import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Vsearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Vsearch',
      component: Hello
    }
  ]
})
