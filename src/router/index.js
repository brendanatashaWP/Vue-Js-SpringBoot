import Vue from 'vue'
import Router from 'vue-router'
import CreateNewCustomer from '@/components/CreateNewCustomer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Add Customer',
      component: CreateNewCustomer
    }
  ]
})
