// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
 
Vue.use(Vuetify, {
	theme: {
	    primary: '#3f51b5',
	    secondary: '#b0bec5',
	    accent: '#8c9eff',
	    error: '#b71c1c'
	 }
})

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'babel-polyfill'



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
