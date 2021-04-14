import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Config from '../views/Config.vue'
import About from '../views/About.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Home
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    children: [
      {
        path: 'config',
        name: 'Config',
        component: Config
      },
      {
        path: 'about',
        component: About

      },
      {
        path: 'userInfo',
        component: About
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  routes
})

export default router
