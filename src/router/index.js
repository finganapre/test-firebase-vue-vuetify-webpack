import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Contacts from '@/components/Contacts'
import About from '@/components/About'
import DesignerOfPhotobooks from '@/components/DesignerOfPhotobooks/DesignerOfPhotobooks.vue'
import BaguetteDesigner from '@/components/BaguetteDesigner/BaguetteDesigner.vue'
import Page404 from '@/components/Page404'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
  	// внутренние ссылки
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
    	path: '/about',
    	name: 'About',
    	component: About
    },
    {
    	path: '/designer-of-photobooks',
    	name: 'DesignerOfPhotobooks',
    	component: DesignerOfPhotobooks
    },
    {
    	path: '/baguette-designer',
    	name: 'BaguetteDesigner',
    	component: BaguetteDesigner
    },

    // внешние ссылки
    {
    	path: '/tetadesign',
    	beforeEnter(to, from, next) {
    	        window.location = "http://www.tetadesign.ru/";
    	}
    },
    {
    	path: '/superclass',
    	beforeEnter(to, from, next) {
    	        window.location = "http://fotostoriya.ru/";
    	}
    },

    // обработка ошибок  
    {
    	path: '*',
    	name: 'Page404',
    	component: Page404
    }
  ]
})
