import Vue from 'vue'
import Router from 'vue-router'
import Vsearch from '@/components/Vsearch'
import Task from '@/components/Task'
import Comment from '@/components/Comment'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/vsearch',
      name: 'vsearch',
      component: Vsearch
    },
    {
      path: '/task',
      name: 'task',
      component: Task
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    }
  ]
})
