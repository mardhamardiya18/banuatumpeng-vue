import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Import AOS
import AOS from "aos"
import 'aos/dist/aos.css'
AOS.init()




Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')

    },
    {
      path: '/testimoni',
      name: 'testi',
      component: () => import('@/views/Testi.vue')

    },
    {
      path: '/katalog',
      name: 'katalog',
      component: () => import('@/views/Katalog.vue')

    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'PageNotFound',
      component: () => import('@/views/PageNotFound.vue')

    }

  ],
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
