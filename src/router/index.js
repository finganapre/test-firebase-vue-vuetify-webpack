import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/contacts',
    	name: 'Contacts',
    	component: Contacts
    },
    {
    	path: '*',
    	name: 'Page404',
    	component: Page404
    }
  ]
})
