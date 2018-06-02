import Vue from 'vue'
import Router from 'vue-router'
import JokeDetails from '@/components/JokeDetails/index'
import Summary from '@/components/Summary/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'JokeDetails',
      component: JokeDetails
    },
    {
      path: '/summary',
      name: 'Summary',
      component: Summary
    },
    {
      path: '/joke/:id',
      name: 'joke',
      component: JokeDetails
    }
  ]
})
